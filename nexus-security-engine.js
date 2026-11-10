/*
 * NEXUS POS — LOCAL SECURITY ENGINE
 * Version 1.1.0
 *
 * Local device gate only. This is NOT server authentication or payment verification.
 * WebAuthn platform authentication is requested from the OS; server-side assertion
 * verification is required before treating an identity as authoritative.
 */
(function (root) {
  "use strict";
  if (!root || root.NexusSecurity) return;

  const STORE = "nexus_security_state_v2";
  const AUDIT = "nexus_security_audit_v2";
  const VERSION = 2;
  const ITERATIONS = 310000;
  const MIN_PIN = 6;
  const MAX_PIN = 12;
  const LOCK_SECONDS = [60, 300, 900, 1800];
  const IDLE_DEFAULT = 5 * 60 * 1000;
  const AUDIT_LIMIT = 150;

  let state = null;
  let ready = false;
  let busy = false;
  let session = { unlocked: false, lastActivity: 0, authenticatedAt: 0 };
  let idleTimer = null;
  let listeners = Object.create(null);
  let settings = { lockWhenHidden: false };

  const time = () => Date.now();
  const isSecure = () => !!(root.isSecureContext &&
    root.crypto && root.crypto.subtle && root.crypto.getRandomValues);
  const random = n => {
    const b = new Uint8Array(n);
    root.crypto.getRandomValues(b);
    return b;
  };
  const hex = b => Array.from(new Uint8Array(b),
    x => x.toString(16).padStart(2, "0")).join("");
  const fromHex = s => {
    if (typeof s !== "string" || !/^(?:[0-9a-f]{2})+$/i.test(s)) {
      throw new Error("सुरक्षा डेटा अमान्य है।");
    }
    return new Uint8Array(s.match(/.{2}/g).map(x => parseInt(x, 16)));
  };
  const toB64 = b => {
    let s = "";
    new Uint8Array(b).forEach(x => { s += String.fromCharCode(x); });
    return root.btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  };
  const fromB64 = s => {
    const x = String(s).replace(/-/g, "+").replace(/_/g, "/");
    const bin = root.atob(x + "=".repeat((4 - x.length % 4) % 4));
    return Uint8Array.from(bin, c => c.charCodeAt(0));
  };
  const parse = (s, fallback) => {
    try { return s ? JSON.parse(s) : fallback; } catch (_) { return fallback; }
  };

  function emit(name, data) {
    (listeners[name] || []).slice().forEach(fn => {
      try { fn(data); } catch (e) { setTimeout(() => { throw e; }, 0); }
    });
    (listeners["*"] || []).slice().forEach(fn => {
      try { fn({ event: name, data }); } catch (e) { setTimeout(() => { throw e; }, 0); }
    });
  }
  function audit(event, detail) {
    try {
      const rows = parse(root.localStorage.getItem(AUDIT), []);
      rows.push({ time: new Date().toISOString(),
        event: String(event).slice(0, 48),
        detail: String(detail || "").slice(0, 160) });
      root.localStorage.setItem(AUDIT, JSON.stringify(rows.slice(-AUDIT_LIMIT)));
    } catch (_) {}
    emit("audit", { event, detail: detail || "" });
  }
  function newState() {
    return {
      version: VERSION,
      configured: false,
      pin: null,
      biometric: null,
      failed: 0,
      lockLevel: 0,
      lockUntil: 0,
      idleTimeoutMs: IDLE_DEFAULT,
      deviceId: hex(random(16)),
      createdAt: time()
    };
  }
  function load() {
    const raw = root.localStorage.getItem(STORE);
    if (!raw) return newState();
    const s = parse(raw, null);
    if (!s || s.version !== VERSION ||
        !Number.isInteger(s.failed) || s.failed < 0 || s.failed > 2 ||
        !Number.isInteger(s.lockLevel) || s.lockLevel < 0 ||
        !Number.isSafeInteger(s.lockUntil) || s.lockUntil < 0 ||
        typeof s.deviceId !== "string" ||
        !Number.isFinite(s.idleTimeoutMs) || s.idleTimeoutMs < 30000 || s.idleTimeoutMs > 3600000) {
      throw new Error("सुरक्षा डेटा खराब या बदला हुआ मिला। सिस्टम सुरक्षित रूप से लॉक रहेगा।");
    }
    if (s.configured && (!s.pin || typeof s.pin.salt !== "string" ||
        typeof s.pin.hash !== "string" || s.pin.hash.length !== 64)) {
      throw new Error("PIN सुरक्षा रिकॉर्ड अमान्य है।");
    }
    return s;
  }
  function save() {
    if (!state) throw new Error("सुरक्षा स्थिति उपलब्ध नहीं है।");
    root.localStorage.setItem(STORE, JSON.stringify(state));
  }
  function requireReady() {
    if (!ready || !state) throw new Error("सुरक्षा इंजन शुरू नहीं हुआ या सुरक्षा डेटा खराब है।");
  }
  function requireCrypto() {
    if (!isSecure()) throw new Error("PIN/बायोमेट्रिक सेटअप के लिए HTTPS या localhost जरूरी है।");
  }
  function validatePin(pin) {
    const p = String(pin == null ? "" : pin);
    if (!new RegExp("^\\d{" + MIN_PIN + "," + MAX_PIN + "}$").test(p)) {
      throw new Error("PIN 6 से 12 अंकों का होना चाहिए।");
    }
    if (/^([0-9])\1+$/.test(p) ||
        /^(012345|123456|1234567|12345678|654321|000000)$/.test(p)) {
      throw new Error("यह PIN बहुत आसान है। कृपया दूसरा PIN चुनें।");
    }
    return p;
  }
  async function hashPin(pin, saltHex) {
    requireCrypto();
    const key = await root.crypto.subtle.importKey(
      "raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveBits"]);
    const bits = await root.crypto.subtle.deriveBits({
      name: "PBKDF2", salt: fromHex(saltHex),
      iterations: ITERATIONS, hash: "SHA-256"
    }, key, 256);
    return hex(bits);
  }
  function equal(a, b) {
    if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }
  function remainingLock() {
    return Math.max(0, Number(state && state.lockUntil || 0) - time());
  }
  function checkLock() {
    const ms = remainingLock();
    if (ms > 0) throw new Error("सुरक्षा लॉक सक्रिय है। " + Math.ceil(ms / 1000) + " सेकंड बाद कोशिश करें।");
    if (state && state.lockUntil) { state.lockUntil = 0; save(); }
  }
    function failedAttempt(reason) {
    state.failed += 1;
    let locked = false;
    let seconds = 0;
    if (state.failed >= 3) {
      seconds = LOCK_SECONDS[Math.min(state.lockLevel, LOCK_SECONDS.length - 1)];
      state.lockUntil = time() + seconds * 1000;
      state.failed = 0;
      state.lockLevel = Math.min(state.lockLevel + 1, LOCK_SECONDS.length - 1);
      locked = true;
    }
    save();
    audit(locked ? "lockout" : "authentication-failed", reason || "गलत PIN");
    if (locked) stopSession("authentication-lockout");
    const result = { locked, remainingAttempts: locked ? 0 : 3 - state.failed, lockSeconds: seconds };
    emit("failed-attempt", result);
    return result;
  }
  function clearFailures() {
    state.failed = 0;
    state.lockLevel = 0;
    state.lockUntil = 0;
    save();
  }
  function startSession(method) {
    session.unlocked = true;
    session.lastActivity = time();
    session.authenticatedAt = time();
    clearFailures();
    audit("unlocked", method);
    emit("unlocked", { method });
    planIdleLock();
  }
  function stopSession(reason) {
    if (!session.unlocked) return;
    session.unlocked = false;
    session.lastActivity = 0;
    session.authenticatedAt = 0;
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = null;
    audit("locked", reason || "manual");
    emit("locked", { reason: reason || "manual" });
  }
  function planIdleLock() {
    if (idleTimer) clearTimeout(idleTimer);
    if (!session.unlocked) return;
    const wait = Math.max(250, state.idleTimeoutMs - (time() - session.lastActivity));
    idleTimer = setTimeout(() => {
      if (session.unlocked && time() - session.lastActivity >= state.idleTimeoutMs) {
        stopSession("idle-timeout");
      } else planIdleLock();
    }, wait);
  }
  function touch() {
    if (!session.unlocked) return false;
    session.lastActivity = time();
    planIdleLock();
    return true;
  }
  function requireUnlocked() {
    requireReady();
    if (!session.unlocked) throw new Error("पहले PIN या बायोमेट्रिक से अनलॉक करें।");
  }
  function requireRecentAuth(maxAgeMs) {
    requireUnlocked();
    const limit = Number(maxAgeMs || 60000);
    if (!Number.isFinite(limit) || limit < 1000 || limit > 10 * 60 * 1000) {
      throw new Error("री-ऑथेंटिकेशन समय सीमा अमान्य है।");
    }
    if (time() - session.authenticatedAt > limit) {
      throw new Error("सुरक्षा के लिए दोबारा PIN या बायोमेट्रिक सत्यापन जरूरी है।");
    }
    return true;
  }

  async function setupPin(pin) {
    requireReady();
    requireCrypto();
    if (state.configured) throw new Error("PIN पहले से सेट है। बदलने के लिए changePin उपयोग करें।");
    const p = validatePin(pin);
    const salt = hex(random(16));
    const hash = await hashPin(p, salt);
    state.pin = { salt, hash, algorithm: "PBKDF2-SHA256", iterations: ITERATIONS };
    state.configured = true;
    save();
    startSession("first-time-pin-setup");
    return getStatus();
  }
  async function verifyPin(pin) {
    requireReady();
    requireCrypto();
    if (!state.configured) throw new Error("पहले सुरक्षा सेटअप करके PIN बनाएँ।");
    checkLock();
    if (busy) throw new Error("सत्यापन चल रहा है। एक क्षण रुकें।");
    busy = true;
    try {
      let p;
      try { p = validatePin(pin); }
      catch (e) {
        const r = failedAttempt(e.message);
        return { ok: false, ...r, message: r.locked
          ? "तीन गलत प्रयास। " + r.lockSeconds + " सेकंड लॉक।" : e.message };
      }
      const candidate = await hashPin(p, state.pin.salt);
      if (!equal(candidate, state.pin.hash)) {
        const r = failedAttempt("गलत PIN");
        return { ok: false, ...r, message: r.locked
          ? "तीन गलत प्रयास। " + r.lockSeconds + " सेकंड लॉक।"
          : "गलत PIN। " + r.remainingAttempts + " प्रयास शेष।" };
      }
      startSession("pin");
      return { ok: true, message: "PIN सही है।", status: getStatus() };
    } finally { busy = false; }
  }
  async function changePin(oldPin, newPin) {
    requireReady();
    const oldResult = await verifyPin(oldPin);
    if (!oldResult.ok) throw new Error(oldResult.message);
    const p = validatePin(newPin);
    const salt = hex(random(16));
    const hash = await hashPin(p, salt);
    state.pin = { salt, hash, algorithm: "PBKDF2-SHA256", iterations: ITERATIONS };
    save();
    startSession("pin-changed");
    audit("pin-changed", "PIN updated");
    return true;
  }
  function biometricAvailable() {
    return !!(root.isSecureContext && root.PublicKeyCredential &&
      root.navigator && root.navigator.credentials &&
      typeof root.navigator.credentials.create === "function" &&
      typeof root.navigator.credentials.get === "function");
  }
  async function addBiometric() {
    requireReady();
    requireRecentAuth(60000);
    if (!biometricAvailable()) throw new Error("इस डिवाइस/ब्राउज़र में WebAuthn बायोमेट्रिक उपलब्ध नहीं है।");
    if (root.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
      const ok = await root.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      if (!ok) throw new Error("इस डिवाइस में Fingerprint/Face वाला प्लेटफॉर्म ऑथेंटिकेटर उपलब्ध नहीं है।");
    }
    const userHandle = random(16);
    const credential = await root.navigator.credentials.create({ publicKey: {
      challenge: random(32),
      rp: { name: "NEXUS POS", id: root.location.hostname },
      user: { id: userHandle, name: "nexus-pos-owner", displayName: "NEXUS POS Owner" },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
      authenticatorSelection: {
        authenticatorAttachment: "platform",
        userVerification: "required",
        residentKey: "preferred"
      },
      timeout: 60000,
      attestation: "none"
    }});
      if (!credential || !credential.rawId) throw new Error("बायोमेट्रिक पंजीकरण पूरा नहीं हुआ।");
    state.biometric = { credentialId: toB64(credential.rawId), addedAt: time() };
    save();
    audit("biometric-added", "Platform authenticator registered");
    emit("biometric-added", {});
    return { ok: true, message: "डिवाइस बायोमेट्रिक जोड़ दिया गया।" };
  }
  async function verifyBiometric() {
    requireReady();
    if (!state.configured) throw new Error("पहले PIN सुरक्षा सेट करें।");
    checkLock();
    if (!state.biometric || !state.biometric.credentialId) {
      throw new Error("पहले PIN से अनलॉक करके बायोमेट्रिक जोड़ें।");
    }
    if (!biometricAvailable()) throw new Error("इस ब्राउज़र में WebAuthn उपलब्ध नहीं है।");
    if (busy) throw new Error("सत्यापन चल रहा है।");
    busy = true;
    try {
      const credential = await root.navigator.credentials.get({ publicKey: {
        challenge: random(32),
        rpId: root.location.hostname,
        allowCredentials: [{
          type: "public-key",
          id: fromB64(state.biometric.credentialId)
        }],
        userVerification: "required",
        timeout: 60000
      }});
      if (!credential || !equal(toB64(credential.rawId), state.biometric.credentialId)) {
        const r = failedAttempt("बायोमेट्रिक credential mismatch");
        throw new Error(r.locked ? "तीन विफल प्रयास। " + r.lockSeconds + " सेकंड लॉक।" : "बायोमेट्रिक मेल नहीं खाया।");
      }
      const authData = new Uint8Array(credential.response.authenticatorData);
      if (authData.length < 33 || (authData[32] & 0x04) === 0) {
        const r = failedAttempt("Authenticator did not assert user verification");
        throw new Error(r.locked ? "सुरक्षा लॉक सक्रिय।" : "डिवाइस ने user verification की पुष्टि नहीं की।");
      }
      // This confirms a local OS authenticator ceremony only.
      // The assertion signature is NOT server-verified in this local-only version.
      startSession("platform-biometric");
      return { ok: true, assurance: "local-device-authenticator" };
    } catch (e) {
      // User cancellation/timeout is not counted as a wrong biometric; otherwise
      // an attacker could lock out the owner merely by cancelling the prompt.
      if (e && (e.name === "NotAllowedError" || e.name === "AbortError")) {
        throw new Error("बायोमेट्रिक रद्द हुआ या समय समाप्त हुआ। PIN से भी खोल सकते हो।");
      }
      throw e;
    } finally { busy = false; }
  }
  function removeBiometric() {
    requireRecentAuth(60000);
    state.biometric = null;
    save();
    audit("biometric-removed", "Platform authenticator removed");
    emit("biometric-removed", {});
    return true;
  }
  function setIdleTimeout(ms) {
    requireRecentAuth(60000);
    const value = Number(ms);
    if (!Number.isFinite(value) || value < 30000 || value > 3600000) {
      throw new Error("ऑटो-लॉक समय 30 सेकंड से 60 मिनट के बीच होना चाहिए।");
    }
    state.idleTimeoutMs = value;
    save();
    planIdleLock();
    audit("idle-timeout-updated", String(value));
    return value;
  }
  function getStatus() {
    return {
      ready,
      configured: !!(state && state.configured),
      unlocked: session.unlocked,
      biometricAdded: !!(state && state.biometric),
      lockRemainingSeconds: state ? Math.ceil(remainingLock() / 1000) : 0,
      failedAttempts: state ? state.failed : 0,
      nextLockSeconds: state ? LOCK_SECONDS[Math.min(state.lockLevel, LOCK_SECONDS.length - 1)] : LOCK_SECONDS[0],
      idleTimeoutMs: state ? state.idleTimeoutMs : IDLE_DEFAULT
    };
  }
  function getAuditLog() {
    const rows = parse(root.localStorage.getItem(AUDIT), []);
    return Array.isArray(rows) ? rows.slice() : [];
  }
  function on(name, callback) {
    if (typeof callback !== "function") throw new TypeError("Callback जरूरी है।");
    if (!listeners[name]) listeners[name] = [];
    listeners[name].push(callback);
    return () => { listeners[name] = (listeners[name] || []).filter(fn => fn !== callback); };
  }
  function init(options) {
    if (ready) return getStatus();
    settings = Object.assign(settings, options || {});
    try {
      state = load();
      ready = true;
      session.unlocked = false;
      if (state.lockUntil > time()) audit("lockout-restored", "Lockout remains after page reload");
      root.addEventListener("pointerdown", touch, { passive: true });
      root.addEventListener("keydown", touch);
      root.addEventListener("touchstart", touch, { passive: true });
      if (root.document) {
        root.document.addEventListener("visibilitychange", () => {
          if (settings.lockWhenHidden && root.document.hidden) stopSession("page-hidden");
        });
      }
      return getStatus();
    } catch (e) {
      state = null;
      ready = false;
      audit("security-init-failed", e.message);
      return { ready: false, locked: true, error: e.message };
    }
  }
  function lock(reason) { stopSession(reason || "manual"); return true; }
  function isUnlocked() { return !!session.unlocked; }

  root.NexusSecurity = Object.freeze({
    version: "1.1.0",
    init,
    setupPin,
    verifyPin,
    changePin,
    addBiometric,
    verifyBiometric,
    removeBiometric,
    setIdleTimeout,
    lock,
    touch,
    isUnlocked,
    requireRecentAuth,
    getStatus,
    getAuditLog,
    on,
    isBiometricAvailable: biometricAvailable
  });
})(typeof window !== "undefined" ? window : null);