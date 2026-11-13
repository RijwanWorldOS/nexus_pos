/* NEXUS POS DATA ENGINE - SAFE COMPATIBILITY BRIDGE */
(function (window) {
  "use strict";

  if (window.NexusData) return;

  const KEYS = Object.freeze({
    inventory: "nexus_inventory_test_v1",
    purchases: "nexus_purchase_test_v1",
    udhaar: "nexus_udhaar_test_v1",
    bills: "rizwan_pos_bills",
    ledger: "nexus_ledger_manual_v1",
    business: "rizwan_global_business_dna"
  });

  function shopId() {
    try {
      const b = JSON.parse(localStorage.getItem(KEYS.business) || "{}");
      return String(b.cryptoNodeId || "").trim() || "unregistered-shop";
    } catch (e) {
      console.error("NexusData business read:", e);
      return "unregistered-shop";
    }
  }

  function shopKey(key) {
    return key + "_" + encodeURIComponent(shopId());
  }

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      console.error("NexusData read error:", key, e);
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return { ok: true };
    } catch (e) {
      console.error("NexusData write error:", key, e);
      return { ok: false, error: e };
    }
  }

  function readArray(key) {
    const value = read(key, []);
    return Array.isArray(value) ? value : [];
  }

  function getProductDNA() {
    try {
      if (typeof window.loadProductDNA === "function") {
        const data = window.loadProductDNA();
        return data && typeof data === "object" && !Array.isArray(data)
          ? data : {};
      }
    } catch (e) {
      console.error("NexusData Product DNA error:", e);
    }
    return {};
  }

  function getProducts() {
    const dna = getProductDNA();

    return Object.keys(dna).map(function (key) {
      const p = dna[key];
      if (!p || typeof p !== "object" || !String(p.name || "").trim()) {
        return null;
      }

      return Object.assign({}, p, {
        id: String(p.id || key),
        barcode: String(p.barcode || key),
        source: "product-dna"
      });
    }).filter(Boolean);
  }

  function getScopedArray(key) {
    const value = read(shopKey(key), null);
    return Array.isArray(value) ? value : [];
  }

  window.NexusData = Object.freeze({
    version: "1.0.0",
    getActiveShopId: shopId,
    getProductDNA: getProductDNA,
    getProducts: getProducts,

    getInventory: function () {
      return readArray(KEYS.inventory);
    },

    getPurchases: function () {
      return readArray(KEYS.purchases);
    },

    getUdhaar: function () {
      return getScopedArray(KEYS.udhaar);
    },

    getBills: function () {
      return getScopedArray(KEYS.bills);
    },

    getManualLedger: function () {
      return readArray(KEYS.ledger);
    },

    read: read,
    write: write,

    getSnapshot: function () {
      return {
        shopId: shopId(),
        products: getProducts(),
        inventory: readArray(KEYS.inventory),
        purchases: readArray(KEYS.purchases),
        udhaar: getScopedArray(KEYS.udhaar),
        bills: getScopedArray(KEYS.bills),
        manualLedger: readArray(KEYS.ledger)
      };
    }
  });

  console.info("NexusData Engine ready:", shopId());
})(window);