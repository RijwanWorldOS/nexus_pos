/*
 * POS CATALOG ENGINE
 * Version: 1.0.0
 * Project: NEXUS POS
 *
 * काम:
 * 1. स्थानीय CSV फाइलों से प्रोडक्ट डेटा पढ़ना।
 * 2. अलग-अलग CSV के कॉलम को एक समान बनाना।
 * 3. डुप्लिकेट प्रोडक्ट हटाना।
 * 4. नाम, ब्रांड और असली बारकोड से सर्च करना।
 * 5. दुकान का बिक्री रेट अपने-आप तय नहीं करना।
 *
 * कोई बाहरी API या थर्ड-पार्टी लाइब्रेरी नहीं।
 */

(function (global) {
  "use strict";

  const VERSION = "1.0.0";

  // केवल वे CSV जिनमें प्रोडक्ट डेटा होने की संभावना है।
  // बिक्री, मौसम, स्वास्थ्य और analytics वाली CSV यहाँ शामिल नहीं हैं।
  const DATA_FILES = [
    "hardwareStore.csv",
    "GroceryDB_foods.csv",
    "styles.csv"
  ];

  const CACHE_KEY = "nexus_pos_catalog_cache_v1";

  let catalog = [];
  let barcodeIndex = new Map();
  let loadingPromise = null;
  let lastLoadReport = [];

  function clean(value) {
    return String(value == null ? "" : value)
      .replace(/^\uFEFF/, "")
      .trim();
  }

  function normalizeHeader(value) {
    return clean(value)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  }

  // CSV parser: quoted commas, escaped quotes और नई लाइनों को संभालता है।
  function parseCSV(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const next = text[i + 1];

      if (quoted) {
        if (ch === '"' && next === '"') {
          cell += '"';
          i++;
        } else if (ch === '"') {
          quoted = false;
        } else {
          cell += ch;
        }
        continue;
      }

      if (ch === '"' && cell.length === 0) {
        quoted = true;
      } else if (ch === ",") {
        row.push(cell);
        cell = "";
      } else if (ch === "\n") {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      } else if (ch !== "\r") {
        cell += ch;
      }
    }

    row.push(cell);

    if (row.some(function (v) {
      return clean(v) !== "";
    })) {
      rows.push(row);
    }

    if (!rows.length) return [];

    const headers = rows[0].map(normalizeHeader);

    return rows.slice(1).map(function (values) {
      const record = {};

      headers.forEach(function (header, index) {
        if (header) {
          record[header] = clean(values[index]);
        }
      });

      return record;
    });
  }

  function getValue(record, aliases) {
    for (const alias of aliases) {
      const key = normalizeHeader(alias);

      if (
        Object.prototype.hasOwnProperty.call(record, key) &&
        clean(record[key]) !== ""
      ) {
        return clean(record[key]);
      }
    }

    return "";
  }

  function normalizeProduct(record, source) {
    // बिक्री के लेनदेन को गलती से प्रोडक्ट मास्टर न मानें।
    const transactionFields = [
      "idventa",
      "idcliente",
      "fechahora",
      "totalventa",
      "mediopago",
      "cantidadvendida"
    ];

    if (transactionFields.some(function (key) {
      return Object.prototype.hasOwnProperty.call(record, key);
    })) {
      return null;
    }

    const name = getValue(record, [
      "product_name",
      "PRODUCT_NAME",
      "product",
      "name",
      "productname",
      "item_name",
      "food_name",
      "description"
    ]);

    if (!name || name.length < 2) return null;

    const brand = getValue(record, [
      "brand",
      "brand_name",
      "manufacturer",
      "product_brand"
    ]);

    const category = getValue(record, [
      "category",
      "category_name",
      "CATEGORY_NAME",
      "product_category",
      "department",
      "type"
    ]);

    const barcode = getValue(record, [
      "barcode",
      "bar_code",
      "ean",
      "ean13",
      "upc",
      "gtin",
      "gtin13",
      "gtin14"
    ]);

    const packSize = getValue(record, [
      "pack_size",
      "package_size",
      "size",
      "weight",
      "net_weight",
      "volume"
    ]);

    const unit = getValue(record, [
      "unit",
      "uom",
      "measurement_unit"
    ]);

    const productId = getValue(record, [
      "product_id",
      "PRODUCT_ID",
      "id",
      "sku",
      "item_id"
    ]);

    // Product ID को कभी असली बारकोड नहीं मानेंगे।
    const safeBarcode = /^[0-9]{8,14}$/.test(barcode)
      ? barcode
      : "";

    return {
      id: productId || "",
      name: name,
      brand: brand,
      category: category || "अन्य",
      packSize: packSize,
      unit: unit || "",
      barcode: safeBarcode,
      source: source,

      // CSV का मूल्य दुकान का बिक्री रेट नहीं है।
      shopPrice: null
    };
  }

  function makeProductKey(product) {
    if (product.barcode) {
      return "barcode:" + product.barcode;
    }

    return [
      product.name,
      product.brand,
      product.packSize,
      product.category
    ]
      .map(function (value) {
        return clean(value).toLowerCase();
      })
      .join("|");
  }

  function buildCatalog(records, source) {
    const output = [];

    records.forEach(function (record) {
      const product = normalizeProduct(record, source);

      if (product) output.push(product);
    });

    return output;
  }

  function mergeCatalog(products) {
    const merged = new Map();

    products.forEach(function (product) {
      const key = makeProductKey(product);
      const existing = merged.get(key);

      if (!existing) {
        merged.set(key, product);
        return;
      }

      // खाली जानकारी को दूसरे स्रोत की उपलब्ध जानकारी से भरें।
      [
        "id",
        "brand",
        "category",
        "packSize",
        "unit",
        "barcode"
      ].forEach(function (field) {
        if (!existing[field] && product[field]) {
          existing[field] = product[field];
        }
      });

      existing.source = existing.source + "," + product.source;
    });

    return Array.from(merged.values());
  }

  async function fetchCSV(filename) {
    const response = await fetch(
      "./" + encodeURIComponent(filename),
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(
        filename + " लोड नहीं हुई: HTTP " + response.status
      );
    }

    return await response.text();
  }

  function saveCache(products) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          version: VERSION,
          savedAt: new Date().toISOString(),
          products: products
        })
      );
    } catch (error) {
      console.warn("POS catalog cache save नहीं हुआ:", error);
    }
  }

  function loadCache() {
    try {
      const saved = localStorage.getItem(CACHE_KEY);
      if (!saved) return [];

      const parsed = JSON.parse(saved);

      if (
        !parsed ||
        parsed.version !== VERSION ||
        !Array.isArray(parsed.products)
      ) {
        return [];
      }

      return parsed.products;
    } catch (error) {
      console.warn("POS catalog cache पढ़ा नहीं जा सका:", error);
      return [];
    }
  }

  function rebuildBarcodeIndex() {
    barcodeIndex = new Map();

    catalog.forEach(function (product) {
      if (product.barcode && !barcodeIndex.has(product.barcode)) {
        barcodeIndex.set(product.barcode, product);
      }
    });
  }

  async function load(options) {
    options = options || {};

    if (loadingPromise && !options.force) {
      return loadingPromise;
    }

    loadingPromise = (async function () {
      const allProducts = [];
      const report = [];

      for (const filename of DATA_FILES) {
        try {
          const csvText = await fetchCSV(filename);

          if (!clean(csvText)) {
            report.push({
              file: filename,
              status: "empty",
              count: 0
            });
            continue;
          }

          const records = parseCSV(csvText);
          const products = buildCatalog(records, filename);

          allProducts.push.apply(allProducts, products);

          report.push({
            file: filename,
            status: "loaded",
            rows: records.length,
            count: products.length
          });
        } catch (error) {
          report.push({
            file: filename,
            status: "unavailable",
            count: 0,
            message: error.message
          });
        }
      }

      let result = mergeCatalog(allProducts);

      // कोई CSV उपलब्ध न हो तो पिछली सेव की हुई सूची इस्तेमाल करें।
      if (result.length === 0) {
        result = loadCache();
      } else {
        saveCache(result);
      }

      catalog = result;
      lastLoadReport = report;
      rebuildBarcodeIndex();

      return {
        success: true,
        count: catalog.length,
        report: lastLoadReport
      };
    })();

    try {
      return await loadingPromise;
    } finally {
      loadingPromise = null;
    }
  }

  function search(query, limit) {
    const term = clean(query).toLocaleLowerCase();

    if (term.length < 1) return [];

    const maxResults = Number.isFinite(Number(limit))
      ? Math.max(1, Number(limit))
      : 30;

    const results = catalog
      .map(function (product) {
        const name = product.name.toLocaleLowerCase();
        const brand = product.brand.toLocaleLowerCase();
        const category = product.category.toLocaleLowerCase();
        const barcode = product.barcode;

        let score = 0;

        if (name === term) score = 100;
        else if (barcode && barcode === term) score = 100;
        else if (name.startsWith(term)) score = 80;
        else if (name.includes(term)) score = 60;
        else if (brand.includes(term)) score = 45;
        else if (category.includes(term)) score = 25;

        return { product: product, score: score };
      })
      .filter(function (item) {
        return item.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, maxResults)
      .map(function (item) {
        return Object.assign({}, item.product);
      });

    return results;
  }

  function findByBarcode(value) {
    const barcode = clean(value).replace(/\s/g, "");

    if (!barcode) return null;

    return barcodeIndex.get(barcode) || null;
  }

  function getAll() {
    return catalog.map(function (product) {
      return Object.assign({}, product);
    });
  }

  function getReport() {
    return lastLoadReport.map(function (item) {
      return Object.assign({}, item);
    });
  }

  function getStats() {
    return {
      version: VERSION,
      totalProducts: catalog.length,
      barcodeProducts: barcodeIndex.size,
      sources: DATA_FILES.slice()
    };
  }

  global.POSCatalogEngine = Object.freeze({
    version: VERSION,
    load: load,
    search: search,
    findByBarcode: findByBarcode,
    getAll: getAll,
    getReport: getReport,
    getStats: getStats
  });

})(window);