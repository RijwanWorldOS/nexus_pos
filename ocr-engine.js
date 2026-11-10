/*
=========================================================
 NEXUS POS — UNIVERSAL OCR + BARCODE + PAYMENT QR ENGINE
 Version: 2.0
 Languages: Hindi + English
 Modes: OCR, Product Barcode, QR, UPI Payment QR
=========================================================

IMPORTANT:
1. This engine only reads data.
2. It never makes a payment.
3. It never saves business or stock data automatically.
4. User review and approval are required before saving.
*/

(function (window) {
"use strict";

const NexusScan = {};

const CONFIG = {
    version: "2.0.0",

    maxFileSize: 15 * 1024 * 1024,
    maxImageSide: 2600,

    ocrLanguages: "eng+hin",

    tesseractURL:
      "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js",

    tessdataURL:
      "https://tessdata.projectnaptha.com/4.0.0",

    barcodeLibrary:
      "zxing-library.min.js",

    barcodeBrowser:
      "zxing-browser.min.js",

    barcodeCDN:
      "https://unpkg.com/@zxing/library@0.21.3/umd/index.min.js",

    browserCDN:
      "https://unpkg.com/@zxing/browser@0.1.5/umd/zxing-browser.min.js"
};

let ocrWorker = null;
let ocrWorkerPromise = null;
let ocrWorkerInitPromise = null;
let ocrRecognitionQueue = Promise.resolve();

let barcodeReader = null;
let barcodeLibraryPromise = null;

let activeCameraControls = null;
const REVIEW_STORAGE_KEY = "nexus_universal_scan_review_v1";

/* =====================================================
   COMMON UTILITIES
===================================================== */

function sendProgress(callback, status, progress) {
    if (typeof callback === "function") {
        callback({
            status: status,
            progress: Number(progress || 0)
        });
    }
}

function cleanText(value) {
    return String(value || "")
        .replace(/\r/g, "\n")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function validateImage(file) {
    if (!(file instanceof Blob)) {
        throw new Error("कृपया फोटो चुनें।");
    }

    if (!/^image\//i.test(file.type)) {
        throw new Error("चुनी गई फाइल इमेज नहीं है।");
    }

    if (file.size <= 0) {
        throw new Error("फोटो खाली है।");
    }

    if (file.size > CONFIG.maxFileSize) {
        throw new Error("फोटो 15 MB से छोटी होनी चाहिए।");
    }
}

function loadScript(url) {
    return new Promise(function (resolve, reject) {

        const existing = Array.from(
            document.scripts
        ).find(function (script) {
            return script.src === url;
        });

        if (existing) {
            if (existing.dataset.loaded === "true") {
                resolve();
                return;
            }

            existing.addEventListener("load", resolve, {
                once: true
            });

            existing.addEventListener("error", reject, {
                once: true
            });

            return;
        }

        const script = document.createElement("script");

        script.src = url;
        script.async = true;

        script.onload = function () {
            script.dataset.loaded = "true";
            resolve();
        };

        script.onerror = function () {
            reject(new Error("लाइब्रेरी लोड नहीं हुई: " + url));
        };

        document.head.appendChild(script);
    });
}


/* =====================================================
   OCR ENGINE — TESSERACT
===================================================== */

async function loadOCRLibrary() {

    if (window.Tesseract) {
        return window.Tesseract;
    }

    if (ocrWorkerPromise) {
        return ocrWorkerPromise;
    }

    ocrWorkerPromise = loadScript(CONFIG.tesseractURL)
        .then(function () {

            if (!window.Tesseract) {
                throw new Error(
                    "Tesseract OCR उपलब्ध नहीं है।"
                );
            }

            return window.Tesseract;
        })
        .catch(function (error) {
            ocrWorkerPromise = null;
            throw error;
        });

    return ocrWorkerPromise;
}


async function getOCRWorker(onProgress) {

    if (ocrWorker) {
        return ocrWorker;
    }

    if (ocrWorkerInitPromise) {
        return ocrWorkerInitPromise;
    }

    ocrWorkerInitPromise = (async function () {

        const Tesseract = await loadOCRLibrary();

        const worker = await Tesseract.createWorker(
            CONFIG.ocrLanguages,
            1,
            {
                langPath: CONFIG.tessdataURL,

                logger: function (event) {
                    if (event && event.status) {
                        sendProgress(
                            onProgress,
                            "OCR: " + event.status,
                            event.progress || 0
                        );
                    }
                }
            }
        );

        ocrWorker = worker;
        return worker;

    })();

    try {
        return await ocrWorkerInitPromise;
    } catch (error) {
        ocrWorkerInitPromise = null;
        throw error;
    }
}

    


/* =====================================================
   IMAGE PREPARATION
===================================================== */

async function prepareImage(file, enhanceForOCR) {

    validateImage(file);

    const objectURL = URL.createObjectURL(file);

    try {

        const image = new Image();

        image.src = objectURL;

        await new Promise(function (resolve, reject) {

            image.onload = resolve;

            image.onerror = function () {
                reject(new Error("फोटो खोली नहीं जा सकी।"));
            };
        });

        const scale = Math.min(
            1,
            CONFIG.maxImageSide /
            Math.max(image.naturalWidth, image.naturalHeight)
        );

        const canvas = document.createElement("canvas");

        canvas.width = Math.max(
            1,
            Math.round(image.naturalWidth * scale)
        );

        canvas.height = Math.max(
            1,
            Math.round(image.naturalHeight * scale)
        );

        const context = canvas.getContext(
            "2d",
            { willReadFrequently: true }
        );

        if (!context) {
            throw new Error("Image processing उपलब्ध नहीं है।");
        }

        context.drawImage(
            image,
            0,
            0,
            canvas.width,
            canvas.height
        );

 if (enhanceForOCR !== false) {

            const pixels = context.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const data = pixels.data;

            for (let i = 0; i < data.length; i += 4) {

                const gray =
                    data[i] * 0.299 +
                    data[i + 1] * 0.587 +
                    data[i + 2] * 0.114;

                const enhanced = Math.max(
                    0,
                    Math.min(
                        255,
                        (gray - 128) * 1.15 + 128
                    )
                );

                data[i] = enhanced;
                data[i + 1] = enhanced;
                data[i + 2] = enhanced;
            }

            context.putImageData(pixels, 0, 0);
        }       

        return canvas;

    } finally {
        URL.revokeObjectURL(objectURL);
    }
}


/* =====================================================
   BARCODE FORMAT SUPPORT
===================================================== */

function getSupportedBarcodeFormats() {

    const ZXing = window.ZXing;

    if (!ZXing || !ZXing.BarcodeFormat) {
        throw new Error("Barcode format library उपलब्ध नहीं है।");
    }

    const names = [
        "QR_CODE",
        "AZTEC",
        "DATA_MATRIX",
        "PDF_417",
        "MAXICODE",

        "EAN_8",
        "EAN_13",
        "UPC_A",
        "UPC_E",

        "CODE_39",
        "CODE_93",
        "CODE_128",

        "ITF",
        "CODABAR",

        "RSS_14",
        "RSS_EXPANDED"
    ];

    return names
        .filter(function (name) {
            return ZXing.BarcodeFormat[name] !== undefined;
        })
        .map(function (name) {
            return ZXing.BarcodeFormat[name];
        });
}


/* =====================================================
   LOAD BARCODE LIBRARIES
===================================================== */

async function loadBarcodeLibrary() {

    if (
        window.ZXing &&
        window.ZXingBrowser
    ) {
        return {
            core: window.ZXing,
            browser: window.ZXingBrowser
        };
    }

    if (barcodeLibraryPromise) {
        return barcodeLibraryPromise;
    }

    barcodeLibraryPromise = (async function () {

        if (!window.ZXing) {

            try {
                await loadScript(CONFIG.barcodeLibrary);
            } catch (localError) {
                await loadScript(CONFIG.barcodeCDN);
            }
        }

        if (!window.ZXingBrowser) {

            try {
                await loadScript(CONFIG.barcodeBrowser);
            } catch (localError) {
                await loadScript(CONFIG.browserCDN);
            }
        }

        if (!window.ZXing || !window.ZXingBrowser) {
            throw new Error(
                "Barcode scanner library उपलब्ध नहीं है।"
            );
        }

        return {
            core: window.ZXing,
            browser: window.ZXingBrowser
        };

    })().catch(function (error) {

        barcodeLibraryPromise = null;
        throw error;

    });

    return barcodeLibraryPromise;
}


/* =====================================================
   BARCODE READER INITIALIZATION
===================================================== */

async function getBarcodeReader() {

    if (barcodeReader) {
        return barcodeReader;
    }

    const libraries = await loadBarcodeLibrary();

    const ZXing = libraries.core;
    const Browser = libraries.browser;

    const hints = new Map();

    hints.set(
        ZXing.DecodeHintType.POSSIBLE_FORMATS,
        getSupportedBarcodeFormats()
    );

    hints.set(
        ZXing.DecodeHintType.TRY_HARDER,
        true
    );

    barcodeReader = new Browser.BrowserMultiFormatReader(
        hints,
        350
    );

    return barcodeReader
}
/* =====================================================
   BARCODE RESULT NORMALIZER
===================================================== */

function normalizeBarcodeResult(result) {

    if (!result) {
        throw new Error("कोई Barcode परिणाम नहीं मिला।");
    }

    const textValue = String(
        result.getText ? result.getText() : ""
    ).trim();

    const format = result.getBarcodeFormat
        ? result.getBarcodeFormat().toString()
        : "UNKNOWN";

    if (!textValue) {
        throw new Error("Barcode खाली है।");
    }

    const isQR = /QR_CODE/i.test(format);

    return {
        type: isQR ? "QR" : "BARCODE",
        format: format,
        value: textValue,
        payment: isQR
            ? parsePaymentQR(textValue)
            : null,
        createdAt: new Date().toISOString()
    };
}


/* =====================================================
   UPI / PAYMENT QR PARSER
===================================================== */

function parsePaymentQR(rawValue) {

    const value = String(rawValue || "").trim();

    const result = {
        isPaymentQR: false,
        paymentType: "UNKNOWN",
        upiId: "",
        payeeName: "",
        amount: "",
        currency: "",
        transactionNote: "",
        merchantCode: "",
        rawValue: value
    };

    // UPI deep-link format
    if (/^upi:\/\//i.test(value)) {

        try {

            const url = new URL(value);

            const params = url.searchParams;

            result.upiId =
                params.get("pa") || "";

            result.payeeName =
                params.get("pn") || "";

            result.amount =
                params.get("am") || "";

            result.currency =
                params.get("cu") || "";

            result.transactionNote =
                params.get("tn") || "";

            result.merchantCode =
                params.get("mc") || "";

            result.paymentType = "UPI";

            result.isPaymentQR = Boolean(
                result.upiId
            );

            // Validate UPI amount if supplied.
            if (
                result.amount &&
                !/^\d+(\.\d{1,2})?$/.test(result.amount)
            ) {
                result.amount = "";
            }

        } catch (error) {

            result.isPaymentQR = false;
            result.paymentType = "INVALID_UPI";
        }

        return result;
    }

    // Other payment URLs are identified but not treated as UPI.
    if (/^https?:\/\//i.test(value)) {

        result.paymentType = "PAYMENT_URL";

        try {

            const url = new URL(value);

            result.isPaymentQR =
                /pay|payment|checkout|upi/i.test(
                    url.hostname + url.pathname
                );

        } catch (error) {
            result.isPaymentQR = false;
        }
    }

    return result;
}


/* =====================================================
   IMAGE BARCODE / QR SCANNER
===================================================== */

async function scanBarcodeImage(file, options) {

    options = options || {};

    validateImage(file);

    sendProgress(
        options.onProgress,
        "Barcode scanner तैयार हो रहा है",
        10
    );

    const reader = await getBarcodeReader();

    const canvas = await prepareImage(file, false);

    sendProgress(
        options.onProgress,
        "Barcode और QR खोज रहे हैं",
        50
    );

    let result;

    try {

        result = reader.decodeFromCanvas(canvas);

    } catch (error) {

        throw new Error(
            "फोटो में पढ़ने योग्य Barcode या QR नहीं मिला।"
        );
    }

    sendProgress(
        options.onProgress,
        "Barcode पढ़ लिया गया",
        100
    );

    return normalizeBarcodeResult(result);
}


/* =====================================================
   LIVE CAMERA BARCODE / QR SCANNER
===================================================== */

async function startCameraScanner(videoElement, callbacks) {

    callbacks = callbacks || {};

    if (!videoElement) {
        throw new Error("Video element नहीं मिला।");
    }

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        throw new Error(
            "इस ब्राउज़र में कैमरा सुविधा उपलब्ध नहीं है। HTTPS पर खोलें।"
        );
    }

    stopCameraScanner();

    const reader = await getBarcodeReader();

    const controls = await reader.decodeFromVideoDevice(
        undefined,
        videoElement,
        function (result, error) {

            if (result) {

                const normalized =
                    normalizeBarcodeResult(result);

                stopCameraScanner();

                if (typeof callbacks.onResult === "function") {
                    callbacks.onResult(normalized);
                }

                return;
            }

            // NotFoundException सामान्य है:
            // इसका मतलब कैमरे को अभी कोई कोड नहीं मिला।
            if (
                error &&
                typeof callbacks.onError === "function" &&
                !/NotFoundException/i.test(
                    error.name || error.message || ""
                )
            ) {
                callbacks.onError(error);
            }
        }
    );

    activeCameraControls = controls;

    return {
        stop: stopCameraScanner
    };
}


/* =====================================================
   STOP CAMERA AND RELEASE RESOURCES
===================================================== */

function stopCameraScanner() {

    if (activeCameraControls) {

        try {
            activeCameraControls.stop();
        } catch (error) {
            // Camera may already be stopped.
        }

        activeCameraControls = null;
    }
}


/* =====================================================
   OCR TEXT EXTRACTION
===================================================== */

function firstMatch(text, patterns) {

    for (const pattern of patterns) {

        const match = text.match(pattern);

        if (match && match[1]) {
            return cleanText(match[1]);
        }
    }

    return "";
}


/* =====================================================
   DOCUMENT FIELD EXTRACTION
===================================================== */

function extractDocumentFields(rawText, documentType) {

    const text = cleanText(rawText);

    const phones = text.match(
        /(?:\+91[\s-]?)?[6-9]\d{9}/g
    ) || [];

    const email = firstMatch(text, [
        /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i
    ]);

    const gstin = firstMatch(text, [
        /\b([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z])\b/i
    ]);

    const pinCode = firstMatch(text, [
        /\b([1-9][0-9]{5})\b/
    ]);

    const invoiceNumber = firstMatch(text, [
        /(?:invoice|bill|receipt)\s*(?:no|number|#)?\s*[:#-]?\s*([A-Z0-9/-]{3,})/i
    ]);

    const date = firstMatch(text, [
        /\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b/,
        /\b(\d{4}-\d{2}-\d{2})\b/
    ]);

    const totalAmount = firstMatch(text, [
        /(?:grand total|net amount|total amount|total|कुल|योग)\s*[:₹Rs. ]*([0-9,]+(?:\.[0-9]{1,2})?)/i
    ]);

    const mrp = firstMatch(text, [
        /(?:MRP|मूल्य|maximum retail price)\s*[:₹Rs. ]*([0-9,]+(?:\.[0-9]{1,2})?)/i
    ]);

    const barcodeNumbers = text.match(
        /\b[0-9]{8,14}\b/g
    ) || [];

   

   const normalizedDocumentType = String(
    documentType || "unknown"
).toLowerCase();

const firstUsefulLine = text
    .split("\n")
    .map(function (line) {
        return cleanText(line);
    })
    .filter(function (line) {
        if (line.length < 3 || line.length > 80) {
            return false;
        }

        if (/@|https?:\/\/|www\./i.test(line)) {
            return false;
        }

        if (/(invoice|tax invoice|bill no|receipt no|gstin|phone|mobile|email|address|date|total|subtotal|quantity|qty|mrp|price)/i.test(line)) {
            return false;
        }

        if (/^[\d\s.,:/\-₹]+$/.test(line)) {
            return false;
        }

        const digits = (line.match(/\d/g) || []).length;
        if (digits > line.length * 0.4) {
            return false;
        }

        return true;
    })[0] || "";

    return {

        documentType: documentType || "unknown",

        businessName:
         /visiting-card\|signboard/.test(normalizedDocumentType)  
                ? firstUsefulLine
                : "",

        supplierName:
          /purchase-bill\|supplier-receipt/.test(normalizedDocumentType)  
                ? firstUsefulLine
                : "",

        productName:
            normalizedDocumentType === "product-package"

                ? firstUsefulLine
                : "",

        phone: phones.length
            ? phones[0].replace(/\D/g, "").slice(-10)
            : "",

        email: email,

        gstin: gstin,

        pinCode: pinCode,

        invoiceNumber: invoiceNumber,

        date: date,

        totalAmount: totalAmount.replace(/,/g, ""),

        mrp: mrp.replace(/,/g, ""),

        barcodeCandidates: barcodeNumbers,

        rawText: text
    };
}


/* =====================================================
   OCR SCAN
===================================================== */

async function scanDocument(file, options) {

    options = options || {};

    const documentType =
        options.documentType || "unknown";

    const canvas = await prepareImage(file);

    sendProgress(
        options.onProgress,
        "Hindi और English OCR चल रहा है",
        20
    );

    const worker = await getOCRWorker(
        options.onProgress
    );
const recognitionTask = ocrRecognitionQueue.then(function () {
    return worker.recognize(canvas);
});

ocrRecognitionQueue = recognitionTask.then(
    function () {},
    function () {}
);

const result = await recognitionTask;
    
    const rawText = cleanText(
        result && result.data
            ? result.data.text
            : ""
    );

    if (!rawText) {

        throw new Error(
            "फोटो से कोई टेक्स्ट नहीं पढ़ा जा सका।"
        );
    }

    const confidence =
        result.data &&
        Number.isFinite(result.data.confidence)
            ? Math.round(result.data.confidence)
            : null;

    sendProgress(
        options.onProgress,
        "जानकारी तैयार है",
        100
    );

    return {

        engine: "NexusUniversalScan",

        version: CONFIG.version,

        type: "OCR",

        documentType: documentType,

        rawText: rawText,

        confidence: confidence,

        fields: extractDocumentFields(
            rawText,
            documentType
        ),

        reviewRequired: true,

        createdAt: new Date().toISOString()
    };
}
 /*
 =====================================================
   UNIFIED UNIVERSAL SCAN
===================================================== */

async function scan(file, options) {

    options = options || {};

    const mode = options.mode || "auto";

    if (mode === "ocr") {

        return await scanDocument(file, options);
    }

    if (mode === "barcode") {

        return await scanBarcodeImage(file, options);
    }

    if (mode === "auto") {

        // First attempt: barcode and QR.
        try {

            return await scanBarcodeImage(file, options);

        } catch (barcodeError) {

            // If no code is found, try OCR.
            return await scanDocument(file, options);
        }
    }

    throw new Error(
        "अमान्य Scan Mode: " + mode
    );
}


/* =====================================================
   CAMERA SCANNER API
===================================================== */

async function startScanner(videoElement, callbacks) {

    return await startCameraScanner(
        videoElement,
        callbacks
    );
}


/* =====================================================
   PAYMENT QR SAFETY CHECK
===================================================== */

function validatePaymentQR(rawValue) {

    const payment = parsePaymentQR(rawValue);

    if (!payment.isPaymentQR) {

        return {
            valid: false,
            message: "यह मान्य UPI Payment QR नहीं दिख रहा है।",
            data: payment
        };
    }

    if (!payment.upiId) {

        return {
            valid: false,
            message: "UPI ID नहीं मिली।",
            data: payment
        };
    }

    return {
        valid: true,
        message: "UPI जानकारी पढ़ ली गई है। भुगतान अभी नहीं हुआ है।",
        data: payment
    };
}


/* =====================================================
   MANUAL REVIEW QUEUE
===================================================== */
function readReviewQueue() {
    try {
        const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
        const drafts = JSON.parse(raw || "[]");

        if (!Array.isArray(drafts)) {
            throw new Error("Review Queue का डेटा खराब है।");
        }

        return drafts;

    } catch (error) {
        throw new Error(
            "Review Queue पढ़ने में समस्या: " + error.message
        );
    }
}


function saveReviewDraft(scanResult) {

    if (!scanResult || !scanResult.reviewRequired) {
        throw new Error("अमान्य Scan Result।");
    }

    const existing = readReviewQueue();

    const draft = {
        id: "SCAN-" + Date.now() + "-" +
            Math.random().toString(36).slice(2, 8),

        status: "pending_review",
        result: scanResult,
        createdAt: new Date().toISOString()
    };

    existing.push(draft);

    try {
        localStorage.setItem(
            REVIEW_STORAGE_KEY,
            JSON.stringify(existing)
        );
    } catch (error) {
        throw new Error(
            "Review Queue सेव नहीं हुई: " + error.message
        );
    }

    return draft;
}


function getReviewDrafts() {
    return readReviewQueue();
}


function deleteReviewDraft(draftId) {

    const drafts = readReviewQueue();

    const updated = drafts.filter(function (draft) {
        return draft.id !== draftId;
    });

    try {
        localStorage.setItem(
            REVIEW_STORAGE_KEY,
            JSON.stringify(updated)
        );
    } catch (error) {
        throw new Error(
            "Review Queue अपडेट नहीं हुई: " + error.message
        );
    }

    return updated.length;
}


/* =====================================================
   ENGINE CLEANUP
===================================================== */

async function terminate() {

    stopCameraScanner();

    if (ocrWorkerInitPromise) {
        try {
            await ocrWorkerInitPromise;
        } catch (error) {
            // Worker initialization failed.
        }
    }

    await ocrRecognitionQueue;

    if (ocrWorker) {
        await ocrWorker.terminate();
        ocrWorker = null;
    }

    ocrWorkerPromise = null;
    ocrWorkerInitPromise = null;
    ocrRecognitionQueue = Promise.resolve();

    barcodeReader = null;
    barcodeLibraryPromise = null;

    return true;
}
    


/* =====================================================
   PUBLIC API
===================================================== */

NexusScan.version = CONFIG.version;

NexusScan.scan = scan;

NexusScan.scanDocument = scanDocument;

NexusScan.scanBarcodeImage = scanBarcodeImage;

NexusScan.startScanner = startScanner;

NexusScan.stopScanner = stopCameraScanner;

NexusScan.parsePaymentQR = parsePaymentQR;

NexusScan.validatePaymentQR = validatePaymentQR;

NexusScan.extractDocumentFields = extractDocumentFields;

NexusScan.saveReviewDraft = saveReviewDraft;

NexusScan.getReviewDrafts = getReviewDrafts;

NexusScan.deleteReviewDraft = deleteReviewDraft;

NexusScan.terminate = terminate;

NexusScan.config = Object.freeze({

    languages: CONFIG.ocrLanguages,

    maxFileSize: CONFIG.maxFileSize,

    maxImageSide: CONFIG.maxImageSide,

    version: CONFIG.version

});


/* =====================================================
   GLOBAL EXPORT
===================================================== */

window.NexusUniversalScan = Object.freeze(
    NexusScan
);

console.log(
    "NEXUS Universal Scan Engine loaded:",
    CONFIG.version
);

})(window);
