/* =========================================================
   NEXUS POS — CENTRAL VOICE & COMMAND ENGINE
   File: nexus-voice-engine.js
   Core: Part 1 of 5
   Offline-first command foundation
   ========================================================= */

(function (window, document) {
  "use strict";

  if (window.NexusVoice && window.NexusVoice.__loaded) {
    console.warn("NexusVoice already loaded.");
    return;
  }

  const VERSION = "1.0.0";

  const CONFIG = {
    appName: "NEXUS POS",
    defaultLanguage: "hi-IN",
    fallbackLanguage: "en-IN",
    recognitionContinuous: false,
    interimResults: false,
    maxAlternatives: 3,
    speakRate: 0.96,
    speakPitch: 1,
    speakVolume: 1,
    commandTimeout: 12000,
    confirmationTimeout: 20000,
    debug: false
  };

  const STATE = {
    initialized: false,
    listening: false,
    speaking: false,
    processing: false,
    recognition: null,
    currentPage: "",
    language: CONFIG.defaultLanguage,
    lastCommand: "",
    lastResult: null,
    pendingAction: null,
    commandHistory: [],
    adapters: Object.create(null),
    customCommands: [],
    listeners: Object.create(null),
    speechQueue: [],
    destroyed: false
  };

  const PAGE_ALIASES = {
    home: ["home", "dashboard", "मुख्य पेज", "होम", "डैशबोर्ड"],
    pos: ["pos", "billing", "bill", "calculator", "बिलिंग", "बिल", "कैलकुलेटर"],
    business: ["business setup", "business", "setup", "बिजनेस सेटअप", "दुकान सेटअप"],
    inventory: ["inventory", "stock", "स्टॉक", "इन्वेंटरी", "माल"],
    purchase: ["purchase", "खरीद", "माल खरीद", "परचेज"],
    udhaar: ["udhaar", "credit", "उधार", "बाकी", "बकाया"],
    ledger: ["ledger", "account", "हिसाब", "लेजर", "खाता"],
    payment: ["payment", "pay", "भुगतान", "पेमेंट"],
    chat: ["chat", "message", "चैट", "मैसेज"],
    feed: ["feed", "market", "business feed", "फीड", "बाजार"],
    map: ["map", "radar", "location", "मैप", "लोकेशन", "रडार"]
  };

  const PAGE_FILES = {
    home: "index.html",
    pos: "calculator_lock.html",
    business: "business-setup.html",
    inventory: "inventory.html",
    purchase: "purchase.html",
    udhaar: "udhaar.html",
    ledger: "ledger.html",
    payment: "pay.html",
    chat: "chat.html",
    feed: "feed_biz.html",
    map: "map_radar.html"
  };

  const TEXT = {
    "hi-IN": {
      ready: "Nexus Voice तैयार है। बताइए क्या करना है?",
      listening: "जी, बोलिए। मैं सुन रहा हूँ।",
      stopped: "वॉइस सुनना बंद कर दिया गया है।",
      unsupported: "इस ब्राउज़र में आवाज पहचानने की सुविधा उपलब्ध नहीं है। आप कमांड लिखकर दे सकते हैं।",
      empty: "मुझे कोई कमांड सुनाई नहीं दी। कृपया दोबारा बोलिए।",
      unknown: "मैं इस कमांड को अभी समझ नहीं पाया। आप दूसरे तरीके से बोल सकते हैं।",
      confirm: "क्या मैं यह काम कर दूँ? हाँ या नहीं बोलिए।",
      cancelled: "ठीक है, काम रद्द कर दिया गया।",
      noPage: "यह पेज अभी इस कमांड के लिए तैयार नहीं है।",
      error: "कमांड चलाते समय समस्या आई। कोई डेटा बदलने से पहले कृपया जाँच लें।",
      navigating: "पेज खोला जा रहा है।",
      help: "आप बोल सकते हैं: स्टॉक दिखाओ, बिलिंग खोलो, खरीद खोलो, उधार बताओ या आज का हिसाब बताओ।"
    },
    "en-IN": {
      ready: "Nexus Voice is ready. Tell me what you want to do.",
      listening: "I'm listening. Please speak.",
      stopped: "Voice listening stopped.",
      unsupported: "Speech recognition is not supported in this browser. You can type your command.",
      empty: "I could not hear a command. Please try again.",
      unknown: "I could not understand that command.",
      confirm: "Should I perform this action? Please say yes or no.",
      cancelled: "Okay. The action has been cancelled.",
      noPage: "This page is not ready for that command yet.",
      error: "There was a problem processing the command.",
      navigating: "Opening the page.",
      help: "You can say: show stock, open billing, open purchase, show credit, or today's accounts."
    }
  };

  function log() {
    if (!CONFIG.debug || !window.console) return;
    console.log.apply(console, ["[NexusVoice]"].concat(
      Array.prototype.slice.call(arguments)
    ));
  }

  function emit(eventName, detail) {
    const callbacks = STATE.listeners[eventName] || [];
    callbacks.forEach(function (callback) {
      try {
        callback(detail);
      } catch (error) {
        console.error("[NexusVoice event]", error);
      }
    });

    try {
      window.dispatchEvent(new CustomEvent("nexusvoice:" + eventName, {
        detail: detail || {}
      }));
    } catch (_) {}
  }

  function on(eventName, callback) {
    if (typeof callback !== "function") return function () {};

    if (!STATE.listeners[eventName]) {
      STATE.listeners[eventName] = [];
    }

    STATE.listeners[eventName].push(callback);

    return function unsubscribe() {
      STATE.listeners[eventName] =
        (STATE.listeners[eventName] || []).filter(function (item) {
          return item !== callback;
        });
    };
  }

  function getText(key) {
    const language = STATE.language;
    const dictionary = TEXT[language] || TEXT["hi-IN"];
    return dictionary[key] || TEXT["hi-IN"][key] || key;
  }

  function normalizeText(value) {
    return String(value == null ? "" : value)
      .normalize("NFC")
      .toLowerCase()
      .replace(/[०-९]/g, function (digit) {
        return String("०१२३४५६७८९".indexOf(digit));
      })
      .replace(/[₹]/g, " रुपये ")
      .replace(/[,\u0964।!?;:()[\]{}"'`]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function cleanText(value) {
    return String(value == null ? "" : value)
      .replace(/[<>]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 500);
  }

  function detectLanguage(value) {
    const text = String(value || "");

    if (/[\u0900-\u097F]/.test(text)) {
      return "hi-IN";
    }

    return "en-IN";
  }

  function setLanguage(language) {
    const supported = ["hi-IN", "en-IN"];

    if (!supported.includes(language)) {
      return {
        ok: false,
        message: "Unsupported language"
      };
    }

    STATE.language = language;

    if (STATE.recognition) {
      STATE.recognition.lang = language;
    }

    emit("languagechange", { language: language });

    return {
      ok: true,
      language: language
    };
  }

  function parseNumberWords(input) {
    const words = normalizeText(input);

    const numberMap = {
      "zero": 0, "शून्य": 0,
      "one": 1, "एक": 1,
      "two": 2, "दो": 2,
      "three": 3, "तीन": 3,
      "four": 4, "चार": 4,
      "five": 5, "पांच": 5, "पाँच": 5,
      "six": 6, "छह": 6,
      "seven": 7, "सात": 7,
      "eight": 8, "आठ": 8,
      "nine": 9, "नौ": 9,
      "ten": 10, "दस": 10,
      "eleven": 11, "ग्यारह": 11,
      "twelve": 12, "बारह": 12,
      "thirteen": 13, "तेरह": 13,
      "fourteen": 14, "चौदह": 14,
      "fifteen": 15, "पंद्रह": 15,
      "sixteen": 16, "सोलह": 16,
      "seventeen": 17, "सत्रह": 17,
      "eighteen": 18, "अठारह": 18,
      "nineteen": 19, "उन्नीस": 19,
      "twenty": 20, "बीस": 20,
      "thirty": 30, "तीस": 30,
      "forty": 40, "चालीस": 40,
      "fifty": 50, "पचास": 50,
      "sixty": 60, "साठ": 60,
      "seventy": 70, "सत्तर": 70,
      "eighty": 80, "अस्सी": 80,
      "ninety": 90, "नब्बे": 90,
      "hundred": 100, "सौ": 100,
      "thousand": 1000, "हजार": 1000,
      "हज़ार": 1000,
      "lakh": 100000, "लाख": 100000
    };

    const numeric = words.match(/\d+(?:\.\d+)?/);
    if (numeric) return Number(numeric[0]);

    const tokens = words.split(" ");
    let total = 0;
    let current = 0;

    tokens.forEach(function (token) {
      if (!Object.prototype.hasOwnProperty.call(numberMap, token)) return;

      const value = numberMap[token];

      if (value === 100 || value === 1000 || value === 100000) {
        current = Math.max(1, current) * value;
        total += current;
        current = 0;
      } else {
        current += value;
      }
    });

    return total + current;
  }

  function money(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount)) return "₹0.00";

    return "₹" + amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function safeNumber(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? number :
      (fallback == null ? 0 : fallback);
  }

  function getCurrentPage() {
    const path = String(window.location.pathname || "")
      .split("/")
      .pop()
      .toLowerCase();

    const match = Object.keys(PAGE_FILES).find(function (key) {
      return PAGE_FILES[key].toLowerCase() === path;
    });

    return match || "unknown";
  }

  function findPageAlias(text) {
    const normalized = normalizeText(text);

    for (const page in PAGE_ALIASES) {
      const aliases = PAGE_ALIASES[page];

      for (let i = 0; i < aliases.length; i++) {
        if (normalized.includes(normalizeText(aliases[i]))) {
          return page;
        }
      }
    }

    return null;
  }

  // PART 2 CONTINUES BELOW THIS LINE
 /* =========================================================
     PART 2 — SPEECH INPUT / OUTPUT
     ========================================================= */

  function getRecognitionConstructor() {
    return window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      null;
  }

  function stopSpeaking() {
    try {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (error) {
      log("Speech cancel error", error);
    }

    STATE.speaking = false;
    STATE.speechQueue = [];
    emit("speechstop", {});
  }

  function speak(text, options) {
    options = options || {};
    const message = cleanText(text);

    if (!message) {
      return false;
    }

    if (!window.speechSynthesis ||
        typeof window.SpeechSynthesisUtterance !== "function") {
      emit("speechunsupported", {});
      return false;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(message);

      utterance.lang = options.language || STATE.language;
      utterance.rate = safeNumber(options.rate, CONFIG.speakRate);
      utterance.pitch = safeNumber(options.pitch, CONFIG.speakPitch);
      utterance.volume = Math.max(
        0,
        Math.min(1, safeNumber(options.volume, CONFIG.speakVolume))
      );

      utterance.onstart = function () {
        STATE.speaking = true;
        emit("speechstart", { text: message });
      };

      utterance.onend = function () {
        STATE.speaking = false;
        emit("speechend", { text: message });
      };

      utterance.onerror = function (event) {
        STATE.speaking = false;
        emit("speecherror", {
          error: event && event.error ? event.error : "unknown"
        });
      };

      window.speechSynthesis.speak(utterance);
      return true;
    } catch (error) {
      STATE.speaking = false;
      emit("speecherror", { error: String(error) });
      return false;
    }
  }

  function stopListening() {
    const recognition = STATE.recognition;

    if (!recognition) {
      STATE.listening = false;
      return true;
    }

    try {
      recognition.stop();
    } catch (_) {
      try {
        recognition.abort();
      } catch (_) {}
    }

    STATE.listening = false;
    emit("listeningstop", {});
    return true;
  }

  function createRecognition(options) {
    options = options || {};

    const Recognition = getRecognitionConstructor();

    if (!Recognition) {
      return {
        ok: false,
        error: "speech_recognition_unsupported",
        message: getText("unsupported")
      };
    }

    stopListening();
    stopSpeaking();

    let recognition;

    try {
      recognition = new Recognition();
    } catch (error) {
      return {
        ok: false,
        error: "recognition_creation_failed",
        detail: String(error)
      };
    }

    recognition.lang = options.language || STATE.language;
    recognition.continuous = options.continuous !== false;
    recognition.interimResults = options.interimResults === true;
    recognition.maxAlternatives = Math.max(
      1,
      Math.min(5, safeNumber(options.maxAlternatives, CONFIG.maxAlternatives))
    );

    STATE.recognition = recognition;

    recognition.onstart = function () {
      STATE.listening = true;
      emit("listeningstart", {
        language: recognition.lang
      });
    };

    recognition.onresult = function (event) {
      let transcript = "";
      let confidence = 0;

      if (!event || !event.results) return;

      for (let i = event.resultIndex || 0; i < event.results.length; i++) {
        const result = event.results[i];

        if (result && result.isFinal && result[0]) {
          transcript += " " + result[0].transcript;
          confidence = Math.max(
            confidence,
            safeNumber(result[0].confidence, 0)
          );
        }
      }

      transcript = cleanText(transcript);

      if (!transcript) return;

      emit("transcript", {
        text: transcript,
        confidence: confidence,
        language: recognition.lang
      });

      if (typeof options.onResult === "function") {
        try {
          options.onResult(transcript, confidence);
        } catch (error) {
          emit("error", { error: String(error) });
        }
      } else if (options.execute !== false) {
        handleText(transcript, {
          source: "voice",
          confidence: confidence
        });
      }
    };

    recognition.onerror = function (event) {
      STATE.listening = false;

      const errorName = event && event.error ?
        event.error : "unknown";

      emit("listeningerror", {
        error: errorName
      });

      if (typeof options.onError === "function") {
        options.onError(errorName);
      }
    };

    recognition.onend = function () {
      STATE.listening = false;

      emit("listeningend", {});

      if (STATE.recognition === recognition) {
        STATE.recognition = null;
      }
    };

    return {
      ok: true,
      recognition: recognition
    };
  }

  function startListening(options) {
    options = options || {};

    const created = createRecognition(options);

    if (!created.ok) {
      emit("listeningunsupported", created);
      return created;
    }

    try {
      created.recognition.start();

      return {
        ok: true,
        message: getText("listening")
      };
    } catch (error) {
      STATE.listening = false;
      STATE.recognition = null;

      return {
        ok: false,
        error: "recognition_start_failed",
        detail: String(error)
      };
    }
  }

  function toggleListening(options) {
    if (STATE.listening) {
      stopListening();
      return {
        ok: true,
        listening: false
      };
    }

    return startListening(options);
  }

  /* =========================================================
     TEXT COMMAND INPUT
     ========================================================= */

  function handleText(text, options) {
    options = options || {};

    const original = cleanText(text);

    if (!original) {
      return {
        ok: false,
        message: getText("empty")
      };
    }

    STATE.lastCommand = original;
    STATE.processing = true;

    const entry = {
      text: original,
      normalized: normalizeText(original),
      source: options.source || "text",
      time: new Date().toISOString()
    };

    STATE.commandHistory.unshift(entry);

    if (STATE.commandHistory.length > 50) {
      STATE.commandHistory.length = 50;
    }

    emit("commandreceived", entry);

    try {
      const result = routeCommand(entry.normalized, original, options);

      STATE.lastResult = result;
      emit("commandresult", result);
   STATE.lastResult = result;
      emit("commandresult", result);

      const replyText = result && (
        result.message ||
        (result.result && result.result.message)
      );

      if (replyText) {
        speak(replyText, {
          language: options.language || STATE.language
        });
      }

      return result;    

      return result;
    } catch (error) {
      const failure = {
        ok: false,
        error: String(error),
        message: getText("error")
      };

      STATE.lastResult = failure;
      emit("commanderror", failure);

      return failure;
    } finally {
      STATE.processing = false;
    }
  }

  /* =========================================================
     COMMAND ALIASES AND INTENT HELPERS
     ========================================================= */

  function hasAny(text, words) {
    return words.some(function (word) {
      return text.includes(normalizeText(word));
    });
  }

  function extractAfter(text, markers) {
    const normalized = normalizeText(text);

    for (let i = 0; i < markers.length; i++) {
      const marker = normalizeText(markers[i]);
      const position = normalized.indexOf(marker);

      if (position >= 0) {
        return normalized.slice(position + marker.length).trim();
      }
    }

    return "";
  }

  function isYes(text) {
    return hasAny(text, [
      "हाँ", "हां", "जी हाँ", "कर दो", "करिए",
      "yes", "yeah", "confirm", "okay", "ok", "do it"
    ]);
  }

  function isNo(text) {
    return hasAny(text, [
      "नहीं", "ना", "मत करो", "रद्द", "कैंसिल",
      "no", "cancel", "don't", "stop"
    ]);
  }

  function getCurrentAdapter() {
    return STATE.adapters[STATE.currentPage] || null;
  }

  function registerPage(adapter) {
    if (!adapter || typeof adapter !== "object") {
      return {
        ok: false,
        error: "invalid_adapter"
      };
    }

    const page = cleanText(adapter.page || "");

    if (!page || page.length > 40) {
      return {
        ok: false,
        error: "invalid_page_name"
      };
    }

    STATE.adapters[page] = Object.assign({}, adapter);

    emit("adapterregistered", {
      page: page
    });

    return {
      ok: true,
      page: page
    };
  }

  function unregisterPage(page) {
    if (!page || !STATE.adapters[page]) return false;

    delete STATE.adapters[page];
    return true;
  }

  // PART 3 CONTINUES BELOW THIS LINE
  /* =========================================================
     PART 3 — COMMAND ROUTER / NAVIGATION / CONFIRMATION
     ========================================================= */

  function navigateTo(page) {
    const target = PAGE_FILES[page];

    if (!target) {
      return {
        ok: false,
        message: getText("noPage")
      };
    }

    if (page === STATE.currentPage) {
      return {
        ok: true,
        message: "यह पेज पहले से खुला हुआ है।"
      };
    }

    emit("navigation", {
      page: page,
      file: target
    });

    window.location.href = target;

    return {
      ok: true,
      message: getText("navigating"),
      page: page
    };
  }

  function askConfirmation(action, description) {
    if (typeof action !== "function") {
      return {
        ok: false,
        error: "invalid_action"
      };
    }

    if (STATE.pendingAction) {
      return {
        ok: false,
        error: "another_confirmation_pending",
        message: "पहले पिछले काम की पुष्टि करें या उसे रद्द करें।"
      };
    }

    const token = String(Date.now()) + "-" +
      Math.random().toString(36).slice(2, 8);

    STATE.pendingAction = {
      token: token,
      description: cleanText(description || "यह काम"),
      action: action,
      createdAt: Date.now()
    };

    const message = cleanText(description || "यह काम") +
      " करने के लिए हाँ बोलिए। रद्द करने के लिए नहीं बोलिए।";

    emit("confirmationrequired", {
      token: token,
      description: STATE.pendingAction.description,
      message: message
    });

    speak(message);

    return {
      ok: true,
      pending: true,
      token: token,
      message: message
    };
  }

  function clearPendingAction() {
    STATE.pendingAction = null;
    emit("confirmationcancelled", {});
  }

  function resolveConfirmation(answer) {
    const pending = STATE.pendingAction;

    if (!pending) {
      return {
        ok: false,
        message: "अभी कोई काम पुष्टि के लिए लंबित नहीं है।"
      };
    }

    const normalized = normalizeText(answer);

    if (isNo(normalized)) {
      clearPendingAction();

      const result = {
        ok: true,
        cancelled: true,
        message: getText("cancelled")
      };

      speak(result.message);
      return result;
    }

    if (!isYes(normalized)) {
      return {
        ok: false,
        pending: true,
        message: "कृपया साफ बोलिए: हाँ या नहीं।"
      };
    }

    STATE.pendingAction = null;

    try {
      const result = pending.action();

      const output = {
        ok: true,
        confirmed: true,
        result: result,
        message: "काम पूरा करने का अनुरोध भेज दिया गया है।"
      };

      emit("actionconfirmed", {
        description: pending.description,
        result: result
      });

      return output;
    } catch (error) {
      const failure = {
        ok: false,
        error: String(error),
        message: getText("error")
      };

      emit("actionerror", failure);
      return failure;
    }
  }

  function registerCommand(command) {
    if (!command || typeof command !== "object") {
      return {
        ok: false,
        error: "invalid_command"
      };
    }

    if (typeof command.match !== "function" ||
        typeof command.run !== "function") {
      return {
        ok: false,
        error: "match_and_run_required"
      };
    }

    STATE.customCommands.push({
      name: cleanText(command.name || "custom"),
      priority: safeNumber(command.priority, 0),
      match: command.match,
      run: command.run
    });

    STATE.customCommands.sort(function (a, b) {
      return b.priority - a.priority;
    });

    return {
      ok: true
    };
  }

  function searchCurrentPage(query) {
    const value = cleanText(query);

    if (!value) {
      return {
        ok: false,
        message: "क्या खोजना है, उसका नाम बताइए।"
      };
    }

    const adapter = getCurrentAdapter();

    if (adapter && typeof adapter.search === "function") {
      return adapter.search(value);
    }

    const searchFields = [
      "searchInput",
      "searchText",
      "gallerySearch",
      "mapSearchInput",
      "search-input-box"
    ];

    let input = null;

    for (let i = 0; i < searchFields.length; i++) {
      input = document.getElementById(searchFields[i]);
      if (input) break;
    }

    if (!input) {
      return {
        ok: false,
        message: "इस पेज पर खोजने का इनपुट नहीं मिला।"
      };
    }

    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));

    return {
      ok: true,
      message: "खोज का शब्द भर दिया गया है।",
      query: value
    };
  }

  function showHelp() {
    const adapter = getCurrentAdapter();

    if (adapter && typeof adapter.help === "function") {
      return adapter.help();
    }

    return {
      ok: true,
      message: getText("help")
    };
  }

  function routeCommand(normalized, original, options) {
    if (STATE.pendingAction) {
      return resolveConfirmation(normalized);
    }

    if (hasAny(normalized, [
      "मदद", "help", "क्या कर सकते हो", "कमांड बताओ",
      "सहायता", "commands"
    ])) {
      return showHelp();
    }

    if (hasAny(normalized, [
      "चुप हो जाओ", "बोलना बंद", "stop speaking",
      "आवाज बंद", "आवाज़ बंद"
    ])) {
      stopSpeaking();

      return {
        ok: true,
        message: "ठीक है, बोलना बंद कर दिया।"
      };
    }

    if (hasAny(normalized, [
      "सुनना बंद", "माइक बंद", "stop listening",
      "माइक्रोफोन बंद"
    ])) {
      stopListening();

      return {
        ok: true,
        message: getText("stopped")
      };
    }

    if (hasAny(normalized, [
      "होम खोलो", "मुख्य पेज खोलो", "dashboard खोलो",
      "home खोलो", "घर जाओ"
    ])) {
      return navigateTo("home");
    }

    const targetPage = findPageAlias(normalized);

    if (targetPage && hasAny(normalized, [
      "खोलो", "खोलना", "जाओ", "दिखाओ", "open",
      "go to", "show page", "पर जाओ"
    ])) {
      return navigateTo(targetPage);
    }

    if (hasAny(normalized, [
      "खोजो", "ढूंढो", "ढूँढो", "सर्च करो",
      "search", "find"
    ])) {
      const query = extractAfter(normalized, [
        "खोजो", "ढूंढो", "ढूँढो", "सर्च करो",
        "search", "find"
      ]);

      return searchCurrentPage(query);
    }

    for (let i = 0; i < STATE.customCommands.length; i++) {
      const command = STATE.customCommands[i];

      let matched = false;

      try {
        matched = command.match(normalized, original) === true;
      } catch (error) {
        log("Custom command match error", command.name, error);
      }

      if (matched) {
        return command.run({
          text: original,
          normalized: normalized,
          options: options
        });
      }
    }

    const adapter = getCurrentAdapter();

    if (adapter && typeof adapter.handleCommand === "function") {
      const result = adapter.handleCommand({
        text: original,
        normalized: normalized,
        options: options
      });

      if (result !== undefined && result !== null) {
        return result;
      }
    }

    return {
      ok: false,
      message: getText("unknown"),
      command: original
    };
  }

  // PART 4 CONTINUES BELOW THIS LINE
  /* =========================================================
     PART 4 — PAGE ADAPTERS / SAFE FORM OPERATIONS
     ========================================================= */

  function getElement(id) {
    if (!id || typeof id !== "string") return null;
    return document.getElementById(id);
  }

  function readField(id) {
    const element = getElement(id);

    if (!element) return null;

    if (element.type === "checkbox") {
      return element.checked;
    }

    return element.value == null ? "" : element.value;
  }

  function writeField(id, value) {
    const element = getElement(id);

    if (!element || element.disabled || element.readOnly) {
      return false;
    }

    if (element.type === "checkbox") {
      element.checked = Boolean(value);
    } else {
      element.value = String(value == null ? "" : value);
    }

    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));

    return true;
  }

  function readForm(ids) {
    const output = {};

    if (!Array.isArray(ids)) return output;

    ids.forEach(function (id) {
      output[id] = readField(id);
    });

    return output;
  }

  function fillForm(values) {
    if (!values || typeof values !== "object") {
      return {
        ok: false,
        error: "invalid_form_data"
      };
    }

    const results = [];

    Object.keys(values).forEach(function (id) {
      results.push({
        id: id,
        filled: writeField(id, values[id])
      });
    });

    return {
      ok: true,
      fields: results,
      filled: results.filter(function (item) {
        return item.filled;
      }).length
    };
  }

  function clickElement(id) {
    const element = getElement(id);

    if (!element || element.disabled) {
      return false;
    }

    element.click();
    return true;
  }

  function getAdapterAction(actionName) {
    const adapter = getCurrentAdapter();

    if (!adapter || !adapter.actions) return null;

    const action = adapter.actions[actionName];

    return typeof action === "function" ? action : null;
  }

  function runAdapterAction(actionName, payload, options) {
    options = options || {};

    const action = getAdapterAction(actionName);

    if (!action) {
      return {
        ok: false,
        error: "action_not_registered",
        action: actionName,
        message: "यह काम इस पेज पर अभी कनेक्ट नहीं है।"
      };
    }

    const execute = function () {
      return action(payload || {});
    };

    if (options.confirm === true) {
      return askConfirmation(execute, options.description || actionName);
    }

    try {
      return {
        ok: true,
        result: execute()
      };
    } catch (error) {
      emit("actionerror", {
        action: actionName,
        error: String(error)
      });

      return {
        ok: false,
        error: String(error),
        message: getText("error")
      };
    }
  }

  function requireFields(values, required) {
    const missing = [];

    (required || []).forEach(function (field) {
      const value = values ? values[field] : null;

      if (value === null || value === undefined ||
          String(value).trim() === "") {
        missing.push(field);
      }
    });

    return {
      ok: missing.length === 0,
      missing: missing
    };
  }

  function parseQuantityAndPrice(text) {
    const source = normalizeText(text);

    const priceMatch = source.match(
      /(?:₹|रुपये|रुपया|कीमत|दाम|रेट|rate|price)\s*(\d+(?:\.\d+)?)/i
    );

    const quantityMatch = source.match(
      /(\d+(?:\.\d+)?)\s*(?:किलो|kg|किग्रा|ग्राम|gm|लीटर|लीटर|ltr|पीस|piece|pcs|नग|डब्बे|पैकेट|packet)\b/i
    );

    return {
      quantity: quantityMatch ? Number(quantityMatch[1]) : null,
      price: priceMatch ? Number(priceMatch[1]) : null
    };
  }

  function parseProductDraft(text) {
    const source = cleanText(text);
    const normalized = normalizeText(source);

    const details = parseQuantityAndPrice(normalized);

    let name = normalized
      .replace(/नया सामान|नया प्रोडक्ट|प्रोडक्ट जोड़ो|सामान जोड़ो|add product|new product/gi, "")
      .replace(/कीमत|दाम|रेट|rate|price|रुपये|रुपया/gi, "")
      .replace(/\d+(?:\.\d+)?/g, "")
      .replace(/\s+/g, " ")
      .trim();

    return {
      name: name,
      quantity: details.quantity,
      price: details.price
    };
  }

  function getPageStatus() {
    const adapter = getCurrentAdapter();

    if (!adapter) {
      return {
        page: STATE.currentPage,
        connected: false,
        message: "इस पेज का Voice Adapter अभी कनेक्ट नहीं है।"
      };
    }

    return {
      page: STATE.currentPage,
      connected: true,
      capabilities: Array.isArray(adapter.capabilities) ?
        adapter.capabilities.slice() : []
    };
  }

  function getCommandHistory(limit) {
    const count = Math.max(1, Math.min(
      50,
      safeNumber(limit, 10)
    ));

    return STATE.commandHistory.slice(0, count).map(function (item) {
      return Object.assign({}, item);
    });
  }

  function clearCommandHistory() {
    STATE.commandHistory = [];
    return true;
  }

  function registerPageCommands(page, commands) {
    if (!STATE.adapters[page]) {
      return {
        ok: false,
        error: "page_adapter_missing"
      };
    }

    if (!commands || typeof commands !== "object") {
      return {
        ok: false,
        error: "invalid_commands"
      };
    }

    const adapter = STATE.adapters[page];

    adapter.commands = Object.assign(
      {},
      adapter.commands || {},
      commands
    );

    return {
      ok: true,
      page: page,
      commands: Object.keys(adapter.commands)
    };
  }

  function runPageCommand(commandName, payload, confirm) {
    const adapter = getCurrentAdapter();

    if (!adapter || !adapter.commands) {
      return {
        ok: false,
        error: "page_commands_missing"
      };
    }

    const command = adapter.commands[commandName];

    if (typeof command !== "function") {
      return {
        ok: false,
        error: "command_not_found"
      };
    }

    return runAdapterAction(
      commandName,
      payload,
      {
        confirm: confirm === true,
        description: commandName
      }
    );
  }

  function getProductNameCandidates() {
    const adapter = getCurrentAdapter();

    if (!adapter || typeof adapter.getProducts !== "function") {
      return [];
    }

    try {
      const products = adapter.getProducts();

      return Array.isArray(products) ? products : [];
    } catch (error) {
      log("Product list error", error);
      return [];
    }
  }

  function findProductByName(query) {
    const search = normalizeText(query);

    if (!search) return [];

    return getProductNameCandidates().filter(function (product) {
      if (!product || typeof product !== "object") return false;

      const name = normalizeText(
        product.name || product.productName || product.title || ""
      );

      return name.includes(search) || search.includes(name);
    });
  }

  function getBusinessContext() {
    try {
      if (window.BusinessDNA &&
          typeof window.BusinessDNA.getActiveShop === "function") {
        return window.BusinessDNA.getActiveShop();
      }
    } catch (error) {
      log("Business DNA context error", error);
    }

    try {
      const raw = localStorage.getItem("rizwan_global_business_dna");
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  // PART 5 CONTINUES BELOW THIS LINE
  /* =========================================================
     PART 5 — PUBLIC API / UI / INITIALIZATION
     ========================================================= */

  function createVoicePanel() {
    if (document.getElementById("nexusVoicePanel")) return;

    const panel = document.createElement("div");

    panel.id = "nexusVoicePanel";

    panel.style.cssText = [
      "position:fixed",
      "right:12px",
      "bottom:12px",
      "z-index:2147483000",
      "width:min(340px,calc(100vw - 24px))",
      "background:#071120",
      "color:#fff",
      "border:1px solid #00d9ff",
      "border-radius:14px",
      "padding:10px",
      "box-shadow:0 5px 25px rgba(0,0,0,.45)",
      "font-family:Arial,sans-serif",
      "display:none"
    ].join(";");

    panel.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
        <strong style="color:#00e5ff;font-size:14px">NEXUS VOICE</strong>
        <button type="button" id="nexusVoiceClose"
          style="background:#263449;color:white;border:0;border-radius:6px;padding:5px 10px">
          बंद
        </button>
      </div>

      <div id="nexusVoiceStatus"
        style="font-size:12px;color:#b8d5e5;margin-bottom:8px">
        Voice तैयार है।
      </div>

      <div style="display:flex;gap:6px">
        <input id="nexusVoiceInput" type="text"
          autocomplete="off"
          placeholder="कमांड लिखें..."
          style="flex:1;min-width:0;padding:10px;border-radius:8px;border:1px solid #526579;background:#fff;color:#111;font-size:14px">

        <button type="button" id="nexusVoiceSend"
          style="background:#087d67;color:white;border:0;border-radius:8px;padding:8px 12px">
          भेजें
        </button>
      </div>

      <div style="display:flex;gap:6px;margin-top:8px">
        <button type="button" id="nexusVoiceMic"
          style="flex:1;background:#007fbd;color:white;border:0;border-radius:8px;padding:10px">
          🎙️ बोलें
        </button>

        <button type="button" id="nexusVoiceStop"
          style="flex:1;background:#783333;color:white;border:0;border-radius:8px;padding:10px">
          आवाज बंद
        </button>
      </div>

      <div id="nexusVoiceReply"
        aria-live="polite"
        style="font-size:12px;line-height:1.5;margin-top:8px;color:#d7e8f5;white-space:pre-wrap">
      </div>
    `;

    const launcher = document.createElement("button");

    launcher.id = "nexusVoiceLauncher";
    launcher.type = "button";
    launcher.textContent = "🎙️ Voice";

    launcher.style.cssText = [
      "position:fixed",
      "right:14px",
      "bottom:14px",
      "z-index:2147482999",
      "border:1px solid #00e5ff",
      "border-radius:30px",
      "background:#062d43",
      "color:white",
      "font-weight:bold",
      "padding:12px 16px",
      "box-shadow:0 3px 15px rgba(0,0,0,.4)",
      "cursor:pointer"
    ].join(";");

    document.body.appendChild(panel);
    document.body.appendChild(launcher);

    const status = document.getElementById("nexusVoiceStatus");
    const input = document.getElementById("nexusVoiceInput");
    const reply = document.getElementById("nexusVoiceReply");

    function showResult(result) {
      const message = result && result.message ?
        result.message :
        (result && result.ok ?
          "कमांड स्वीकार कर ली गई।" :
          "कमांड पूरी नहीं हुई।");

      reply.textContent = message;

      emit("uiresult", {
        result: result
      });

      if (result && result.message) {
        status.textContent = result.message;
      }
    }

    function submitText() {
      const value = input.value.trim();

      if (!value) {
        reply.textContent = "पहले कमांड लिखिए।";
        return;
      }

      input.value = "";

      const result = handleText(value, {
        source: "panel"
      });

      showResult(result);
    }

    launcher.addEventListener("click", function () {
      panel.style.display =
        panel.style.display === "none" ? "block" : "none";
    });

    document.getElementById("nexusVoiceClose")
      .addEventListener("click", function () {
        panel.style.display = "none";
      });

    document.getElementById("nexusVoiceSend")
      .addEventListener("click", submitText);

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitText();
      }
    });

    document.getElementById("nexusVoiceMic")
      .addEventListener("click", function () {
        const result = startListening({
          execute: true,
          language: STATE.language
        });

        showResult(result);
      });

    document.getElementById("nexusVoiceStop")
      .addEventListener("click", function () {
        stopListening();
        stopSpeaking();

        status.textContent = getText("stopped");
        reply.textContent = getText("stopped");
      });

    on("listeningstart", function () {
      status.textContent = getText("listening");
    });

    on("listeningend", function () {
      if (!STATE.processing) {
        status.textContent = "सुनना पूरा हुआ।";
      }
    });

    on("transcript", function (event) {
      reply.textContent = "सुना गया: " + event.text;
    });

    on("commandresult", function (result) {
      showResult(result);
    });

    on("commanderror", function () {
      reply.textContent = getText("error");
    });
  }

  function init(options) {
    options = options || {};

    if (STATE.initialized) {
      return {
        ok: true,
        alreadyInitialized: true,
        page: STATE.currentPage
      };
    }

    if (options.language) {
      setLanguage(options.language);
    }

    if (typeof options.debug === "boolean") {
      CONFIG.debug = options.debug;
    }

    if (options.page) {
      STATE.currentPage = cleanText(options.page);
    } else {
      STATE.currentPage = getCurrentPage();
    }

    STATE.initialized = true;
    STATE.destroyed = false;

    if (options.ui !== false) {
      if (document.body) {
        createVoicePanel();
      } else {
        document.addEventListener("DOMContentLoaded", createVoicePanel, {
          once: true
        });
      }
    }

    emit("ready", {
      version: VERSION,
      page: STATE.currentPage,
      language: STATE.language,
      speechRecognitionAvailable: Boolean(getRecognitionConstructor()),
      speechSynthesisAvailable: Boolean(window.speechSynthesis)
    });

    log("Initialized", VERSION, STATE.currentPage);

    return {
      ok: true,
      version: VERSION,
      page: STATE.currentPage,
      language: STATE.language
    };
  }

  function destroy() {
    stopListening();
    stopSpeaking();

    const panel = document.getElementById("nexusVoicePanel");
    const launcher = document.getElementById("nexusVoiceLauncher");

    if (panel) panel.remove();
    if (launcher) launcher.remove();

    STATE.pendingAction = null;
    STATE.recognition = null;
    STATE.initialized = false;
    STATE.destroyed = true;

    emit("destroy", {});

    return {
      ok: true
    };
  }

  function getStatus() {
    return {
      version: VERSION,
      initialized: STATE.initialized,
      destroyed: STATE.destroyed,
      page: STATE.currentPage,
      language: STATE.language,
      listening: STATE.listening,
      speaking: STATE.speaking,
      processing: STATE.processing,
      pendingConfirmation: Boolean(STATE.pendingAction),
      adapters: Object.keys(STATE.adapters),
      speechRecognitionAvailable: Boolean(getRecognitionConstructor()),
      speechSynthesisAvailable: Boolean(window.speechSynthesis)
    };
  }

  const NexusVoice = {
    __loaded: true,
    version: VERSION,

    init: init,
    destroy: destroy,

    speak: speak,
    stopSpeaking: stopSpeaking,

    startListening: startListening,
    stopListening: stopListening,
    toggleListening: toggleListening,

    handleText: handleText,

    setLanguage: setLanguage,
    getStatus: getStatus,

    registerPage: registerPage,
    unregisterPage: unregisterPage,
    registerCommand: registerCommand,
    registerPageCommands: registerPageCommands,

    runPageCommand: runPageCommand,
    runAdapterAction: runAdapterAction,

    askConfirmation: askConfirmation,
    resolveConfirmation: resolveConfirmation,
    clearPendingAction: clearPendingAction,

    readField: readField,
    writeField: writeField,
    readForm: readForm,
    fillForm: fillForm,
    clickElement: clickElement,
    requireFields: requireFields,

    parseNumberWords: parseNumberWords,
    parseQuantityAndPrice: parseQuantityAndPrice,
    parseProductDraft: parseProductDraft,

    searchCurrentPage: searchCurrentPage,
    findProductByName: findProductByName,
    getProductNameCandidates: getProductNameCandidates,
    getBusinessContext: getBusinessContext,

    getCommandHistory: getCommandHistory,
    clearCommandHistory: clearCommandHistory,

    on: on,

    helpers: Object.freeze({
      normalizeText: normalizeText,
      cleanText: cleanText,
      safeNumber: safeNumber,
      money: money,
      hasAny: hasAny,
      extractAfter: extractAfter,
      findPageAlias: findPageAlias,
      getCurrentPage: getCurrentPage
    })
  };

  window.NexusVoice = NexusVoice;

  function autoInitialize() {
    if (!STATE.initialized) {
      init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInitialize, {
      once: true
    });
  } else {
    autoInitialize();
  }

})(window, document);
