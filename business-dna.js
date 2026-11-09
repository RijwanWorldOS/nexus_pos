/*
 * NEXUS POS — BUSINESS DNA CORE
 * Schema v4 | Offline-first | Multi-owner / multi-shop foundation
 *
 * This file is a data/core layer. It does not itself provide cloud sync,
 * encryption, authentication, payments, biometric verification or a UI.
 * Existing pages can keep reading `rizwan_global_business_dna` through the
 * legacy projection while they are migrated to this API.
 */
(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.BusinessDNA = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SCHEMA_VERSION = 4;
  const APP_ID = "nexus-pos";
  const STORAGE = Object.freeze({
    registry: "nexus_business_dna_registry_v4",
    legacy: "rizwan_global_business_dna",
    backup: "nexus_business_dna_registry_v4_backup",
    device: "nexus_business_dna_device_id"
  });

  const BUSINESS_MODELS = Object.freeze([
    "retailer", "wholesaler", "distributor", "manufacturer", "service", "mixed"
  ]);
  const BUSINESS_SCALES = Object.freeze(["micro", "small", "medium", "large"]);
  const TAX_PROFILES = Object.freeze(["GST-18", "GST-12", "GST-5", "Global-VAT", "Tax-Free"]);

  // Canonical sector IDs are kept identical to business-setup.html.
  const SECTORS = Object.freeze([
    { id:"H01", key:"Retail Kirana", name:"Retail Kirana", desc:"किराना एवं जनरल", group:"retail" },
    { id:"H02", key:"Pharmacy Medical", name:"Pharmacy", desc:"मेडिकल स्टोर", group:"health" },
    { id:"H03", key:"Restaurant Dhaba", name:"Restaurant", desc:"रेस्टोरेंट/ढाबा", group:"food-service" },
    { id:"H04", key:"Clothing Fashion", name:"Fashion", desc:"कपड़े शोरूम", group:"retail" },
    { id:"H05", key:"Hardware Paints", name:"Hardware", desc:"हार्डवेयर/पेंट्स", group:"retail" },
    { id:"H06", key:"Street Vendor", name:"Vendor", desc:"ठेला/फुटपाथ", group:"retail" },
    { id:"H07", key:"Cab Driver", name:"Cab Service", desc:"ओला/उबर ड्राइवर", group:"transport" },
    { id:"H08", key:"Farmer Agri", name:"Agriculture", desc:"किसान/कृषि", group:"agriculture" },
    { id:"H09", key:"Salon Parlour", name:"Salon", desc:"सैलून/पार्लर", group:"personal-service" },
    { id:"H10", key:"Cosmetics", name:"Cosmetics", desc:"कॉस्मेटिक्स", group:"retail" },
    { id:"H11", key:"Electronics Mobile", name:"Electronics", desc:"मोबाइल/रिपेयर", group:"retail" },
    { id:"H12", key:"Tution Coaching", name:"Education", desc:"ट्यूशन/कोचिंग", group:"education" },
    { id:"H13", key:"Doctor Clinic", name:"Clinic", desc:"डॉक्टर/क्लिनिक", group:"health" },
    { id:"H14", key:"Software Coder", name:"Coder/Dev", desc:"कोडर/डेवलपर", group:"digital-service" },
    { id:"H15", key:"Influencer Creator", name:"Influencer", desc:"इन्फ्लुएंसर", group:"media" },
    { id:"H16", key:"Anchor Media", name:"Anchor/Media", desc:"एंकर/पत्रकार", group:"media" },
    { id:"H17", key:"Politician Leader", name:"Leader/Netaji", desc:"नेता/प्रतिनिधि", group:"community" },
    { id:"H18", key:"Carpenter Wood", name:"Carpenter", desc:"बढ़ई/कारीगर", group:"trade-service" },
    { id:"H19", key:"Electrician Plumbing", name:"Electrician", desc:"इलेक्ट्रिशियन", group:"trade-service" },
    { id:"H20", key:"Auto Mechanic", name:"Mechanic", desc:"गाड़ी रिपेयर", group:"trade-service" },
    { id:"H21", key:"Dairy Milk", name:"Dairy", desc:"डेयरी/दूध बूथ", group:"food-retail" },
    { id:"H22", key:"Bakery Sweets", name:"Bakery", desc:"स्वीट्स/बेकरी", group:"food-retail" },
    { id:"H23", key:"Stationery Books", name:"Stationery", desc:"स्टेशनरी/बुक्स", group:"retail" },
    { id:"H24", key:"Gym Fitness", name:"Fitness", desc:"जिम/फिटनेस", group:"personal-service" },
    { id:"H25", key:"Tailor Boutique", name:"Tailor", desc:"दर्जी/बुटीक", group:"trade-service" },
    { id:"H26", key:"Laundry Dryclean", name:"Laundry", desc:"लॉन्ड्री/प्रेस", group:"personal-service" },
    { id:"H27", key:"Footwear Store", name:"Footwear", desc:"जूते-चप्पल", group:"retail" },
    { id:"H28", key:"Freelancer IT", name:"Freelancer", desc:"डिजिटल सर्विस", group:"digital-service" },
    { id:"H29", key:"Property Agent", name:"Real Estate", desc:"प्रॉपर्टी डीलर", group:"professional-service" },
    { id:"H30", key:"Jewellery Gold", name:"Jewellery", desc:"ज्वेलरी शोरूम", group:"retail" },
    { id:"H31", key:"Optical Glasses", name:"Opticals", desc:"चश्मा घर", group:"retail" },
    { id:"H32", key:"Photo Studio", name:"Studio", desc:"फोटो स्टूडियो", group:"creative-service" },
    { id:"H33", key:"Transport Cargo", name:"Transport", desc:"ट्रांसपोर्ट/लॉजिस्टिक्स", group:"transport" },
    { id:"H34", key:"Security Guard", name:"Security", desc:"सिक्योरिटी सर्विस", group:"professional-service" },
    { id:"H35", key:"Event Planner", name:"Events", desc:"इवेंट प्लानर", group:"creative-service" },
    { id:"H36", key:"Catering Service", name:"Catering", desc:"केटरिंग सर्विस", group:"food-service" },
    { id:"H37", key:"Packers Movers", name:"Movers", desc:"पैकेर्स एंड मूवर्स", group:"transport" },
    { id:"H38", key:"Computer Training", name:"Computer Lab", desc:"कंप्यूटर सेंटर", group:"education" },
    { id:"H39", key:"NGO Social Worker", name:"Social Worker", desc:"समाजसेवी/एनजीओ", group:"community" },
    { id:"H40", key:"Legal Advocate", name:"Advocate", desc:"वकील/कानूनी सेवा", group:"professional-service" },
    { id:"H41", key:"CA Accountant", name:"Accountant", desc:"सीए/मुनीम", group:"professional-service" },
    { id:"H42", key:"Yoga Instructor", name:"Yoga Guru", desc:"योग इंस्ट्रक्टर", group:"personal-service" },
    { id:"H43", key:"Music Dance Class", name:"Music/Dance", desc:"संगीत/नृत्य क्लास", group:"education" },
    { id:"H44", key:"Sports Academy", name:"Sports Coach", desc:"खेल अकादमी", group:"education" },
    { id:"H45", key:"Courier Service", name:"Courier", desc:"कूरियर सर्विस", group:"transport" },
    { id:"H46", key:"Petrol Pump", name:"Petrol Pump", desc:"पेट्रोल पंप", group:"retail" },
    { id:"H47", key:"Tent House", name:"Tent House", desc:"टेंट हाउस", group:"rental-service" },
    { id:"H48", key:"Nursery Plants", name:"Nursery", desc:"नर्सरी/पौधे", group:"agriculture" },
    { id:"H49", key:"Scrap Dealer Kabadi", name:"Kabadiwala", desc:"कबाड़/रीसायकल", group:"retail" },
    { id:"H50", key:"Independent Creator", name:"Creator Hub", desc:"अन्य स्वतंत्र क्रिएटर", group:"other" }
  ]);

  const MODULE_DEFINITIONS = Object.freeze([
    { id:"pos", label:"बिलिंग / POS", tier:"core" },
    { id:"inventory", label:"स्टॉक / इन्वेंटरी", tier:"core" },
    { id:"purchase", label:"खरीद / सप्लायर", tier:"core" },
    { id:"udhaar", label:"उधार / ग्राहक बकाया", tier:"core" },
    { id:"ledger", label:"लेजर / हिसाब", tier:"core" },
    { id:"reports", label:"रिपोर्ट / विश्लेषण", tier:"standard" },
    { id:"payments", label:"डिजिटल भुगतान", tier:"integration" },
    { id:"barcode-camera", label:"कैमरा बारकोड स्कैन", tier:"integration" },
    { id:"voice-assistant", label:"वॉइस असिस्टेंट", tier:"integration" },
    { id:"customer-crm", label:"ग्राहक प्रबंधन", tier:"standard" },
    { id:"supplier-crm", label:"सप्लायर प्रबंधन", tier:"standard" },
    { id:"multi-branch", label:"मल्टी-ब्रांच", tier:"advanced" },
    { id:"ai-insights", label:"AI बिजनेस इनसाइट्स", tier:"future" },
    { id:"peer-sync", label:"P2P / Mesh Sync", tier:"future" },
    { id:"cloud-sync", label:"Cloud Sync", tier:"future" },
    { id:"cctv", label:"CCTV लिंक", tier:"integration" }
  ]);

  // Dataset metadata only. Large files whose schema could not be sampled are
  // explicitly marked unverified; no import is enabled until inspected.
  const DATASET_REGISTRY = Object.freeze([
    { id:"grocerydb-foods", file:"GroceryDB_foods.csv", domain:"food-products", sectors:["H01","H03","H21","H22"], status:"present-unverified", role:"candidate-product-reference", importEnabled:false, note:"फ़ाइल मौजूद है; बड़े आकार के कारण header/schema अभी सत्यापित नहीं।" },
    { id:"dispensing-data", file:"dispensing.csv", domain:"medical-dispensing", sectors:["H02","H13"], status:"present-unverified", role:"candidate-dispensing-reference", importEnabled:false, note:"फ़ाइल मौजूद है; schema और उपयोग-अधिकार जाँचने के बाद ही उपयोग।" },
    { id:"image-data", file:"images.csv", domain:"product-images", sectors:[], status:"present-unverified", role:"candidate-image-reference", importEnabled:false, note:"फ़ाइल मौजूद है; image mapping/schema अभी सत्यापित नहीं।" },
    { id:"hardware-store-data", file:"hardwareStore.csv", domain:"hardware-products-and-warehouse", sectors:["H05","H11"], status:"sampled-header", role:"product-warehouse-reference", importEnabled:false, note:"Header और शुरुआती rows देखे गए; product/warehouse rows दोहरते हैं, import से पहले normalization जरूरी।" },
    { id:"drug-demand-data", file:"drugs.csv", domain:"medical-demand-planning", sectors:["H02"], status:"sampled-header", role:"demand-planning-reference", importEnabled:false, note:"यह demand/shelf-life reference है; इसे अपने-आप बिक्री योग्य product master न मानें।" },
    { id:"regional-context-data", file:"context.csv", domain:"regional-seasonal-context", sectors:["H02","H01","H03"], status:"sampled-header", role:"analytics-context", importEnabled:false, note:"क्षेत्रीय/मौसमी analytics context; product catalog नहीं।" },
    { id:"retail-ferreteria-data", file:"retail_ferreteria.csv", domain:"hardware-retail-transactions", sectors:["H05"], status:"sampled-header", role:"sales-history-reference", importEnabled:false, note:"Spanish header वाला बिक्री-लेनदेन dataset; product master नहीं और मुद्रा/देश mapping जरूरी।" },
    { id:"superstore-data", file:"superstore_final_dataset (1).csv", domain:"retail-analytics", sectors:["H01","H04","H05","H10","H11","H23"], status:"present-unverified", role:"analytics-reference", importEnabled:false, note:"फ़ाइल मौजूद है; schema अभी सत्यापित नहीं।" },
    { id:"swiggy-menus-data", file:"swiggy_all_menus_india.csv", domain:"restaurant-menus", sectors:["H03","H22","H36"], status:"present-unverified", role:"menu-reference", importEnabled:false, note:"फ़ाइल मौजूद है; schema, licensing और import mapping जाँचनी होगी।" },
    { id:"styles-data", file:"styles.csv", domain:"fashion-products", sectors:["H04","H25","H27"], status:"present-unverified", role:"candidate-product-reference", importEnabled:false, note:"फ़ाइल मौजूद है; schema अभी सत्यापित नहीं।" }
  ]);

  const BASE_PRODUCT_FIELDS = Object.freeze([
    { id:"name", label:"उत्पाद का नाम", type:"text", required:true },
    { id:"sku", label:"SKU / Item Code", type:"text", required:false },
    { id:"barcode", label:"Barcode", type:"text", required:false },
    { id:"category", label:"कैटेगरी", type:"text", required:false },
    { id:"brand", label:"ब्रांड", type:"text", required:false },
    { id:"unit", label:"इकाई", type:"unit", required:true },
    { id:"purchasePrice", label:"खरीद मूल्य", type:"money", required:false },
    { id:"salePrice", label:"बिक्री मूल्य", type:"money", required:false },
    { id:"taxCode", label:"Tax Profile", type:"tax-code", required:false },
    { id:"stockQty", label:"मौजूदा स्टॉक", type:"quantity", required:false },
    { id:"reorderLevel", label:"Minimum Stock Alert", type:"quantity", required:false }
  ]);
  const BASE_SERVICE_FIELDS = Object.freeze([
    { id:"name", label:"सेवा का नाम", type:"text", required:true },
    { id:"serviceCode", label:"Service Code", type:"text", required:false },
    { id:"category", label:"कैटेगरी", type:"text", required:false },
    { id:"description", label:"विवरण", type:"text", required:false },
    { id:"durationMinutes", label:"अवधि (मिनट)", type:"number", required:false },
    { id:"costPrice", label:"लागत", type:"money", required:false },
    { id:"salePrice", label:"सेवा शुल्क", type:"money", required:false },
    { id:"taxCode", label:"Tax Profile", type:"tax-code", required:false }
  ]);

  const SECTOR_CATALOG_OVERRIDES = Object.freeze({
    H01:{ id:"kirana-grocery", kind:"product-catalog", itemType:"product", fields:["packSize","batchNumber","expiryDate","mrp"], tracking:["stock","batch-expiry-optional"] },
    H02:{ id:"pharmacy-medicine", kind:"regulated-product-catalog", itemType:"medicine", fields:["genericName","strength","dosageForm","manufacturer","batchNumber","expiryDate","mrp","scheduleClass"], tracking:["stock","batch-expiry-required-for-batch-items"], caution:"दवा संबंधी नियम, लाइसेंस, prescription और बिक्री-नियंत्रण अलग से लागू करने होंगे; यह schema कानूनी अनुपालन प्रमाणित नहीं करता।" },
    H03:{ id:"restaurant-menu", kind:"menu-catalog", itemType:"menu-item", fields:["variant","addons","prepTimeMinutes","kitchenStation","recipeCost"], tracking:["menu-availability","ingredient-stock-link"] },
    H04:{ id:"fashion-apparel", kind:"product-catalog", itemType:"product-variant", fields:["size","color","fabric","style","season","mrp"], tracking:["stock-by-variant"] },H05:{ id:"hardware-materials", kind:"product-catalog", itemType:"product", fields:["material","dimensions","size","grade","warrantyMonths","mrp"], tracking:["stock","unit-conversion-optional"] },
    H06:{ id:"street-vendor-items", kind:"product-catalog", itemType:"product", fields:["packSize","mrp"], tracking:["simple-stock"] },
    H08:{ id:"agriculture-catalog", kind:"agri-catalog", itemType:"produce-or-input", fields:["crop","season","grade","harvestDate","lotNumber"], tracking:["lot","weight","season"] },
    H09:{ id:"salon-services", kind:"service-and-product-catalog", itemType:"service-or-product", fields:["durationMinutes","staffSkill","serviceVariant"], tracking:["appointments-optional","consumables-optional"] },
    H10:{ id:"cosmetics-products", kind:"product-catalog", itemType:"product", fields:["skinType","shade","volume","batchNumber","expiryDate","mrp"], tracking:["stock","batch-expiry-optional"] },
    H11:{ id:"electronics-devices", kind:"product-and-repair-catalog", itemType:"device-or-service", fields:["modelNumber","serialNumber","imei","warrantyMonths","condition"], tracking:["serial-number-optional","warranty"] },
    H13:{ id:"clinic-services", kind:"service-catalog", itemType:"clinical-service", fields:["durationMinutes","practitioner","appointmentType"], tracking:["appointment-records-optional"] },
    H18:{ id:"carpentry-jobs", kind:"service-and-material-catalog", itemType:"job-or-material", fields:["material","dimensions","measurementUnit","jobStage"], tracking:["job-stage","material-usage-optional"] },
    H19:{ id:"electrical-plumbing", kind:"service-and-product-catalog", itemType:"service-or-part", fields:["material","modelNumber","warrantyMonths","jobStage"], tracking:["parts-stock","job-stage"] },
    H20:{ id:"auto-repair", kind:"service-and-parts-catalog", itemType:"repair-or-part", fields:["vehicleType","vehicleModel","partNumber","jobStage","warrantyMonths"], tracking:["parts-stock","job-card"] },
    H21:{ id:"dairy-products", kind:"perishable-product-catalog", itemType:"product", fields:["volume","fatPercent","batchNumber","expiryDate","mrp"], tracking:["stock","batch-expiry"] },
    H22:{ id:"bakery-foods", kind:"perishable-product-catalog", itemType:"food-product", fields:["ingredients","allergens","batchNumber","productionDate","expiryDate","mrp"], tracking:["stock","batch-expiry"] },
    H23:{ id:"stationery-books", kind:"product-and-book-catalog", itemType:"product-or-book", fields:["paperSize","pages","author","publisher","isbn","edition"], tracking:["stock","isbn-optional"] },
    H25:{ id:"tailoring-catalog", kind:"service-and-product-catalog", itemType:"custom-order", fields:["fabric","measurements","designCode","deliveryDate","jobStage"], tracking:["custom-order-stage"] },
    H27:{ id:"footwear-catalog", kind:"product-catalog", itemType:"product-variant", fields:["size","color","material","style","mrp"], tracking:["stock-by-size"] },
    H30:{ id:"jewellery-catalog", kind:"product-catalog", itemType:"jewellery-item", fields:["jewelleryType","material","style","color","size","weight","purityOrGrade","makingCharge","mrp"], tracking:["stock","item-variant"], note:"Artificial jewellery के लिए specialization/material/style fields उपयोग किए जा सकते हैं; gold hallmark/purity को अनिवार्य नहीं माना गया है।" },
    H31:{ id:"optical-products", kind:"product-and-service-catalog", itemType:"frame-lens-or-service", fields:["frameType","lensType","prescriptionRef","material","warrantyMonths"], tracking:["stock","custom-order-optional"] },
    H33:{ id:"transport-services", kind:"service-catalog", itemType:"transport-service", fields:["vehicleType","route","distance","loadCapacity","bookingDate"], tracking:["booking","trip-record"] },
    H36:{ id:"catering-menu", kind:"menu-and-service-catalog", itemType:"food-service", fields:["menuItems","guestCount","eventDate","packageType","allergens"], tracking:["event-booking","ingredient-stock-optional"] },
    H46:{ id:"fuel-products", kind:"measured-product-catalog", itemType:"fuel-product", fields:["fuelType","density","pumpNo","meterReading"], tracking:["measured-quantity","shift-reconciliation"] },
    H49:{ id:"scrap-materials", kind:"weighted-material-catalog", itemType:"scrap-material", fields:["materialGrade","weight","unitRate","sourceType"], tracking:["weight-based-stock"] }
  });

  function buildCatalogProfile(sectorId) {
    const sector = SECTORS.find(item => item.id === String(sectorId || "").toUpperCase());
    if (!sector) return null;
    const override = SECTOR_CATALOG_OVERRIDES[sector.id] || {};
    const serviceGroups = ["personal-service","digital-service","professional-service","creative-service","education","community","rental-service","transport","trade-service","media","other","food-service"];
    const isService = serviceGroups.includes(sector.group);
    const base = isService ? BASE_SERVICE_FIELDS : BASE_PRODUCT_FIELDS;
    const extra = (override.fields || []).map(id => ({
      id,
      label: id.replace(/([A-Z])/g," $1").replace(/[-_]/g," ").replace(/^./,c=>c.toUpperCase()),
      type: /price|charge|mrp|cost/i.test(id) ? "money" : /date/i.test(id) ? "date" : /weight|size|pages|minutes|percent|months|distance|capacity/i.test(id) ? "number-or-text" : "text",
      required:false
    }));
    return {
      profileId: override.id || (isService ? "service:" + sector.id : "product:" + sector.id),
      sectorId: sector.id,
      sectorName: sector.name,
      sectorGroup: sector.group,
      catalogKind: override.kind || (isService ? "service-catalog" : "product-catalog"),
      itemType: override.itemType || (isService ? "service" : "product"),
      schemaVersion: 1,
      fields: clone(base).concat(extra),
      tracking: override.tracking ? override.tracking.slice() : (isService ? ["service-record"] : ["stock"]),
      dataSources: DATASET_REGISTRY.filter(source => source.sectors.includes(sector.id)).map(source => ({ id:source.id, file:source.file, status:source.status, importEnabled:source.importEnabled })),
      importPolicy: "explicit-review-required",
      note: override.note || "यह sector template है; दुकान अपनी जरूरत के अनुसार optional fields बढ़ा सकती है।",
      caution: override.caution || ""
    };
  }

  const nowISO = () => new Date().toISOString();
  const isObject = value => value !== null && typeof value === "object" && !Array.isArray(value);
  const clone = value => JSON.parse(JSON.stringify(value));
  const clean = value => String(value == null ? "" : value).trim();
  const sectorIdFrom = value => {
    const match = clean(value).match(/H\d{2}/i);
    return match ? match[0].toUpperCase() : "";
  };
  const sectorById = id => SECTORS.find(item => item.id === clean(id).toUpperCase()) || null;

  function storage() {
    if (typeof localStorage === "undefined") {
      throw new Error("BusinessDNA requires browser localStorage or an injected storage adapter.");
    }
    return localStorage;
  }

  let storageAdapter = null;
  function getStore() { return storageAdapter || storage(); }

  function secureId(prefix) {
    const cryptoApi = typeof crypto !== "undefined" ? crypto : null;
    if (!cryptoApi || typeof cryptoApi.getRandomValues !== "function") {
      throw new Error("सुरक्षित ID बनाने के लिए इस डिवाइस में Web Crypto उपलब्ध होना जरूरी है।");
    }
    if (typeof cryptoApi.randomUUID === "function") return prefix + cryptoApi.randomUUID();
    const bytes = new Uint8Array(16);
    cryptoApi.getRandomValues(bytes);
    const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
    return prefix + hex;
  }

  function getDeviceId() {
    const store = getStore();
    let id = store.getItem(STORAGE.device);
    if (!id) {
      id = secureId("dev_");
      store.setItem(STORAGE.device, id);
    }
    return id;
  }

  function defaultModules() {
    const result = {};
    MODULE_DEFINITIONS.forEach(module => {
      result[module.id] = { enabled:false, status: module.tier === "core" ? "present-in-project-unverified" : "not-configured" };
    });
    return result;
  }

  function normalizeAddress(input) {
    const source = isObject(input) ? input : {};
    return {
      line1: clean(source.line1 || source.addressLine),
      line2: clean(source.line2),
      postOffice: clean(source.postOffice),
      district: clean(source.district),
      city: clean(source.city),
      state: clean(source.state),
      postalCode: clean(source.postalCode || source.pinCode),
      country: clean(source.country) || "India",
      gps: clean(source.gps || source.gpsLocation)
    };
  }

  function makeShop(input, ownerId, existing) {
    const raw = isObject(input) ? input : {};
    const old = isObject(existing) ? existing : {};
    const oldProfile = isObject(old.profile) ? old.profile : {};
    const oldContact = isObject(old.contact) ? old.contact : {};
    const oldOperations = isObject(old.operations) ? old.operations : {};
    const oldBranding = isObject(old.branding) ? old.branding : {};
    const oldAddress = isObject(old.location) ? old.location : {};

    const businessName = clean(raw.businessName !== undefined ? raw.businessName : (raw.name !== undefined ? raw.name : oldProfile.name));
    const sectorRaw = raw.sector !== undefined ? raw.sector : (raw.sectorId !== undefined ? raw.sectorId : oldProfile.sectorId);
    const sectorId = sectorIdFrom(sectorRaw) || clean(sectorRaw).toUpperCase();
    const sector = sectorById(sectorId);
    const businessModel = clean(raw.businessModel !== undefined ? raw.businessModel : oldOperations.businessModel) || "retailer";
    const businessScale = clean(raw.businessScale !== undefined ? raw.businessScale : oldOperations.businessScale) || "small";
    const country = clean((raw.address && raw.address.country) || raw.country || oldAddress.country) || "India";
    const addressInput = raw.address !== undefined ? raw.address : raw;
    const address = normalizeAddress({ ...oldAddress, ...addressInput, country });
    const phone = clean(raw.phone !== undefined ? raw.phone : oldContact.phone).replace(/\D/g, "");
    const email = clean(raw.email !== undefined ? raw.email : oldContact.email).toLowerCase();
    const taxProfile = clean(raw.taxProfile !== undefined ? raw.taxProfile : oldOperations.taxProfile) || (country === "India" ? "GST-18" : "not-configured");
    const businessId = clean(raw.businessId || raw.cryptoNodeId || old.businessId || old.cryptoNodeId) || secureId("shop_");
    const createdAt = old.createdAt || raw.createdAt || nowISO();
    const updatedAt = raw.updatedAt || old.updatedAt || nowISO();
    const sectorUnchanged = !!(old.catalog && old.catalog.sectorId === sectorId);
    const explicitCatalogProfile = clean(raw.catalogProfileId || (raw.catalog && raw.catalog.profileId));
    const catalogProfileId = (sectorUnchanged && explicitCatalogProfile)
      ? explicitCatalogProfile
      : (buildCatalogProfile(sectorId) ? buildCatalogProfile(sectorId).profileId : (sectorId ? "sector:" + sectorId : "sector:unassigned"));

    return {
      businessId,
      cryptoNodeId: businessId, // compatibility alias required by current POS pages
      revision: Number(raw.revision || old.revision || 1),
      ownerId: clean(raw.ownerId || old.ownerId) || ownerId,
      status: clean(raw.status || old.status) || "active",
      profile: {
        name: businessName,
        legalName: clean(raw.legalName !== undefined ? raw.legalName : oldProfile.legalName),
        sectorId: sectorId,
        sectorKey: sector ? sector.key : clean(raw.sectorKey || oldProfile.sectorKey),
        sectorName: sector ? sector.name : clean(raw.sectorName || oldProfile.sectorName),
        description: clean(raw.description !== undefined ? raw.description : oldProfile.description),
        businessType: clean(raw.businessType !== undefined ? raw.businessType : oldProfile.businessType),
        specialization: clean(raw.specialization !== undefined ? raw.specialization : oldProfile.specialization),
        tags: Array.isArray(raw.tags) ? raw.tags.slice() : (Array.isArray(oldProfile.tags) ? oldProfile.tags.slice() : [])
      },
      operations: {
        businessModel,
        businessScale,
        taxProfile,
        currency: clean(raw.currency || oldOperations.currency) || (country === "India" ? "INR" : ""),
        locale: clean(raw.locale || oldOperations.locale) || (country === "India" ? "hi-IN" : "en"),
        timezone: clean(raw.timezone || oldOperations.timezone) || (country === "India" ? "Asia/Kolkata" : "UTC")
      },
      contact: {
        phone,
        email,
        website: clean(raw.website !== undefined ? raw.website : oldContact.website),
        supportPhone: clean(raw.supportPhone !== undefined ? raw.supportPhone : oldContact.supportPhone)},
      location: address,
      branding: {
        logoStyle: clean(raw.brandLogoStyle !== undefined ? raw.brandLogoStyle : (raw.logoStyle !== undefined ? raw.logoStyle : oldBranding.logoStyle)),
        logoUrl: clean(raw.logoUrl !== undefined ? raw.logoUrl : oldBranding.logoUrl),
        brandColor: clean(raw.brandColor !== undefined ? raw.brandColor : oldBranding.brandColor)
      },
      branches: Array.isArray(raw.branches) ? clone(raw.branches) : (Array.isArray(old.branches) ? clone(old.branches) : []),
      catalog: {
        profileId: catalogProfileId,
        sectorId,
        schemaVersion: Number((raw.catalog && raw.catalog.schemaVersion) || (old.catalog && old.catalog.schemaVersion) || 1),
        activeDatasetIds: Array.isArray(raw.activeDatasetIds) ? raw.activeDatasetIds.slice() : (Array.isArray(old.catalog && old.catalog.activeDatasetIds) ? old.catalog.activeDatasetIds.slice() : []),
        customFields: isObject(raw.customCatalogFields) ? clone(raw.customCatalogFields) : (isObject(old.catalog && old.catalog.customFields) ? clone(old.catalog.customFields) : {}),
        importPolicy: "explicit-review-required"
      },
      modules: isObject(raw.modules) ? clone(raw.modules) : (isObject(old.modules) ? clone(old.modules) : defaultModules()),
      sync: {
        mode: "local-first",
        provider: "none",
        status: "not-configured",
        lastSyncedAt: old.sync && old.sync.lastSyncedAt || null,
        conflictPolicy: "manual-review",
        encryption: "not-configured"
      },
      compliance: {
        biometricStatus: "not-implemented",
        taxJurisdiction: country,
        notes: "स्थानीय नियमों और कर-दर की पुष्टि व्यवसाय-मालिक/विशेषज्ञ द्वारा आवश्यक है।"
      },
      extensions: isObject(old.extensions) ? clone(old.extensions) : {},
      createdAt,
      updatedAt
    };
  }

  function legacyProjection(shop, owner) {
    const address = shop.location || {};
    const profile = shop.profile || {};
    const operations = shop.operations || {};
    const contact = shop.contact || {};
    const branding = shop.branding || {};
    const sector = profile.sectorId && profile.sectorKey
      ? profile.sectorId + ". " + profile.sectorKey
      : profile.sectorId;
    return {
      schemaVersion: SCHEMA_VERSION,
      businessId: shop.businessId,
      cryptoNodeId: shop.cryptoNodeId || shop.businessId,
      ownerId: shop.ownerId,
      businessName: profile.name || "",
      legalName: profile.legalName || "",
      pinCode: address.postalCode || "",
      phone: contact.phone || "",
      email: contact.email || "",
      sector,
      sectorId: profile.sectorId || "",
      sectorName: profile.sectorName || "",
      owner: owner && owner.name ? owner.name : "मालिक",
      brandLogoStyle: branding.logoStyle || "",
      taxProfile: operations.taxProfile || "GST-18",
      businessModel: operations.businessModel || "retailer",
      businessScale: operations.businessScale || "small",
      addressLine: address.line1 || "",
      postOffice: address.postOffice || "",
      district: address.district || "",
      state: address.state || "",
      country: address.country || "India",
      gpsLocation: address.gps || "",
      biometricStatus: "not_implemented",
      status: "saved_locally",
      createdAt: shop.createdAt,
      updatedAt: shop.updatedAt
    };
  }

  function validateShop(shop) {
    const errors = [];
    const warnings = [];
    if (!shop || !shop.businessId) errors.push("दुकान की स्थायी ID नहीं है।");
    if (shop && shop.businessId && shop.cryptoNodeId && shop.businessId !== shop.cryptoNodeId) errors.push("businessId और cryptoNodeId एक जैसे होने चाहिए।");
    if (!clean(shop && shop.profile && shop.profile.name)) errors.push("दुकान का नाम जरूरी है।");
    const sectorId = clean(shop && shop.profile && shop.profile.sectorId);
    if (sectorId && !sectorById(sectorId)) errors.push("सेक्टर ID मान्य नहीं है: " + sectorId);
    if (!BUSINESS_MODELS.includes(shop && shop.operations && shop.operations.businessModel)) errors.push("Business Model मान्य नहीं है।");
    if (!BUSINESS_SCALES.includes(shop && shop.operations && shop.operations.businessScale)) errors.push("Business Scale मान्य नहीं है।");
    const taxProfile = clean(shop && shop.operations && shop.operations.taxProfile);
    if (taxProfile && !TAX_PROFILES.includes(taxProfile) && taxProfile !== "not-configured") errors.push("Tax Profile मान्य नहीं है।");
    const currency = clean(shop && shop.operations && shop.operations.currency);
    if (currency && !/^[A-Z]{3}$/.test(currency)) errors.push("Currency को 3-letter ISO code में होना चाहिए, जैसे INR।");
    if (clean(shop && shop.profile && shop.profile.name).length > 120) errors.push("दुकान का नाम 120 अक्षरों से छोटा रखें।");
    const country = clean(shop && shop.location && shop.location.country);
    const pin = clean(shop && shop.location && shop.location.postalCode);
    if (country === "India" && pin && !/^[1-9][0-9]{5}$/.test(pin)) errors.push("भारत का PIN Code 6 अंकों का होना चाहिए।");
    const phone = clean(shop && shop.contact && shop.contact.phone);
    if (country === "India" && phone && !/^[6-9][0-9]{9}$/.test(phone)) errors.push("भारत का मोबाइल नंबर 10 अंकों का होना चाहिए।");
    const email = clean(shop && shop.contact && shop.contact.email);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("ईमेल पता मान्य नहीं है।");
    if (!sectorId) warnings.push("अभी कोई सेक्टर नहीं चुना गया है।");
    if (shop && shop.sync && shop.sync.status !== "connected") warnings.push("Cloud/P2P Sync अभी कॉन्फ़िगर नहीं है; डेटा इस डिवाइस पर ही रहेगा।");
    return { valid: errors.length === 0, errors, warnings };
  }

  function emptyRegistry() {
    const timestamp = nowISO();
    return {
      appId: APP_ID,
      schemaVersion: SCHEMA_VERSION,
      registryId: secureId("reg_"),
      owner: { ownerId: "", name: "", phone: "", email: "", createdAt: timestamp, updatedAt: timestamp },
      activeBusinessId: "",
      businesses: [],
      revision: 0,
      device: { deviceId: getDeviceId(), platform: "browser", createdAt: timestamp },
      preferences: { language: "hi", currency: "INR", dateFormat: "DD-MM-YYYY" },
      sync: { mode: "local-first", provider: "none", status: "not-configured", lastSyncedAt: null },
      migration: { sourceSchemaVersion: null, migratedAt: null, warnings: [] },
      createdAt: timestamp,
      updatedAt: timestamp
    };
  }

  function normalizeRegistry(raw) {
    if (!isObject(raw)) throw new Error("Business DNA registry का format सही नहीं है।");
    const registry = clone(raw);
    registry.appId = APP_ID;
    registry.schemaVersion = SCHEMA_VERSION;
    registry.registryId = clean(registry.registryId) || secureId("reg_");
    registry.owner = isObject(registry.owner) ? registry.owner : { ownerId:"", name:"", phone:"", email:"" };
    registry.businesses = Array.isArray(registry.businesses) ? registry.businesses : [];
    registry.businesses = registry.businesses.filter(isObject);
    const canonicalOwnerId = clean(registry.owner.ownerId || (registry.businesses[0] && registry.businesses[0].ownerId)) || secureId("owner_");
    registry.owner.ownerId = canonicalOwnerId;
    registry.businesses = registry.businesses.map(shop => {
      const ownerId = canonicalOwnerId;
      return makeShop({
        businessId: shop.businessId || shop.cryptoNodeId,
        businessName: shop.profile && shop.profile.name,
        sectorId: shop.profile && shop.profile.sectorId,
        businessType: shop.profile && shop.profile.businessType,
        specialization: shop.profile && shop.profile.specialization,
        tags: shop.profile && shop.profile.tags,
        businessModel: shop.operations && shop.operations.businessModel,
        businessScale: shop.operations && shop.operations.businessScale,
        taxProfile: shop.operations && shop.operations.taxProfile,
        phone: shop.contact && shop.contact.phone,
        email: shop.contact && shop.contact.email,
        address: shop.location,
        brandLogoStyle: shop.branding && shop.branding.logoStyle,
        ownerId,
        modules: shop.modules,
        catalog: shop.catalog,
        branches: shop.branches,
        updatedAt: shop.updatedAt,
        activeDatasetIds: shop.catalog && shop.catalog.activeDatasetIds,
        customCatalogFields: shop.catalog && shop.catalog.customFields,
        status: shop.status,
        createdAt: shop.createdAt
      }, ownerId, shop);
    });
    if (!registry.owner.ownerId && registry.businesses.length) registry.owner.ownerId = registry.businesses[0].ownerId;
    registry.owner.name = clean(registry.owner.name);
    registry.owner.phone = clean(registry.owner.phone);
    registry.owner.email = clean(registry.owner.email).toLowerCase();
    if (!registry.businesses.some(shop => shop.businessId === registry.activeBusinessId)) {
      registry.activeBusinessId = registry.businesses[0] ? registry.businesses[0].businessId : "";
    }
    registry.device = isObject(registry.device) ? registry.device : { deviceId:getDeviceId(), platform:"browser" };
    registry.preferences = isObject(registry.preferences) ? registry.preferences : { language:"hi", currency:"INR", dateFormat:"DD-MM-YYYY" };
    registry.sync = isObject(registry.sync) ? registry.sync : { mode:"local-first", provider:"none", status:"not-configured", lastSyncedAt:null };
    registry.migration = isObject(registry.migration) ? registry.migration : { sourceSchemaVersion:null, migratedAt:null, warnings:[] };
    registry.createdAt = registry.createdAt || nowISO();
    registry.revision = Number(registry.revision) || 0;
    registry.updatedAt = registry.updatedAt || nowISO();
    return registry;
  }

  function migrateLegacy(legacy) {
    const registry = emptyRegistry();
    const old = isObject(legacy) ? legacy : {};
    const ownerId = secureId("owner_");
    registry.owner = {
      ownerId,
      name: clean(old.owner) || "मालिक",
      phone: clean(old.phone).replace(/\D/g, ""),
      email: clean(old.email).toLowerCase(),
      createdAt: old.createdAt || nowISO(),
      updatedAt: nowISO()
    };
    if (clean(old.businessName)) {
      const shop = makeShop({
        businessId: old.cryptoNodeId || old.businessId,
        businessName: old.businessName,
        legalName: old.legalName,
        sector: old.sector || old.sectorId,
        businessModel: old.businessModel,
        businessScale: old.businessScale,
        taxProfile: old.taxProfile,
        phone: old.phone,
        email: old.email,
        brandLogoStyle: old.brandLogoStyle,
        address: {
          line1: old.addressLine,
          postOffice: old.postOffice,
          district: old.district,
          state: old.state,
          country: old.country || "India",
          postalCode: old.pinCode,
          gps: old.gpsLocation
        },
        ownerId,
        createdAt: old.createdAt
      }, ownerId);
      registry.businesses.push(shop);
      registry.activeBusinessId = shop.businessId;
    }
    registry.migration = {
      sourceSchemaVersion: Number(old.schemaVersion) || 2,
      migratedAt: nowISO(),
      warnings: ["पुराने single-shop DNA को नए multi-shop registry में migrate किया गया। पुराने storage key को compatibility के लिए रखा गया है।"]
    };
    return registry;
  }

  function readJSON(key) {
    const raw = getStore().getItem(key);
    if (raw === null || raw === "") return null;
    return JSON.parse(raw);
  }

  function writeRegistry(registry, options) {
    const store = getStore();
    const opts = options || {};
    const payload = JSON.stringify(registry);
    const previous = store.getItem(STORAGE.registry);
    if (previous && opts.keepBackup !== false) {
      try { store.setItem(STORAGE.backup, previous); } catch (_) { /* best effort backup */ }
    }
    store.setItem(STORAGE.registry, payload);
    const check = store.getItem(STORAGE.registry);
    if (check !== payload) throw new Error("Business DNA save verification failed.");
    const active = registry.businesses.find(shop => shop.businessId === registry.activeBusinessId);
    if (active) {
      try {
        store.setItem(STORAGE.legacy, JSON.stringify(legacyProjection(active, registry.owner)));
      } catch (error) {
        // Canonical registry is saved; old pages may temporarily see stale legacy data.
        return { saved:true, legacyProjectionUpdated:false, warning:"पुराने POS compatibility key को अपडेट नहीं कर सके: " + error.message };
      }
    }
    return { saved:true, legacyProjectionUpdated:!!active, warning:null };
  }

  function load(options) {
    const opts = options || {};
    const store = getStore();
    let registry = null;
    let recoveredFromBackup = false;
    const current = store.getItem(STORAGE.registry);if (current) {
      try { registry = normalizeRegistry(JSON.parse(current)); }
      catch (error) {
        const backup = store.getItem(STORAGE.backup);
        if (backup) {
          try { registry = normalizeRegistry(JSON.parse(backup)); recoveredFromBackup = true; }
          catch (_) { throw new Error("मुख्य और backup दोनों Business DNA रिकॉर्ड पढ़े नहीं जा सके। मूल डेटा को overwrite नहीं किया गया।"); }
        } else {
          throw new Error("Business DNA registry खराब है और backup उपलब्ध नहीं है। मूल डेटा को overwrite नहीं किया गया।");
        }
      }
    } else {
      let legacy = null;
      try { legacy = readJSON(STORAGE.legacy); }
      catch (_) { throw new Error("पुराना Business DNA JSON पढ़ा नहीं जा सका; डेटा सुरक्षित रखने के लिए migration रोकी गई।"); }
      registry = legacy ? migrateLegacy(legacy) : emptyRegistry();
    }
    let storedVersion = null;
    if (current) {
      try { storedVersion = Number(JSON.parse(current).schemaVersion) || null; }
      catch (_) { storedVersion = null; }
    }
    if (opts.persist !== false && (current === null || recoveredFromBackup || storedVersion !== SCHEMA_VERSION)) {
      writeRegistry(registry);
    }
    return { registry:clone(registry), recoveredFromBackup };
  }

  function commit(registry) {
    registry.revision = (Number(registry.revision) || 0) + 1;
    registry.updatedAt = nowISO();
    const result = writeRegistry(registry);
    return { ...result, registry:clone(registry) };
  }

  function getActiveShop(registryArg) {
    const registry = registryArg || load().registry;
    const shop = registry.businesses.find(item => item.businessId === registry.activeBusinessId);
    return shop ? clone(shop) : null;
  }

  function listShops(registryArg) {
    const registry = registryArg || load().registry;
    return clone(registry.businesses);
  }

  function createShop(input) {
    const registry = load().registry;
    const raw = isObject(input) ? clone(input) : {};
    let ownerId = clean(registry.owner.ownerId || raw.ownerId);
    if (!ownerId) ownerId = secureId("owner_");
    raw.ownerId = ownerId;
    if (!registry.owner.ownerId) {
      registry.owner = {
        ownerId,
        name: clean(raw.owner || raw.ownerName) || "मालिक",
        phone: clean(raw.phone).replace(/\D/g, ""),
        email: clean(raw.email).toLowerCase(),
        createdAt: nowISO(), updatedAt: nowISO()
      };
    }
    const shop = makeShop(raw, ownerId);
    const validation = validateShop(shop);
    if (!validation.valid) return { ok:false, errors:validation.errors, warnings:validation.warnings };
    if (registry.businesses.some(item => item.businessId === shop.businessId)) {
      return { ok:false, errors:["यह Shop ID पहले से मौजूद है।"], warnings:[] };
    }
    registry.businesses.push(shop);
    registry.activeBusinessId = shop.businessId;
    const saved = commit(registry);
    return { ok:true, shop:clone(shop), warnings:validation.warnings, ...saved };
  }

  function updateShop(businessId, patch) {
    const registry = load().registry;
    const id = clean(businessId);
    const index = registry.businesses.findIndex(shop => shop.businessId === id);
    if (index < 0) return { ok:false, errors:["दुकान नहीं मिली।"], warnings:[] };
    const current = registry.businesses[index];
    const raw = isObject(patch) ? clone(patch) : {};
    const merged = {
      ...raw,
      businessId:current.businessId,
      cryptoNodeId:current.cryptoNodeId,
      ownerId:current.ownerId,
      createdAt:current.createdAt,
      profile:{ ...current.profile, ...(isObject(raw.profile) ? raw.profile : {}) },
      operations:{ ...current.operations, ...(isObject(raw.operations) ? raw.operations : {}) },
      contact:{ ...current.contact, ...(isObject(raw.contact) ? raw.contact : {}) },
      location:{ ...current.location, ...(isObject(raw.location) ? raw.location : {}) },
      branding:{ ...current.branding, ...(isObject(raw.branding) ? raw.branding : {}) },
      catalog:{ ...current.catalog, ...(isObject(raw.catalog) ? raw.catalog : {}) },
      modules:{ ...current.modules, ...(isObject(raw.modules) ? raw.modules : {}) },
      sync:{ ...current.sync, ...(isObject(raw.sync) ? raw.sync : {}) },
      compliance:{ ...current.compliance, ...(isObject(raw.compliance) ? raw.compliance : {}) },
      extensions:{ ...current.extensions, ...(isObject(raw.extensions) ? raw.extensions : {}) }
    };
    const flat = {
      businessId:current.businessId,
      revision:Number(current.revision || 1) + 1,
      businessName: raw.businessName !== undefined ? raw.businessName : merged.profile.name,
      sector: raw.sector !== undefined ? raw.sector : merged.profile.sectorId,
      businessType: raw.businessType !== undefined ? raw.businessType : merged.profile.businessType,
      specialization: raw.specialization !== undefined ? raw.specialization : merged.profile.specialization,
      tags: raw.tags !== undefined ? raw.tags : merged.profile.tags,
      businessModel: raw.businessModel !== undefined ? raw.businessModel : merged.operations.businessModel,
      businessScale: raw.businessScale !== undefined ? raw.businessScale : merged.operations.businessScale,
      taxProfile: raw.taxProfile !== undefined ? raw.taxProfile : merged.operations.taxProfile,
      phone: raw.phone !== undefined ? raw.phone : merged.contact.phone,
      email: raw.email !== undefined ? raw.email : merged.contact.email,
      address: raw.address !== undefined ? raw.address : merged.location,
      brandLogoStyle: raw.brandLogoStyle !== undefined ? raw.brandLogoStyle : merged.branding.logoStyle,
      modules:merged.modules,
      catalog:merged.catalog,
      branches:merged.branches,
      updatedAt:nowISO(),
      activeDatasetIds:merged.catalog.activeDatasetIds,
      customCatalogFields:merged.catalog.customFields,
      status:raw.status !== undefined ? raw.status : current.status,
      ownerId:current.ownerId
    };
    const updated = makeShop(flat, current.ownerId, merged);
    updated.businessId = current.businessId;
    updated.cryptoNodeId = current.cryptoNodeId;
    updated.createdAt = current.createdAt;
    const validation = validateShop(updated);
    if (!validation.valid) return { ok:false, errors:validation.errors, warnings:validation.warnings };
    registry.businesses[index] = updated;
    const saved = commit(registry);
    return { ok:true, shop:clone(updated), warnings:validation.warnings, ...saved };
  }

  function setActiveShop(businessId) {
    const registry = load().registry;
    const id = clean(businessId);
    if (!registry.businesses.some(shop => shop.businessId === id)) {
      return { ok:false, errors:["चुनी गई दुकान इस DNA में मौजूद नहीं है।"] };
    }
    registry.activeBusinessId = id;
    const saved = commit(registry);
    return { ok:true, shop:getActiveShop(registry), ...saved };
  }

  function deleteShop(businessId, confirmation) {
    if (confirmation !== "DELETE-SHOP") return { ok:false, errors:["दुकान हटाने के लिए स्पष्ट confirmation token जरूरी है।"] };
    const registry = load().registry;
    const id = clean(businessId);
    if (registry.businesses.length <= 1) return { ok:false, errors:["आखिरी दुकान को हटाया नहीं जा सकता।"] };
    const index = registry.businesses.findIndex(shop => shop.businessId === id);
    if (index < 0) return { ok:false, errors:["दुकान नहीं मिली।"] };
    registry.businesses.splice(index, 1);
    if (registry.activeBusinessId === id) registry.activeBusinessId = registry.businesses[0].businessId;
    const saved = commit(registry);
    return { ok:true, warning:"केवल Business DNA registry से दुकान हटाई गई है। POS/Inventory/Udhaar के पुराने records अपने-आप delete नहीं हुए।", ...saved };
  }

  function updateOwner(patch) {
    const registry = load().registry;
    const raw = isObject(patch) ? patch : {};
    const nextOwner = {
      ...registry.owner,
      name: raw.name !== undefined ? clean(raw.name) : registry.owner.name,
      phone: raw.phone !== undefined ? clean(raw.phone).replace(/\D/g, "") : registry.owner.phone,
      email: raw.email !== undefined ? clean(raw.email).toLowerCase() : registry.owner.email,
      updatedAt: nowISO()
    };
    if (nextOwner.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextOwner.email)) {
      return { ok:false, errors:["Owner email पता मान्य नहीं है।"] };
    }
    registry.owner = nextOwner;
    const saved = commit(registry);
    return { ok:true, owner:clone(registry.owner), ...saved };
  }

  function getLegacyView() {
    const registry = load().registry;
    const shop = getActiveShop(registry);
    return shop ? legacyProjection(shop, registry.owner) : null;
  }

  function getDataScope(branchId) {
    const registry = load().registry;
    const shop = registry.businesses.find(item => item.businessId === registry.activeBusinessId);
    if (!shop) return null;
    return {
      ownerId: shop.ownerId,
      businessId: shop.businessId,
      cryptoNodeId: shop.cryptoNodeId || shop.businessId,
      branchId: clean(branchId) || null
    };
  }

  function getSector(sectorId) {
    const sector = sectorById(sectorId);
    return sector ? clone(sector) : null;
  }

  function getCatalogProfile(sectorId) { return buildCatalogProfile(sectorId); }

  function listSectors() { return clone(SECTORS); }
  function listModules() { return clone(MODULE_DEFINITIONS); }
  function listDatasets(sectorId) {
    const id = clean(sectorId).toUpperCase();
    return clone(DATASET_REGISTRY.filter(item => !id || item.sectors.includes(id)));
  }

  function validateRegistry(registryArg) {
    const registry = registryArg || load().registry;
    const errors = [];
    const warnings = [];
    if (!isObject(registry)) errors.push("Registry object मान्य नहीं है।");
    if (registry.schemaVersion !== SCHEMA_VERSION) warnings.push("Registry schema version current version से अलग है।");
    if (!Array.isArray(registry.businesses)) errors.push("Businesses सूची मौजूद नहीं है।");
    const ids = new Set();
    (registry.businesses || []).forEach(shop => {
      if (registry.owner && registry.owner.ownerId && shop.ownerId !== registry.owner.ownerId) errors.push("Shop ownerId master ownerId से मेल नहीं खाता: " + shop.businessId);
      if (ids.has(shop.businessId)) errors.push("Duplicate Shop ID: " + shop.businessId);
      ids.add(shop.businessId);
      const result = validateShop(shop);
      errors.push(...result.errors.map(message => (shop.profile && shop.profile.name || shop.businessId) + ": " + message));
      warnings.push(...result.warnings.map(message => (shop.profile && shop.profile.name || shop.businessId) + ": " + message));
    });
    if (registry.businesses.length && !ids.has(registry.activeBusinessId)) errors.push("Active Shop ID registry में मौजूद नहीं है।");
    return { valid:errors.length === 0, errors, warnings };
  }

  function exportBackup() {
    const registry = load().registry;
    return JSON.stringify({ format:"NEXUS-BUSINESS-DNA-BACKUP", schemaVersion:SCHEMA_VERSION, exportedAt:nowISO(), registry }, null, 2);
  }

  function restoreBackup(jsonText, confirmation) {
    if (confirmation !== "RESTORE-BUSINESS-DNA") return { ok:false, errors:["Restore करने के लिए confirmation token जरूरी है।"] };
    let parsed;
    try { parsed = JSON.parse(String(jsonText)); }
    catch (_) { return { ok:false, errors:["Backup JSON पढ़ा नहीं जा सका।"] }; }
    if (!isObject(parsed) || parsed.format !== "NEXUS-BUSINESS-DNA-BACKUP" || !isObject(parsed.registry)) {
      return { ok:false, errors:["यह NEXUS Business DNA backup नहीं है।"] };
    }
    let registry;
    try { registry = normalizeRegistry(parsed.registry); }
    catch (error) { return { ok:false, errors:[error.message] }; }
    const validation = validateRegistry(registry);
    if (!validation.valid) return { ok:false, errors:validation.errors, warnings:validation.warnings };
    const saved = commit(registry);
    return { ok:true, warnings:validation.warnings, ...saved };
  }

  function setStorageAdapter(adapter) {
    if (!adapter || typeof adapter.getItem !== "function" || typeof adapter.setItem !== "function") {
      throw new Error("Storage adapter में getItem और setItem methods जरूरी हैं।");
    }
    storageAdapter = adapter;
  }

  return Object.freeze({
    version:SCHEMA_VERSION,
    appId:APP_ID,
    storageKeys:STORAGE,
    businessModels:BUSINESS_MODELS,
    businessScales:BUSINESS_SCALES,
    taxProfiles:TAX_PROFILES,
    load,
    getActiveShop,
    listShops,
    createShop,
    updateShop,
    setActiveShop,
    deleteShop,
    updateOwner,
    getLegacyView,
    getDataScope,
    getSector,
    getCatalogProfile,
    listSectors,
    listModules,
    listDatasets,
    validateShop,
    validateRegistry,
    exportBackup,
    restoreBackup,
    setStorageAdapter
  });
});