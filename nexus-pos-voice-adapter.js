/* NEXUS POS — Calculator Voice Adapter
 * Connects NexusVoice to the real Product DNA and billItems/addItem pipeline.
 * Never invents products, prices, units, or stock.
 */
(function (window, document) {
  "use strict";

  if (window.__NEXUS_POS_VOICE_ADAPTER__) return;
  window.__NEXUS_POS_VOICE_ADAPTER__ = true;

  function say(message) {
    if (window.NexusVoice && typeof window.NexusVoice.speak === "function") {
      window.NexusVoice.speak(message, { language: language() });
    } else if (typeof window.speakAiMessage === "function") {
      window.speakAiMessage(message);
    }
  }

  function language() {
    return typeof currentAppLang !== "undefined" && currentAppLang === "en-US" ? "en-IN" : "hi-IN";
  }

  function norm(value) {
    return String(value == null ? "" : value)
      .normalize("NFC").toLowerCase()
      .replace(/[०-९]/g, d => String("०१२३४५६७८९".indexOf(d)))
      .replace(/[₹,।!?;:()[\]{}"'`]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function getDatabase() {
    try {
      if (typeof loadProductDNA === "function") {
        const db = loadProductDNA();
        return db && typeof db === "object" ? db : {};
      }
    } catch (error) {
      console.error("POS voice product read:", error);
    }
    return {};
  }

 function getProducts() {
    const db = getDatabase();

    return Object.keys(db).map(key => {
        const p = db[key];

        if (!p || typeof p !== "object") return null;

        return Object.assign({}, p, {
            barcode: String(p.barcode || key)
        });
    }).filter(p =>
        p &&
        typeof p.name === "string" &&
        p.name.trim() !== "" &&
        p.barcode &&
        Number.isFinite(Number(p.salePrice)) &&
        Number(p.salePrice) > 0
    );
} 

  const NUMBER_WORDS = {
    "आधा":0.5, "अध":0.5, "पाव":0.25, "डेढ़":1.5, "डेढ":1.5, "ढाई":2.5,
    "एक":1, "दो":2, "तीन":3, "चार":4, "पांच":5, "पाँच":5,
    "छह":6, "सात":7, "आठ":8, "नौ":9, "दस":10,
    "ग्यारह":11, "बारह":12, "तेरह":13, "चौदह":14, "पंद्रह":15,
    "सोलह":16, "सत्रह":17, "अठारह":18, "उन्नीस":19, "बीस":20,
    "तीस":30, "चालीस":40, "पचास":50, "साठ":60, "सत्तर":70,
    "अस्सी":80, "नब्बे":90, "सौ":100, "हजार":1000, "हज़ार":1000,
    "one":1, "two":2, "three":3, "four":4, "five":5,
    "six":6, "seven":7, "eight":8, "nine":9, "ten":10,
    "twenty":20, "thirty":30, "forty":40, "fifty":50,
    "sixty":60, "seventy":70, "eighty":80, "ninety":90,
    "hundred":100, "thousand":1000
  };

  const UNIT_ALIASES = [
    { re:"क्विंटल|कुन्टल|क्विंटल्स|quintals?|qtl", unit:"quintal" },
    { re:"किलोग्राम|किलो|किग्रा|kgs?|kg", unit:"kg" },
    { re:"ग्राम|ग्रा|grams?|gms?|gm|g", unit:"g" },
    { re:"लीटर|लिटर|litres?|liters?|ltr|lt|l", unit:"l" },
    { re:"मिलीलीटर|मिलिलीटर|ml", unit:"ml" },
    { re:"पीस|नग|नगों|pieces?|pcs?", unit:"piece" },
    { re:"पैकेट|पैकट|packet|packets|पैक", unit:"packet" },
    { re:"डिब्बा|डब्बा|बॉक्स|box|boxes", unit:"box" }
  ];

  function parseSpokenNumber(raw) {
    const s = norm(raw);
    if (Object.prototype.hasOwnProperty.call(NUMBER_WORDS, s)) {
      return NUMBER_WORDS[s];
    }
    if (/^\d+(?:\.\d+)?$/.test(s)) return Number(s);

    const tokens = s.split(/\s+/);
    let total = 0;
    let current = 0;

    tokens.forEach(token => {
      if (!Object.prototype.hasOwnProperty.call(NUMBER_WORDS, token)) return;
      const value = NUMBER_WORDS[token];

      if (value === 100 || value === 1000) {
        current = Math.max(1, current) * value;
        total += current;
        current = 0;
      } else {
        current += value;
      }
    });

    return total + current;
  }

  function parseQuantity(text) {
    const s = norm(text);
    const unitPattern = UNIT_ALIASES.map(x => x.re).join("|");
    const numberPattern =
      "\\d+(?:\\.\\d+)?|आधा|अध|पाव|डेढ़|डेढ|ढाई|" +
      "एक|दो|तीन|चार|पांच|पाँच|छह|सात|आठ|नौ|दस|" +
      "ग्यारह|बारह|तेरह|चौदह|पंद्रह|सोलह|सत्रह|अठारह|उन्नीस|" +
      "बीस|तीस|चालीस|पचास|साठ|सत्तर|अस्सी|नब्बे|सौ|हजार|हज़ार|" +
      "one|two|three|four|five|six|seven|eight|nine|ten|" +
      "twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand";

    const re = new RegExp(
      "(?:^|\\s)(" + numberPattern + "(?:\\s+(?:" +
      numberPattern + "))?)\\s*(" + unitPattern + ")(?:\\s|$)", "i"
    );
    const match = s.match(re);

    if (match) {
      const quantity = parseSpokenNumber(match[1]);
      const unit = UNIT_ALIASES.find(x =>
        new RegExp("^(?:" + x.re + ")$", "i").test(match[2])
      );
      if (!Number.isFinite(quantity) || quantity <= 0) {
        return { quantity:0, spokenUnit:"", found:false, cleaned:s };
      }
      return {
        quantity,
        spokenUnit:unit ? unit.unit : "",
        found:true,
        cleaned:s.replace(match[0], " ").replace(/\s+/g, " ").trim()
      };
    }

    const plain = s.match(new RegExp(
      "(?:^|\\s)(" + numberPattern + ")(?:\\s|$)", "i"
    ));

    if (plain) {
      const quantity = parseSpokenNumber(plain[1]);
      return {
        quantity,
        spokenUnit:"",
        found:Number.isFinite(quantity) && quantity > 0,
        cleaned:s.replace(plain[0], " ").replace(/\s+/g, " ").trim()
      };
    }

    return { quantity:1, spokenUnit:"", found:false, cleaned:s };
  }

  function parseQuantity(text) {
    const s = norm(text);
    const unitPattern = UNIT_ALIASES.map(x => x.re).join("|");
    const numberPattern = "\\d+(?:\\.\\d+)?|आधा|अध|पाव|डेढ़|डेढ|ढाई|एक|दो|तीन|चार|पांच|पाँच|छह|सात|आठ|नौ|दस|one|two|three|four|five|six|seven|eight|nine|ten";
    const re = new RegExp("(?:^|\\s)(" + numberPattern + ")\\s*(" + unitPattern + ")(?:\\s|$)", "i");
    const match = s.match(re);

    if (match) {
      const raw = match[1];
      const quantity = Object.prototype.hasOwnProperty.call(NUMBER_WORDS, raw) ? NUMBER_WORDS[raw] : Number(raw);
      const unit = UNIT_ALIASES.find(x => new RegExp("^(?:" + x.re + ")$", "i").test(match[2]));
      const cleaned = s.replace(match[0], " ").replace(/\s+/g, " ").trim();
      return { quantity, spokenUnit:unit ? unit.unit : "", found:true, cleaned };
    }

    const plainNumber = s.match(new RegExp("(?:^|\\s)(" + numberPattern + ")(?:\\s|$)", "i"));

    if (plainNumber) {
      const raw = plainNumber[1];
      const quantity = Object.prototype.hasOwnProperty.call(NUMBER_WORDS, raw) ? NUMBER_WORDS[raw] : Number(raw);
      const cleaned = s.replace(plainNumber[0], " ").replace(/\s+/g, " ").trim();
      return { quantity, spokenUnit:"", found:true, cleaned };
    }

    return { quantity:1, spokenUnit:"", found:false, cleaned:s };
}

  function productNameForMatch(name) {
    return norm(name).replace(/[()]/g, " ").replace(/\b\d+(?:\.\d+)?\b/g, " ").replace(/\s+/g, " ").trim();
  }

  function cleanCommandName(text) {
    return norm(text)
      .replace(/\b(?:add|please|bill|me|into|put|add|the|item)\b/g, " ")
      .replace(/(?:बिल में|बिल मे|जोड़ दो|जोड़ो|जोड़ो|डाल दो|डालो|लगा दो|लिखो|ऐड करो|ऐड|सामान|प्रोडक्ट|मुझे|दे दो|देना है|का बिल बनाओ|बिल बनाओ|जोड़ना है)/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function matchProducts(query) {
    const q = cleanCommandName(query);
    if (!q) return [];

    const qTokens = q.split(" ").filter(Boolean);
    const products = getProducts();
    const scored = [];

    products.forEach(product => {
      const rawName = norm(product.name);
      const searchable = norm([product.name, product.description || ""].join(" "));
      const nameTokens = productNameForMatch(product.name).split(" ").filter(Boolean);
      const allTokensPresent = qTokens.every(token => searchable.includes(token));
      const direct = rawName === q || rawName.includes(q) || q.includes(productNameForMatch(product.name));
      const overlap = qTokens.filter(token => searchable.includes(token)).length;

      if (direct || allTokensPresent) {
        scored.push({ product, score:(direct ? 100 : 0) + overlap + nameTokens.length / 100 });
      }
    });

    scored.sort((a,b) => b.score-a.score);
    if (!scored.length) return [];

    const top = scored[0].score;
    return scored.filter(x => x.score === top).map(x => x.product);
  }
function canonicalUnit(value) {
    const s = norm(value);
    if (/क्विंटल|कुन्टल|quintal|qtl/.test(s)) return "quintal";
    if (/kg|किलो|किलोग्राम|किग्रा/.test(s)) return "kg";
    if (/^g$|ग्राम|gm|ग्रा/.test(s)) return "g";
    if (/^l$|लीटर|लिटर|ltr/.test(s)) return "l";
    if (/^ml$|मिलीलीटर|मिलिलीटर/.test(s)) return "ml";
    if (/पीस|नग|piece|pcs?/.test(s)) return "piece";
    if (/पैकेट|पैकट|packet|पैक/.test(s)) return "packet";
    if (/डिब्बा|डब्बा|बॉक्स|box/.test(s)) return "box";
    return "";
  }

function convertQuantity(quantity, spokenUnit, productUnit) {
    const target = canonicalUnit(productUnit);

    if (!spokenUnit) {
      return { ok:true, quantity, label:quantity + " " + (productUnit || "यूनिट") };
    }

    if (!target) {
      return {
        ok:false,
        message:"इस सामान की Product DNA यूनिट स्पष्ट नहीं है। पहले सही यूनिट सेव करें।"
      };
    }

    if (spokenUnit === target) {
      return { ok:true, quantity, label:quantity + " " + spokenUnit };
    }

    const toKg = {
      g:0.001,
      kg:1,
      quintal:100
    };

    const toLitre = {
      ml:0.001,
      l:1
    };

    if (toKg[spokenUnit] && toKg[target]) {
      const converted = quantity * toKg[spokenUnit] / toKg[target];
      return { ok:true, quantity:converted, label:quantity + " " + spokenUnit };
    }

    if (toLitre[spokenUnit] && toLitre[target]) {
      const converted = quantity * toLitre[spokenUnit] / toLitre[target];
      return { ok:true, quantity:converted, label:quantity + " " + spokenUnit };
    }

    return {
      ok:false,
      message:"बोली गई मात्रा और Product DNA की यूनिट अलग हैं। यूनिट स्पष्ट करके दोबारा बोलें।"
    };
  }  

    

  

  function parseBillSpeech(text) {
    const quantity = parseQuantity(text);
    const nameQuery = cleanCommandName(quantity.cleaned);
    return { quantity, nameQuery };
  }

  function isAddIntent(text) {
    return /जोड़|जोड़|डाल|बिल में|ऐड|add|put|include|लगा दो/.test(norm(text));
  }

  function handleProductSpeech(text) {
    const parsed = parseBillSpeech(text);
    const matches = matchProducts(parsed.nameQuery);

    if (!matches.length) {
      say("यह सामान आपकी दुकान के Product DNA में नहीं मिला। कोई सामान या रेट अपने आप नहीं जोड़ूँगा। पहले प्रोडक्ट को स्कैनर या प्रोडक्ट रजिस्ट्रेशन से सेव करें।");
      return { ok:false, error:"product_not_found", query:parsed.nameQuery };
    }

    if (matches.length > 1) {
      say("इस नाम से एक से ज्यादा सामान मिले हैं। सही प्रोडक्ट का पूरा नाम या पैक साइज बोलिए। अभी बिल में कुछ नहीं जोड़ा गया।");
      return { ok:false, error:"ambiguous_product", matches:matches.map(p=>p.name) };
    }

    const product = matches[0];
    const qtyInfo = convertQuantity(parsed.quantity.quantity, parsed.quantity.spokenUnit, product.unit);

    if (!qtyInfo.ok) {
      say(qtyInfo.message);
      return { ok:false, error:"unit_mismatch", message:qtyInfo.message };
    }

    const price = Number(product.salePrice);
    const stock = Number(product.stock);

    if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(stock)) {
      say("इस प्रोडक्ट का बिक्री रेट या स्टॉक सही दर्ज नहीं है। पहले Product DNA ठीक करें।");
      return { ok:false, error:"invalid_product_data" };
    }

    const barcode = String(product.barcode || "");
    const previousQty = (Array.isArray(billItems) ? billItems : [])
      .filter(item => item.barcode === barcode)
      .reduce((sum,item)=>sum+Number(item.qty || 0),0);

    if (stock - previousQty < qtyInfo.quantity) {
      const message = "" + product.name + " का स्टॉक पर्याप्त नहीं है। उपलब्ध " + Math.max(0, stock-previousQty) + " " + (product.unit || "यूनिट") + " है।";
      say(message);
      return { ok:false, error:"insufficient_stock", message };
    }

    if (typeof addItem !== "function") {
      say("बिलिंग इंजन का addItem फ़ंक्शन उपलब्ध नहीं है।");
      return { ok:false, error:"billing_function_missing" };
    }

    addItem(product.name, qtyInfo.quantity, qtyInfo.label, "Standard", price, {
      barcode, description:product.description || ""
    });

    const afterQty = (Array.isArray(billItems) ? billItems : [])
      .filter(item => item.barcode === barcode)
      .reduce((sum,item)=>sum+Number(item.qty || 0),0);

    if (afterQty < previousQty + qtyInfo.quantity - 0.000001) {
      return { ok:false, error:"bill_add_failed" };
    }

    const lineTotal = qtyInfo.quantity * price;
    const message = product.name + "، مقدار " + qtyInfo.label + ", रेट ₹" + price + " प्रति " + (product.unit || "यूनिट") + ", कुल ₹" + lineTotal.toFixed(2) + " बिल में जोड़ दिया। बिल अभी ड्राफ्ट है; सेव करने से पहले जाँच लें।";

    say(message);

    return {
      ok:true,
      product:product.name,
      quantity:qtyInfo.quantity,
      unit:product.unit,
      unitPrice:price,
      total:lineTotal
    };
  }

  function syncBusinessContext() {
    try {
      if (!window.BusinessDNA) throw new Error("BusinessDNA core not loaded");

      const shop = window.BusinessDNA.getActiveShop();
      const legacy = window.BusinessDNA.getLegacyView();

      if (!shop || !legacy) {
        say("दुकान का Business Setup अभी सेव नहीं मिला। पहले Business Setup पूरा करें।");
        return false;
      }

      activeBusiness = legacy;
      activeShopId = String(shop.cryptoNodeId || shop.businessId || "").trim() || "unregistered-shop";
      activeSectorId = String(shop.profile && shop.profile.sectorId || legacy.sectorId || "").toUpperCase();
      currentSector = activeSectorId;
      lockedBusinessName = String(shop.profile && shop.profile.name || legacy.businessName || "");

      const tax = String(shop.operations && shop.operations.taxProfile || legacy.taxProfile || "GST-18");
      const taxMatch = tax.match(/(?:GST-)?(\d+(?:\.\d+)?)/i);

      if (typeof currentTaxRate !== "undefined") {
        currentTaxRate = taxMatch ? Number(taxMatch[1]) : (tax === "Tax-Free" ? 0 : 18);
      }

      if (typeof currentAppLang !== "undefined") {
        currentAppLang = (shop.operations && shop.operations.locale === "en-IN") ? "en-US" : "hi-IN";
      }

      const title = document.getElementById("activeStoreTitle");
      if (title) {
        title.textContent = "🔒 " + lockedBusinessName + " — " +
          String(shop.profile && shop.profile.sectorName || legacy.sectorName || activeSectorId);
      }

      const logo = document.getElementById("billBrandLogoHeaderText");
      if (logo && legacy.brandLogoStyle) logo.textContent = legacy.brandLogoStyle;

      if (typeof filterCatalogTabsForBusiness === "function") filterCatalogTabsForBusiness();
      if (typeof loadCatalogGridForManager === "function") loadCatalogGridForManager(currentSector);

      console.info("Nexus POS business context connected", {
        businessId:activeShopId,
        sector:activeSectorId,
        taxProfile:tax
      });

      return true;
    } catch (error) {
      console.error("Nexus POS business context error:", error);
      return false;
    }
  }
  function togglePosVoice() {
    const voice = window.NexusVoice;

    if (!voice) {
      alert("Nexus Voice Engine लोड नहीं हुआ। Script path जाँचें।");
      return;
    }

    const status = voice.getStatus();

    if (status.listening) {
      voice.stopListening();
      return;
    }

    const result = voice.startListening({
      execute:true,
      language:language()
    });

    if (!result.ok) {
      alert(result.message || "माइक शुरू नहीं हो सका। ब्राउज़र की माइक्रोफोन अनुमति जाँचें।");
    }
  }

  function connect() {
    const voice = window.NexusVoice;

    if (!voice) {
      console.error("NexusVoice missing. Load nexus-voice-engine.js before this adapter.");
      return;
    }

    if (!voice.getStatus().initialized) {
      voice.init({ page:"pos", language:"hi-IN", ui:false });
    }

    voice.registerPage({
      page:"pos",
      capabilities:[
        "product_lookup",
        "dynamic_quantity",
        "product_dna_price",
        "stock_validation",
        "draft_billing"
      ],
      getProducts,
      handleCommand:function (context) {
        if (isAddIntent(context.text)) return handleProductSpeech(context.text);

        return {
          ok:false,
          message:"सामान का नाम और मात्रा बोलें, जैसे: दो किलो चीनी बिल में जोड़ो।"
        };
      }
    });

    voice.registerCommand({
      name:"pos-product-to-bill",
      priority:1000,

      match:function (normalized, original) {
        const parsed = parseBillSpeech(original);

        return isAddIntent(original) ||
          parsed.quantity.found ||
          matchProducts(parsed.nameQuery).length > 0;
      },

      run:function (context) {
        return handleProductSpeech(context.text);
      }
    });

    window.toggleContinuousVoice = togglePosVoice;

    voice.on("listeningstart", function () {
      const button = document.getElementById("pulsarMicBtn");

      if (button) {
        button.textContent = "🔴 सुन रहा हूँ";
        button.style.background = "#ff3366";
      }
    });

    voice.on("listeningend", function () {
      const button = document.getElementById("pulsarMicBtn");

      if (button) {
        button.textContent = "🎙️ माइक";
        button.style.background = "";
      }
    });

    voice.on("listeningerror", function () {
      const button = document.getElementById("pulsarMicBtn");

      if (button) {
        button.textContent = "🎙️ माइक";
        button.style.background = "";
      }
    });

    window.NexusPOSVoice = Object.freeze({
      version:"1.0.0",
      syncBusinessContext,
      getProducts,
      parseBillSpeech,
      handleProductSpeech,

      status:function () {
        return {
          voice:voice.getStatus(),
          productCount:getProducts().length,
          businessId:typeof activeShopId !== "undefined" ? activeShopId : null
        };
      }
    });

    window.addEventListener("load", syncBusinessContext, { once:true });

    if (document.readyState === "complete") {
      syncBusinessContext();
    }

    console.info("Nexus POS Voice Adapter connected.");
  }

  connect();
})(window, document);
