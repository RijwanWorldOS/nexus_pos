/* =====================================================
   NEXUS RICE DATABASE
   Requires: nexus-food-master-database.js
   ===================================================== */

(function (global) {
"use strict";

const DB = global.NexusFoodMasterDatabase;

if (!DB) {
    throw new Error("Nexus Core Database not loaded");
}

const C = "rice";
const products = [];

function add(id, hi, en, sub, variant, aliases, unit) {
    products.push({
        id: id,
        name_hi: hi,
        name_en: en,
        subcategory: sub,
        variant: variant || "",
        aliases: aliases || [],
        base_unit: unit || "kg",
        pack_options: [
            "500 g", "1 kg", "5 kg", "10 kg", "25 kg", "50 kg"
        ],
        sector_tags: [
            "kirana", "retail", "wholesale", "rice-shop",
            "hotel", "restaurant"
        ]
    });
}

/* BASMATI RICE */

add("rice-basmati", "बासमती चावल", "Basmati Rice",
"basmati", "सामान्य", ["basmati chawal", "बासमती"]);

add("rice-1121", "1121 बासमती चावल", "1121 Basmati Rice",
"basmati", "1121", ["1121 rice", "1121 basmati"]);

add("rice-1509", "1509 बासमती चावल", "1509 Basmati Rice",
"basmati", "1509", ["1509 rice"]);

add("rice-1718", "1718 बासमती चावल", "1718 Basmati Rice",
"basmati", "1718", ["1718 rice"]);

add("rice-1401", "1401 बासमती चावल", "1401 Basmati Rice",
"basmati", "1401", ["1401 rice"]);

add("rice-pusa", "पूसा बासमती चावल", "Pusa Basmati Rice",
"basmati", "पूसा", ["pusa rice"]);

add("rice-sharbati", "शरबती चावल", "Sharbati Rice",
"basmati", "शरबती", ["sharbati rice"]);

add("rice-sugandha", "सुगंधा चावल", "Sugandha Rice",
"basmati", "सुगंधा", ["sugandha rice"]);

add("rice-tibar", "तिबर बासमती चावल", "Tibar Basmati Rice",
"basmati", "तिबर", ["tibar rice"]);

add("rice-dubar", "दुबार बासमती चावल", "Dubar Basmati Rice",
"basmati", "दुबार", ["dubar rice"]);

add("rice-mogra", "मोगरा बासमती चावल", "Mogra Basmati Rice",
"basmati", "मोगरा", ["mogra rice"]);

add("rice-mini-mogra", "मिनी मोगरा चावल", "Mini Mogra Rice",
"basmati", "मिनी मोगरा", ["mini mogra"]);

add("rice-broken-basmati", "टूटा बासमती चावल", "Broken Basmati Rice",
"basmati", "टूटा", ["broken basmati", "basmati tukda"]);

/* DAILY RICE */

add("rice-sonamasuri", "सोना मसूरी चावल", "Sona Masoori Rice",
"daily-rice", "सोना मसूरी", ["sona masuri", "sonamasuri"]);

add("rice-kolam", "कोलम चावल", "Kolam Rice",
"daily-rice", "कोलम", ["kolam chawal"]);

add("rice-surti-kolam", "सुरती कोलम चावल", "Surti Kolam Rice",
"daily-rice", "सुरती कोलम", ["surti kolam"]);

add("rice-wada-kolam", "वाडा कोलम चावल", "Wada Kolam Rice",
"daily-rice", "वाडा कोलम", ["wada kolam"]);

add("rice-ponni", "पोन्नी चावल", "Ponni Rice",
"daily-rice", "पोन्नी", ["ponni arisi", "ponni chawal"]);

add("rice-raw-ponni", "रॉ पोन्नी चावल", "Raw Ponni Rice",
"daily-rice", "रॉ पोन्नी", ["raw ponni"]);

add("rice-boiled-ponni", "उबला पोन्नी चावल", "Boiled Ponni Rice",
"daily-rice", "उबला पोन्नी", ["boiled ponni"]);

add("rice-hmt", "एचएमटी चावल", "HMT Rice",
"daily-rice", "HMT", ["hmt chawal"]);

add("rice-indrayani", "इंद्रायणी चावल", "Indrayani Rice",
"daily-rice", "इंद्रायणी", ["indrayani rice"]);

add("rice-ambemohar", "आंबेमोहर चावल", "Ambemohar Rice",
"regional-rice", "आंबेमोहर", ["ambemohar rice"]);

add("rice-gobindobhog", "गोविंदभोग चावल", "Gobindobhog Rice",
"regional-rice", "गोविंदभोग", ["gobindobhog", "govind bhog"]);

add("rice-katarni", "कतर्नी चावल", "Katarni Rice",
"regional-rice", "कतर्नी", ["katarni rice"]);

add("rice-joha", "जोहा चावल", "Joha Rice",
"regional-rice", "जोहा", ["joha rice"]);

add("rice-chakhao", "चाक-हाओ काला चावल", "Chak-Hao Black Rice",
"regional-rice", "मणिपुरी", ["chak hao", "chakhao rice"]);

add("rice-matta", "मट्टा चावल", "Matta Rice",
"regional-rice", "मट्टा", ["matta rice", "kerala matta"]);

add("rice-palakkadan", "पालक्काडन मट्टा चावल",
"Palakkadan Matta Rice", "regional-rice", "पालक्काडन",
["palakkadan matta"]);

add("rice-idli", "इडली चावल", "Idli Rice",
"special-rice", "इडली", ["idli rice"]);

add("rice-dosa", "डोसा चावल", "Dosa Rice",
"special-rice", "डोसा", ["dosa rice"]);

add("rice-parmal", "परमल चावल", "Parmal Rice",
"daily-rice", "परमल", ["parmal chawal"]);

add("rice-swarna", "स्वर्णा चावल", "Swarna Rice",
"daily-rice", "स्वर्णा", ["swarna rice"]);

add("rice-kurnool", "कुरनूल चावल", "Kurnool Rice",
"regional-rice", "कुरनूल", ["kurnool rice"]);

add("rice-boro", "बोरो चावल", "Boro Rice",
"regional-rice", "बोरो", ["boro rice"]);

/* PROCESSING TYPES */

add("rice-steam", "स्टीम चावल", "Steam Rice",
"processing", "स्टीम", ["steam chawal"]);

add("rice-raw", "कच्चा चावल", "Raw Rice",
"processing", "रॉ", ["raw chawal"]);

add("rice-parboiled", "उसना चावल", "Parboiled Rice",
"processing", "उसना", ["usna chawal", "boiled rice"]);

add("rice-brown", "ब्राउन राइस", "Brown Rice",
"health-rice", "ब्राउन", ["brown rice"]);

add("rice-red", "लाल चावल", "Red Rice",
"health-rice", "लाल", ["red rice"]);

add("rice-black", "काला चावल", "Black Rice",
"health-rice", "काला", ["black rice"]);

add("rice-purple", "बैंगनी चावल", "Purple Rice",
"health-rice", "बैंगनी", ["purple rice"]);

/* GRAIN SIZE */

add("rice-long", "लंबे दाने का चावल", "Long Grain Rice",
"grain-size", "लंबा दाना", ["long grain"]);

add("rice-medium", "मध्यम दाने का चावल", "Medium Grain Rice",
"grain-size", "मध्यम दाना", ["medium grain"]);

add("rice-short", "छोटे दाने का चावल", "Short Grain Rice",
"grain-size", "छोटा दाना", ["short grain"]);

/* POHA AND RICE PRODUCTS */

add("rice-poha-thick", "मोटा पोहा", "Thick Poha",
"rice-products", "मोटा", ["mota poha"]);

add("rice-poha-medium", "मीडियम पोहा", "Medium Poha",
"rice-products", "मध्यम", ["medium poha"]);

add("rice-poha-thin", "पतला पोहा", "Thin Poha",
"rice-products", "पतला", ["patla poha", "paper poha"]);

add("rice-poha-red", "लाल पोहा", "Red Poha",
"rice-products", "लाल", ["red poha"]);

add("rice-murmura", "मुरमुरा", "Puffed Rice",
"rice-products", "मुरमुरा",
["mamra", "mudi", "kurmura", "puffed rice"]);

add("rice-kheel", "खील", "Kheel",
"rice-products", "खील", ["kheel chawal"]);

add("rice-chivda", "चिवड़ा", "Rice Chivda",
"rice-products", "चिवड़ा", ["chivda", "chiwda"]);

add("rice-flour", "चावल का आटा", "Rice Flour",
"rice-products", "चावल आटा", ["chawal atta"]);

add("rice-rava", "चावल रवा", "Rice Rava",
"rice-products", "रवा", ["rice sooji"]);

add("rice-vermicelli", "चावल सेवई", "Rice Vermicelli",
"rice-products", "सेवई", ["rice sevai", "rice noodles"]);

add("rice-papad", "चावल पापड़", "Rice Papad",
"rice-products", "पापड़", ["chawal papad"]);

add("rice-fryums", "चावल फ्रायम्स", "Rice Fryums",
"rice-products", "फ्रायम्स", ["rice fryum"]);

DB.registerProducts(C, products);

/* BRANDS: NATIONAL + REGIONAL + LOCAL MARKET */

DB.registerBrands(C, [
    "India Gate", "Daawat", "Fortune", "Kohinoor", "Tilda",
    "Lal Qilla", "Zeeba", "Tata Sampann", "Patanjali",
    "bb Royal", "bb Popular", "24 Mantra Organic",
    "Organic Tattva", "Natureland Organics", "Safe Harvest",
    "Rajdhani", "Pansari", "Double Horse", "Nirapara",
    "Pavizham", "Periyar", "Udhaiyam", "Aachi",
    "Annapurna", "Bharat Rice", "AHAAR", "Manna",
    "Aeroplane", "Shree Lal Mahal", "Anmol",
    "Akashganga", "Dheeya", "Kushi", "Sivaji",
    "Singam", "Idhayakanni"
]);

/* BRANDED PRODUCT EXAMPLES */

const branded = [
    ["india-gate-basmati", "बासमती चावल", "Basmati Rice", "India Gate"],
    ["india-gate-1121", "1121 बासमती चावल", "1121 Basmati Rice", "India Gate"],
    ["daawat-basmati", "बासमती चावल", "Basmati Rice", "Daawat"],
    ["daawat-1121", "1121 बासमती चावल", "1121 Basmati Rice", "Daawat"],
    ["fortune-basmati", "बासमती चावल", "Basmati Rice", "Fortune"],
    ["kohinoor-basmati", "बासमती चावल", "Basmati Rice", "Kohinoor"],
    ["tilda-basmati", "बासमती चावल", "Basmati Rice", "Tilda"],
    ["zeeba-basmati", "बासमती चावल", "Basmati Rice", "Zeeba"],
    ["lalqilla-basmati", "बासमती चावल", "Basmati Rice", "Lal Qilla"],
    ["tata-poha", "पोहा", "Poha", "Tata Sampann"]
];

branded.forEach(function (b) {
    DB.registerProducts(C, [{
        id: "rice-brand-" + b[0],
        name_hi: b[1],
        name_en: b[2],
        brand: b[3],
        variant: "ब्रांडेड",
        subcategory: "branded-rice",
        aliases: [b[3] + " " + b[2], b[3] + " " + b[1]],
        base_unit: "kg",
        pack_options: ["500 g", "1 kg", "5 kg", "10 kg", "25 kg"],
        sector_tags: ["kirana", "retail", "wholesale"],
        source: "brand-product-example"
    }]);
});

})(typeof window !== "undefined" ? window : globalThis);
  /* =====================================================
   NEXUS PULSES / DAL DATABASE
   Requires: nexus-food-master-database.js
   ===================================================== */

(function (global) {
"use strict";

const DB = global.NexusFoodMasterDatabase;

if (!DB) {
    throw new Error("Nexus Core Database not loaded");
}

const C = "pulses";
const products = [];

function add(id, hi, en, sub, variant, aliases, unit) {
    products.push({
        id: id,
        name_hi: hi,
        name_en: en,
        subcategory: sub,
        variant: variant || "",
        aliases: aliases || [],
        base_unit: unit || "kg",
        pack_options: [
            "250 g", "500 g", "1 kg", "5 kg", "10 kg", "25 kg", "50 kg"
        ],
        sector_tags: [
            "kirana", "retail", "wholesale", "dal-shop",
            "hotel", "restaurant"
        ]
    });
}

/* TOOR / ARHAR */

add("dal-toor", "अरहर दाल", "Toor Dal",
"toor", "सामान्य", ["arhar dal", "tur dal", "तूर दाल", "तुवर दाल"]);

add("dal-toor-bold", "मोटी अरहर दाल", "Bold Toor Dal",
"toor", "मोटी", ["bold toor", "moti arhar"]);

add("dal-toor-small", "छोटी अरहर दाल", "Small Toor Dal",
"toor", "छोटी", ["small toor", "small arhar"]);

add("dal-toor-unpolished", "बिना पॉलिश अरहर दाल",
"Unpolished Toor Dal", "toor", "अनपॉलिश",
["unpolished toor", "unpolished arhar"]);

add("dal-toor-polished", "पॉलिश अरहर दाल",
"Polished Toor Dal", "toor", "पॉलिश",
["polished toor", "polished arhar"]);

add("dal-toor-whole", "साबुत अरहर", "Whole Toor",
"toor", "साबुत", ["whole toor", "whole arhar"]);

/* MOONG */

add("dal-moong-whole", "साबुत हरी मूंग", "Whole Green Moong",
"moong", "साबुत हरी",
["sabut moong", "green moong", "whole green gram"]);

add("dal-moong-yellow", "पीली मूंग दाल", "Yellow Moong Dal",
"moong", "पीली धुली",
["yellow moong", "dhuli moong", "moong dal"]);

add("dal-moong-chilka", "मूंग छिलका दाल", "Moong Chilka Dal",
"moong", "छिलका",
["moong chilka", "green split moong"]);

add("dal-moong-split", "धुली मूंग दाल", "Split Moong Dal",
"moong", "धुली", ["split moong", "dhuli moong dal"]);

add("dal-moong-unpolished", "बिना पॉलिश मूंग दाल",
"Unpolished Moong Dal", "moong", "अनपॉलिश",
["unpolished moong"]);

add("dal-moong-sprout", "अंकुरित मूंग", "Sprouted Moong",
"moong", "अंकुरित", ["moong sprouts", "sprouted moong"]);

/* URAD */

add("dal-urad-whole-black", "साबुत काली उड़द", "Whole Black Urad",
"urad", "काली साबुत",
["sabut urad", "black urad", "whole black gram"]);

add("dal-urad-whole-white", "साबुत सफेद उड़द", "Whole White Urad",
"urad", "सफेद साबुत", ["whole white urad"]);

add("dal-urad-dhuli", "धुली उड़द दाल", "Urad Dhuli Dal",
"urad", "धुली", ["dhuli urad", "white urad dal"]);

add("dal-urad-chilka", "उड़द छिलका दाल", "Urad Chilka Dal",
"urad", "छिलका", ["urad chilka", "black split urad"]);

add("dal-urad-gota", "उड़द गोटा", "Urad Gota",
"urad", "गोटा", ["urad gota", "gota urad"]);

add("dal-urad-split", "कुटी उड़द दाल", "Split Urad Dal",
"urad", "कुटी", ["split urad", "urad split"]);

add("dal-minapa-pappu", "मिनपा पप्पु", "Minapa Pappu",
"urad", "दक्षिण भारतीय", ["minapa pappu", "minapappu"]);

/* MASOOR */

add("dal-masoor-whole", "साबुत मसूर", "Whole Masoor",
"masoor", "साबुत", ["whole masoor", "sabut masoor", "brown lentils"]);

add("dal-masoor-red", "लाल मसूर दाल", "Red Masoor Dal",
"masoor", "लाल", ["red masoor", "red lentils"]);

add("dal-masoor-split", "धुली मसूर दाल", "Split Masoor Dal",
"masoor", "धुली", ["split masoor", "dhuli masoor"]);

add("dal-masoor-malka", "मलका मसूर दाल", "Malka Masoor Dal",
"masoor", "मलका", ["malka masoor", "malka dal"]);

add("dal-masoor-black", "काली मसूर", "Black Masoor",
"masoor", "काली", ["black masoor", "black lentils"]);

/* CHANA */

add("dal-chana", "चना दाल", "Chana Dal",
"chana", "चना दाल", ["gram dal"]);

add("dal-chana-whole", "साबुत देसी चना", "Whole Desi Chickpeas",
"chana", "देसी काला चना",
["kala chana", "black chana", "desi chana"]);

add("dal-chana-kabuli", "काबुली चना", "Kabuli Chana",
"chana", "काबुली", ["white chana", "white chickpeas"]);

add("dal-kabuli-small", "छोटा काबुली चना", "Small Kabuli Chana",
"chana", "छोटा", ["small kabuli"]);

add("dal-kabuli-medium", "मध्यम काबुली चना", "Medium Kabuli Chana",
"chana", "मध्यम", ["medium kabuli"]);

add("dal-kabuli-large", "बड़ा काबुली चना", "Large Kabuli Chana",
"chana", "बड़ा", ["large kabuli", "big white chana"]);

add("dal-kabuli-xl", "एक्सएल काबुली चना", "XL Kabuli Chana",
"chana", "XL", ["xl kabuli", "extra large kabuli"]);

add("dal-roasted-chana", "भुना चना", "Roasted Chana",
"chana-products", "भुना", ["bhuna chana", "roasted gram"]);

add("dal-roasted-salted", "नमकीन भुना चना", "Salted Roasted Chana",
"chana-products", "नमकीन", ["salted roasted chana"]);

add("dal-fried-gram", "फुटाना", "Fried Gram",
"chana-products", "फुटाना", ["putana", "phutana", "fried gram"]);

/* PEAS */

add("dal-white-peas", "सफेद मटर", "White Peas",
"peas", "सफेद", ["white vatana", "safed matar"]);

add("dal-green-peas", "सूखी हरी मटर", "Dried Green Peas",
"peas", "हरी", ["dry green peas", "green vatana"]);

add("dal-yellow-peas", "पीली सूखी मटर", "Yellow Peas",
"peas", "पीली", ["yellow peas", "yellow matar"]);

add("dal-split-peas", "टूटी मटर", "Split Peas",
"peas", "टूटी", ["split peas", "matar dal"]);

/* OTHER PULSES */

add("dal-lobia", "लोबिया", "Lobia",
"other-pulses", "लोबिया",
["black eyed peas", "chawli", "चवली"]);

add("dal-lobia-red", "लाल लोबिया", "Red Lobia",
"other-pulses", "लाल", ["red cowpea"]);

add("dal-moth", "मोठ दाल", "Moth Beans",
"other-pulses", "मोठ", ["moth dal", "matki"]);

add("dal-matki", "मटकी", "Matki",
"other-pulses", "मटकी", ["matki", "moth bean"]);

add("dal-horsegram", "कुल्थी दाल", "Horse Gram",
"other-pulses", "कुल्थी", ["kulthi", "hurali", "horse gram"]);

add("dal-broad-beans", "बाकला", "Broad Beans",
"other-pulses", "बाकला", ["bakla", "fava beans"]);

add("dal-lima-beans", "लीमा बीन्स", "Lima Beans",
"other-pulses", "लीमा", ["lima beans", "butter beans"]);

/* RAJMA */

add("dal-rajma-red", "लाल राजमा", "Red Rajma",
"rajma", "लाल", ["red rajma", "kidney beans"]);

add("dal-rajma-jammu", "जम्मू राजमा", "Jammu Rajma",
"rajma", "जम्मू", ["jammu rajma"]);

add("dal-rajma-chitra", "चित्रा राजमा", "Chitra Rajma",
"rajma", "चित्रा", ["chitra rajma"]);

add("dal-rajma-kashmiri", "कश्मीरी राजमा", "Kashmiri Rajma",
"rajma", "कश्मीरी", ["kashmiri rajma"]);

add("dal-rajma-white", "सफेद राजमा", "White Rajma",
"rajma", "सफेद", ["white kidney beans"]);

add("dal-rajma-black", "काला राजमा", "Black Rajma",
"rajma", "काला", ["black kidney beans"]);

add("dal-rajma-pink", "गुलाबी राजमा", "Pink Rajma",
"rajma", "गुलाबी", ["pink rajma"]);

add("dal-rajma-speckled", "चितकबरा राजमा", "Speckled Rajma",
"rajma", "चितकबरा", ["speckled rajma"]);

/* SOYA */

add("dal-soybean", "साबुत सोयाबीन", "Whole Soybean",
"soy", "साबुत", ["soybean", "soya bean"]);

add("dal-soya-chunks", "सोया चंक्स", "Soya Chunks",
"soy-products", "चंक्स", ["soy chunks", "न्यूट्री नगेट्स"]);

add("dal-soya-mini", "मिनी सोया चंक्स", "Mini Soya Chunks",
"soy-products", "मिनी", ["mini soya chunks"]);

add("dal-soya-granules", "सोया ग्रेन्यूल्स", "Soya Granules",
"soy-products", "ग्रेन्यूल्स", ["soya granules"]);

add("dal-soya-mince", "सोया कीमा", "Soya Mince",
"soy-products", "कीमा", ["soya mince"]);

add("dal-soya-flour", "सोया आटा", "Soya Flour",
"soy-products", "आटा", ["soy flour"]);

add("dal-soya-nuts", "सोया नट्स", "Soya Nuts",
"soy-products", "नट्स", ["soya nuts"]);

/* MIXED DAL */

add("dal-mixed", "मिक्स दाल", "Mixed Dal",
"mixed-dal", "मिक्स", ["mix dal", "मिश्रित दाल"]);

add("dal-panchmel", "पंचमेल दाल", "Panchmel Dal",
"mixed-dal", "पंचमेल", ["panchratna dal", "पंचरत्न दाल"]);

add("dal-makhani-mix", "दाल मखनी मिक्स", "Dal Makhani Mix",
"mixed-dal", "दाल मखनी", ["dal makhani mix"]);

add("dal-khichdi-mix", "खिचड़ी दाल मिक्स", "Khichdi Dal Mix",
"mixed-dal", "खिचड़ी", ["khichdi mix"]);

add("dal-sambar-mix", "सांभर दाल मिक्स", "Sambar Dal Mix",
"mixed-dal", "सांभर", ["sambar mix"]);

add("dal-sprouts-mix", "मिक्स अंकुरित दाल", "Mixed Sprouts",
"mixed-dal", "अंकुरित", ["mixed sprouts"]);

/* FLOURS AND PROCESSED PULSES */

add("dal-besan", "बेसन", "Besan",
"pulse-flour", "चना बेसन", ["gram flour", "chana flour"]);

add("dal-sattu", "सत्तू", "Sattu",
"pulse-flour", "भुना चना", ["roasted gram flour"]);

add("dal-moong-flour", "मूंग दाल आटा", "Moong Dal Flour",
"pulse-flour", "मूंग", ["moong flour"]);

add("dal-urad-flour", "उड़द दाल आटा", "Urad Dal Flour",
"pulse-flour", "उड़द", ["urad flour"]);

add("dal-masoor-flour", "मसूर दाल आटा", "Masoor Dal Flour",
"pulse-flour", "मसूर", ["masoor flour", "lentil flour"]);

add("dal-mixed-flour", "मिक्स दाल आटा", "Mixed Pulse Flour",
"pulse-flour", "मिक्स", ["mixed pulse flour"]);

add("dal-chana-dalia", "चना दलिया", "Chana Dalia",
"pulse-products", "चना", ["chana dalia"]);

add("dal-moong-dalia", "मूंग दलिया", "Moong Dalia",
"pulse-products", "मूंग", ["moong dalia"]);

add("dal-urad-dalia", "उड़द दलिया", "Urad Dalia",
"pulse-products", "उड़द", ["urad dalia"]);

DB.registerProducts(C, products);

/* NATIONAL + REGIONAL + LOCAL BRAND NAMES */

DB.registerBrands(C, [
    "Tata Sampann", "Fortune", "Rajdhani", "Aashirvaad",
    "bb Popular", "bb Royal", "24 Mantra Organic",
    "Organic Tattva", "Natureland Organics", "Safe Harvest",
    "Udhaiyam", "Parry's", "DeHaat", "Daily Good",
    "Kedia Pavitra", "Popular Essentials", "Popular Organics",
    "Sri Bhagyalakshmi", "Aachi", "Annapurna",
    "Conscious Food", "Two Brothers Organic Farms",
    "Praakritik", "Manna", "MTR", "Eastern",
    "Double Horse", "Nirapara", "GRB", "Adukale",
    "Gits", "Nature Fresh", "Patanjali",
    "Bikano", "Haldiram's", "Mangat Ram",
    "Angur", "Nandi", "Shree Gold", "AgroPure",
    "Vasmo", "Jeyam", "Shri Balaji"
]);

/* BRANDED PRODUCT EXAMPLES */

const branded = [
    ["tata-toor", "अरहर दाल", "Toor Dal", "Tata Sampann"],
    ["tata-moong", "मूंग दाल", "Moong Dal", "Tata Sampann"],
    ["tata-urad", "उड़द दाल", "Urad Dal", "Tata Sampann"],
    ["tata-chana", "चना दाल", "Chana Dal", "Tata Sampann"],
    ["tata-masoor", "मसूर दाल", "Masoor Dal", "Tata Sampann"],
    ["fortune-toor", "अरहर दाल", "Toor Dal", "Fortune"],
    ["fortune-moong", "मूंग दाल", "Moong Dal", "Fortune"],
    ["fortune-chana", "चना दाल", "Chana Dal", "Fortune"],
    ["fortune-urad", "उड़द दाल", "Urad Dal", "Fortune"],
    ["rajdhani-chana", "चना दाल", "Chana Dal", "Rajdhani"],
    ["rajdhani-moong", "मूंग दाल", "Moong Dal", "Rajdhani"],
    ["rajdhani-toor", "अरहर दाल", "Toor Dal", "Rajdhani"],
    ["organic-toor", "अरहर दाल", "Toor Dal", "Organic Tattva"],
    ["organic-moong", "मूंग दाल", "Moong Dal", "Organic Tattva"],
    ["organic-urad", "उड़द दाल", "Urad Dal", "Organic Tattva"],
    ["parrys-toor", "अरहर दाल", "Toor Dal", "Parry's"],
    ["udhaiyam-toor", "अरहर दाल", "Toor Dal", "Udhaiyam"],
    ["udhaiyam-moong", "मूंग दाल", "Moong Dal", "Udhaiyam"],
    ["dailygood-toor", "अरहर दाल", "Toor Dal", "Daily Good"],
    ["dailygood-moong", "मूंग दाल", "Moong Dal", "Daily Good"]
];

branded.forEach(function (b) {
    DB.registerProducts(C, [{
        id: "pulses-brand-" + b[0],
        name_hi: b[1],
        name_en: b[2],
        brand: b[3],
        variant: "ब्रांडेड",
        subcategory: "branded-pulses",
        aliases: [b[3] + " " + b[2], b[3] + " " + b[1]],
        base_unit: "kg",
        pack_options: ["500 g", "1 kg", "5 kg", "10 kg", "25 kg"],
        sector_tags: ["kirana", "retail", "wholesale"],
        source: "brand-product-example"
    }]);
});

})(typeof window !== "undefined" ? window : globalThis);
 /* ============================================================
   NEXUS FOOD MASTER DATABASE
   CATEGORY 03: ATTA, FLOUR, BESAN, SOOJI & BAKERY INGREDIENTS
   PASTE AFTER RICE AND PULSES MODULES
   ============================================================ */

(function (global) {
"use strict";

const DB = global.NexusFoodMasterDatabase;

if (!DB) {
    throw new Error("Nexus Master Database Core not loaded");
}

const C = "flours";
const products = [];

function add(id, hi, en, sub, variant, aliases, unit) {
    products.push({
        id: id,
        name_hi: hi,
        name_en: en,
        subcategory: sub,
        variant: variant || "",
        aliases: aliases || [],
        base_unit: unit || "kg",
        brand: "",
        pack_options: [
            "100 g", "200 g", "250 g", "500 g",
            "1 kg", "2 kg", "5 kg", "10 kg",
            "25 kg", "30 kg", "50 kg"
        ],
        sector_tags: [
            "kirana", "retail", "wholesale", "flour-mill",
            "chakki", "bakery", "hotel", "restaurant",
            "sweet-shop"
        ],
        source: "generic"
    });
}

/* ============================================================
   WHEAT ATTA
   ============================================================ */

add("flour-wheat-atta", "गेहूं का आटा", "Wheat Atta",
"wheat-atta", "सामान्य गेहूं आटा",
["gehun atta", "gehu atta", "wheat flour", "atta"]);

add("flour-chakki-atta", "चक्की आटा", "Chakki Atta",
"wheat-atta", "चक्की पिसा",
["chakki atta", "chakki wala atta", "fresh chakki atta"]);

add("flour-whole-wheat", "साबुत गेहूं आटा", "Whole Wheat Flour",
"wheat-atta", "साबुत गेहूं",
["whole wheat atta", "wholemeal flour"]);

add("flour-sharbati-atta", "शरबती गेहूं आटा", "Sharbati Wheat Atta",
"wheat-atta", "शरबती",
["sharbati atta", "sharbati gehun atta"]);

add("flour-mp-wheat", "मध्य प्रदेश गेहूं आटा", "MP Wheat Atta",
"wheat-atta", "एमपी गेहूं",
["mp atta", "madhya pradesh wheat atta"]);

add("flour-punjab-wheat", "पंजाब गेहूं आटा", "Punjab Wheat Atta",
"wheat-atta", "पंजाब गेहूं",
["punjab atta", "punjabi wheat atta"]);

add("flour-haryana-wheat", "हरियाणा गेहूं आटा", "Haryana Wheat Atta",
"wheat-atta", "हरियाणा गेहूं",
["haryana atta"]);

add("flour-gujarat-wheat", "गुजरात गेहूं आटा", "Gujarat Wheat Atta",
"wheat-atta", "गुजरात गेहूं",
["gujarati wheat atta"]);

add("flour-khapli", "खपली गेहूं आटा", "Khapli Wheat Flour",
"special-wheat", "खपली",
["khapli atta", "emmer wheat flour"]);

add("flour-durum", "ड्यूरम गेहूं आटा", "Durum Wheat Flour",
"special-wheat", "ड्यूरम",
["durum atta", "durum flour"]);

add("flour-multigrain", "मल्टीग्रेन आटा", "Multigrain Atta",
"special-wheat", "मल्टीग्रेन",
["multi grain atta", "multigrain flour"]);

add("flour-high-fibre", "हाई फाइबर आटा", "High Fibre Atta",
"special-wheat", "हाई फाइबर",
["high fiber atta", "fibre atta"]);

add("flour-organic-wheat", "ऑर्गेनिक गेहूं आटा", "Organic Wheat Atta",
"special-wheat", "ऑर्गेनिक",
["organic atta", "organic wheat flour"]);

add("flour-gluten-free", "ग्लूटेन फ्री आटा", "Gluten Free Flour",
"special-wheat", "ग्लूटेन फ्री",
["gluten free atta", "gluten-free flour"]);

/* ============================================================
   REGIONAL WHEAT FLOURS
   ============================================================ */

add("flour-phulka", "फुल्का आटा", "Phulka Atta",
"regional-atta", "फुल्का",
["phulka flour", "soft roti atta"]);

add("flour-roti", "रोटी आटा", "Roti Atta",
"regional-atta", "रोटी",
["roti flour", "roti wala atta"]);

add("flour-paratha", "पराठा आटा", "Paratha Atta",
"regional-atta", "पराठा",
["paratha flour"]);

add("flour-poori", "पूरी आटा", "Poori Atta",
"regional-atta", "पूरी",
["puri atta", "poori flour"]);

add("flour-tandoori", "तंदूरी रोटी आटा", "Tandoori Roti Atta",
"regional-atta", "तंदूरी",
["tandoori atta"]);

add("flour-makki-mix", "मक्की गेहूं मिक्स आटा", "Makki Wheat Mix Flour",
"regional-atta", "मक्की मिक्स",
["makki mix atta"]);

/* ============================================================
   MAIDA
   ============================================================ */

add("flour-maida", "मैदा", "Maida",
"maida", "सामान्य मैदा",
["maida flour", "refined wheat flour", "white flour"]);

add("flour-bakery-maida", "बेकरी मैदा", "Bakery Maida",
"maida", "बेकरी",
["bakery flour", "bakery maida"]);

add("flour-superfine-maida", "सुपरफाइन मैदा", "Superfine Maida",
"maida", "सुपरफाइन",
["super fine maida"]);

add("flour-premium-maida", "प्रीमियम मैदा", "Premium Maida",
"maida", "प्रीमियम",
["premium maida flour"]);

add("flour-self-raising", "सेल्फ राइजिंग आटा", "Self Raising Flour",
"maida", "सेल्फ राइजिंग",
["self raising flour", "self rising flour"]);

/* ============================================================
   BESAN AND CHANA FLOUR
   ============================================================ */

add("flour-besan-fine", "बारीक बेसन", "Fine Besan",
"besan", "बारीक",
["fine gram flour", "barik besan"]);

add("flour-besan-coarse", "मोटा बेसन", "Coarse Besan",
"besan", "मोटा",
["mota besan", "coarse gram flour"]);

add("flour-besan-ladoo", "लड्डू बेसन", "Ladoo Besan",
"besan", "लड्डू",
["motichoor besan", "laddu besan"]);

add("flour-besan-bhajiya", "भजिया बेसन", "Bhajiya Besan",
"besan", "भजिया",
["pakoda besan", "bhajiya flour"]);

add("flour-besan-dhokla", "ढोकला बेसन", "Dhokla Besan",
"besan", "ढोकला",
["dhokla flour"]);

add("flour-besan-chana", "चना बेसन", "Chana Besan",
"besan", "चना",
["chana flour", "gram flour"]);

/* ============================================================
   SOOJI / RAVA / SEMOLINA
   ============================================================ */

add("flour-sooji", "सूजी", "Sooji",
"sooji", "सामान्य",
["suji", "sooji rava", "semolina"]);

add("flour-bombay-rava", "बॉम्बे रवा", "Bombay Rava",
"sooji", "बॉम्बे",
["bombay sooji", "bombay rava"]);

add("flour-bansi-rava", "बंसी रवा", "Bansi Rava",
"sooji", "बंसी",
["bansi sooji", "bansi rava"]);

add("flour-fine-sooji", "बारीक सूजी", "Fine Sooji",
"sooji", "बारीक",
["barik sooji", "fine semolina"]);

add("flour-coarse-sooji", "मोटी सूजी", "Coarse Sooji",
"sooji", "मोटी",
["moti sooji", "coarse rava"]);

add("flour-chiroti-rava", "चिरोटी रवा", "Chiroti Rava",
"sooji", "चिरोटी",
["chiroti sooji", "chiroti rava"]);

add("flour-roasted-sooji", "भुनी सूजी", "Roasted Sooji",
"sooji", "भुनी",
["roasted suji", "roasted rava"]);

add("flour-double-roasted-rava", "डबल रोस्टेड रवा",
"Double Roasted Rava",
"sooji", "डबल रोस्टेड",
["double roasted sooji"]);

add("flour-idli-rava", "इडली रवा", "Idli Rava",
"sooji", "इडली",
["idli sooji", "idli rava"]);

add("flour-upma-rava", "उपमा रवा", "Upma Rava",
"sooji", "उपमा",
["upma sooji", "upma rava"]);

add("flour-dalia-wheat", "गेहूं दलिया", "Wheat Dalia",
"dalia", "गेहूं",
["gehun dalia", "broken wheat", "lapsi"]);

add("flour-fine-dalia", "बारीक गेहूं दलिया", "Fine Wheat Dalia",
"dalia", "बारीक",
["fine dalia", "barik dalia"]);

add("flour-coarse-dalia", "मोटा गेहूं दलिया", "Coarse Wheat Dalia",
"dalia", "मोटा",
["mota dalia", "coarse broken wheat"]);

/* ============================================================
   MILLET FLOURS
   ============================================================ */

add("flour-bajra", "बाजरे का आटा", "Bajra Flour",
"millet-flour", "बाजरा",
["bajra atta", "pearl millet flour"]);

add("flour-jowar", "ज्वार का आटा", "Jowar Flour",
"millet-flour", "ज्वार",
["jowar atta", "sorghum flour"]);

add("flour-ragi", "रागी का आटा", "Ragi Flour",
"millet-flour", "रागी",
["ragi atta", "nachni flour", "finger millet flour"]);

add("flour-mandua", "मंडुआ आटा", "Mandua Flour",
"millet-flour", "मंडुआ",
["mandua atta", "mandua flour"]);

add("flour-kuttu", "कुट्टू का आटा", "Kuttu Flour",
"millet-flour", "कुट्टू",
["kuttu atta", "buckwheat flour"]);

add("flour-rajgira", "राजगिरा आटा", "Rajgira Flour",
"millet-flour", "राजगिरा",
["rajgira atta", "amaranth flour"]);

add("flour-jau", "जौ का आटा", "Barley Flour",
"millet-flour", "जौ",
["jau atta", "barley atta"]);

add("flour-oats", "ओट्स का आटा", "Oats Flour",
"special-flour", "ओट्स",
["oats atta", "oat flour"]);

add("flour-corn", "मक्के का आटा", "Maize Flour",
"millet-flour", "मक्का",
["makki atta", "corn flour", "maize atta"]);

add("flour-makki-yellow", "पीला मक्की आटा", "Yellow Maize Flour",
"millet-flour", "पीला मक्का",
["yellow makki atta"]);

add("flour-makki-white", "सफेद मक्की आटा", "White Maize Flour",
"millet-flour", "सफेद मक्का",
["white makki atta"]);

add("flour-sattu-jau", "जौ का सत्तू", "Barley Sattu",
"special-flour", "जौ",
["jau sattu"]);

add("flour-ragi-malt", "रागी माल्ट आटा", "Ragi Malt Flour",
"special-flour", "रागी माल्ट",
["ragi malt"]);

/* ============================================================
   OTHER REGIONAL FLOURS
   ============================================================ */

add("flour-singhara", "सिंघाड़े का आटा", "Water Chestnut Flour",
"regional-flour", "सिंघाड़ा",
["singhara atta", "singhada flour"]);

add("flour-samak", "सामक चावल आटा", "Samak Flour",
"regional-flour", "सामक",
["samak atta", "vrat flour"]);

add("flour-sabudana", "साबूदाना आटा", "Sago Flour",
"regional-flour", "साबूदाना",
["sabudana flour"]);

add("flour-coconut", "नारियल का आटा", "Coconut Flour",
"special-flour", "नारियल",
["coconut atta"]);

add("flour-almond", "बादाम का आटा", "Almond Flour",
"special-flour", "बादाम",
["badam flour", "almond powder"]);

add("flour-peanut", "मूंगफली का आटा", "Peanut Flour",
"special-flour", "मूंगफली",
["groundnut flour", "peanut atta"]);

add("flour-soya", "सोयाबीन आटा", "Soybean Flour",
"special-flour", "सोयाबीन",
["soya atta", "soy flour"]);

add("flour-moringa", "सहजन पत्ती आटा", "Moringa Leaf Powder",
"special-flour", "सहजन",
["moringa powder", "drumstick leaf powder"]);

/* ============================================================
   BAKERY AND COOKING INGREDIENTS
   ============================================================ */

add("flour-corn-starch", "कॉर्न स्टार्च", "Corn Starch",
"bakery-ingredient", "स्टार्च",
["corn starch", "cornflour starch"]);

add("flour-corn-flour-white", "सफेद कॉर्न फ्लोर", "White Corn Flour",
"bakery-ingredient", "कॉर्न फ्लोर",
["white corn flour"]);

add("flour-custard", "कस्टर्ड पाउडर", "Custard Powder",
"bakery-ingredient", "कस्टर्ड",
["vanilla custard powder"]);

add("flour-baking-powder", "बेकिंग पाउडर", "Baking Powder",
"bakery-ingredient", "बेकिंग पाउडर",
["baking powder"]);

add("flour-baking-soda", "बेकिंग सोडा", "Baking Soda",
"bakery-ingredient", "खाने का सोडा",
["meetha soda", "cooking soda", "sodium bicarbonate"]);

add("flour-yeast-dry", "ड्राई यीस्ट", "Dry Yeast",
"bakery-ingredient", "ड्राई",
["dry yeast", "instant yeast"]);

add("flour-yeast-active", "एक्टिव ड्राई यीस्ट", "Active Dry Yeast",
"bakery-ingredient", "एक्टिव",
["active dry yeast"]);

add("flour-vanilla-essence", "वनीला एसेंस", "Vanilla Essence",
"bakery-ingredient", "वनीला",
["vanilla flavour", "vanilla essence"]);

add("flour-cake-mix", "केक मिक्स", "Cake Mix",
"bakery-ingredient", "केक",
["cake premix", "cake mix powder"]);

add("flour-bread-crumbs", "ब्रेड क्रम्ब्स", "Bread Crumbs",
"bakery-ingredient", "ब्रेड",
["bread crumbs", "breadcrumbs"]);

add("flour-cocoa-powder", "कोको पाउडर", "Cocoa Powder",
"bakery-ingredient", "कोको",
["cocoa powder"]);

add("flour-icing-sugar", "आइसिंग शुगर", "Icing Sugar",
"bakery-ingredient", "आइसिंग",
["icing sugar", "powdered sugar"]);

add("flour-castor-sugar", "कास्टर शुगर", "Caster Sugar",
"bakery-ingredient", "कास्टर",
["caster sugar", "superfine sugar"]);

add("flour-gelatin", "जिलेटिन पाउडर", "Gelatin Powder",
"bakery-ingredient", "जिलेटिन",
["gelatin powder"]);

add("flour-agar-agar", "अगर अगर पाउडर", "Agar Agar Powder",
"bakery-ingredient", "अगर",
["agar agar", "china grass powder"]);

add("flour-cmc", "सीएमसी पाउडर", "CMC Powder",
"bakery-ingredient", "सीएमसी",
["cmc powder", "carboxymethyl cellulose"]);

add("flour-citric-acid", "सिट्रिक एसिड", "Citric Acid",
"bakery-ingredient", "सिट्रिक",
["citric acid powder", "lemon salt"]);

add("flour-sodium-benzoate", "सोडियम बेंजोएट",
"Sodium Benzoate",
"bakery-ingredient", "प्रिजर्वेटिव",
["sodium benzoate"]);

add("flour-glucose-powder", "ग्लूकोज पाउडर", "Glucose Powder",
"bakery-ingredient", "ग्लूकोज",
["dextrose powder", "glucose"]);

add("flour-milk-powder", "मिल्क पाउडर", "Milk Powder",
"bakery-ingredient", "दूध पाउडर",
["milk powder", "dairy whitener"]);

add("flour-chocolate-chips", "चॉकलेट चिप्स", "Chocolate Chips",
"bakery-ingredient", "चॉकलेट",
["choco chips", "chocolate chips"]);

add("flour-compound-chocolate", "कंपाउंड चॉकलेट", "Compound Chocolate",
"bakery-ingredient", "कंपाउंड",
["chocolate compound", "dark compound"]);

add("flour-margarine", "मार्जरीन", "Margarine",
"bakery-ingredient", "मार्जरीन",
["bakery margarine"]);

add("flour-bread-improver", "ब्रेड इम्प्रूवर", "Bread Improver",
"bakery-ingredient", "इम्प्रूवर",
["bread improver"]);

add("flour-vital-gluten", "व्हीट ग्लूटेन", "Wheat Gluten",
"bakery-ingredient", "ग्लूटेन",
["vital wheat gluten"]);

/* ============================================================
   LOCAL MILL / LOOSE / SHOPKEEPER PRODUCTS
   ============================================================ */

/* ये उत्पाद बिना ब्रांड के हैं।
   दुकानदार अपना नाम DB.addCustomProduct() से जोड़ सकता है। */

add("flour-local-chakki", "लोकल चक्की आटा", "Local Chakki Atta",
"local-mill", "लोकल मिल",
["local atta", "chakki wala", "mill atta"]);

add("flour-local-maida", "लोकल मैदा", "Local Maida",
"local-mill", "लोकल मिल",
["local maida", "mill maida"]);

add("flour-local-besan", "लोकल बेसन", "Local Besan",
"local-mill", "लोकल मिल",
["local besan", "mill besan"]);

add("flour-local-sooji", "लोकल सूजी", "Local Sooji",
"local-mill", "लोकल मिल",
["local suji", "mill sooji"]);

add("flour-loose-atta", "खुला गेहूं आटा", "Loose Wheat Atta",
"loose-goods", "खुला",
["loose atta", "khula atta"]);

add("flour-loose-maida", "खुला मैदा", "Loose Maida",
"loose-goods", "खुला",
["loose maida"]);

add("flour-loose-besan", "खुला बेसन", "Loose Besan",
"loose-goods", "खुला",
["loose besan"]);

add("flour-loose-sooji", "खुली सूजी", "Loose Sooji",
"loose-goods", "खुला",
["loose suji", "khuli sooji"]);

add("flour-loose-bajra", "खुला बाजरा आटा", "Loose Bajra Flour",
"loose-goods", "खुला",
["loose bajra atta"]);

add("flour-loose-jowar", "खुला ज्वार आटा", "Loose Jowar Flour",
"loose-goods", "खुला",
["loose jowar atta"]);

/* ============================================================
   REGISTER GENERIC PRODUCTS
   ============================================================ */

DB.registerProducts(C, products);

/* ============================================================
   NATIONAL + REGIONAL BRANDS
   These are brand names, not claims of every product being
   available under every brand.
   ============================================================ */

DB.registerBrands(C, [
    "Aashirvaad",
    "Pillsbury",
    "Annapurna",
    "Fortune",
    "Patanjali",
    "Rajdhani",
    "Tata Sampann",
    "Organic Tattva",
    "Safe Harvest",
    "Two Brothers Organic Farms",
    "Manna",
    "Natureland Organics",
    "Shree Anna",
    "24 Mantra Organic",
    " bb Popular",
    "bb Royal",
    "Daily Good",
    "Sri Bhagyalakshmi",
    "Bhagyalakshmi",
    "Vijay",
    "Double Horse",
    "Nirapara",
    "Madhur",
    "Sampoorna",
    "Tansukh",
    "Weikfield",
    "Puramate",
    "Golden Crown",
    "Tops",
    "Morde",
    "Hershey's",
    "Bake King",
    "Urban Platter",
    "Whole Farm",
    "Let's Try",
    "BestValue"
]);

/* ============================================================
   VERIFIED BRAND-PRODUCT EXAMPLES
   ============================================================ */

const branded = [
    ["aashirvaad-atta", "गेहूं आटा", "Wheat Atta", "Aashirvaad"],
    ["aashirvaad-multigrain", "मल्टीग्रेन आटा", "Multigrain Atta", "Aashirvaad"],
    ["aashirvaad-besan", "बेसन", "Besan", "Aashirvaad"],
    ["pillsbury-atta", "गेहूं आटा", "Wheat Atta", "Pillsbury"],
    ["fortune-atta", "चक्की आटा", "Chakki Atta", "Fortune"],
    ["fortune-maida", "मैदा", "Maida", "Fortune"],
    ["fortune-sooji", "सूजी", "Sooji", "Fortune"],
    ["fortune-besan", "बेसन", "Besan", "Fortune"],
    ["rajdhani-maida", "मैदा", "Maida", "Rajdhani"],
    ["rajdhani-sooji", "सूजी", "Sooji", "Rajdhani"],
    ["rajdhani-besan", "बेसन", "Besan", "Rajdhani"],
    ["rajdhani-sattu", "चना सत्तू", "Chana Sattu", "Rajdhani"],
    ["tata-besan", "बेसन", "Besan", "Tata Sampann"],
    ["organic-maida", "मैदा", "Maida", "Organic Tattva"],
    ["organic-besan", "बेसन", "Besan", "Organic Tattva"],
    ["dailygood-maida", "मैदा", "Maida", "Daily Good"],
    ["dailygood-sooji", "सूजी", "Sooji", "Daily Good"],
    ["dailygood-besan", "बेसन", "Besan", "Daily Good"],
    ["bhagyalakshmi-bansi", "बंसी रवा", "Bansi Rava", "Sri Bhagyalakshmi"],
    ["bhagyalakshmi-besan", "बेसन", "Besan", "Sri Bhagyalakshmi"],
    ["vijay-idli-rava", "इडली रवा", "Idli Rava", "Vijay"],
    ["doublehorse-rava", "डबल रोस्टेड रवा", "Double Roasted Rava", "Double Horse"],
    ["nirapara-puttu", "पुट्टू पाउडर", "Puttu Podi", "Nirapara"],
    ["weikfield-corn-starch", "कॉर्न स्टार्च", "Corn Starch", "Weikfield"],
    ["weikfield-baking-powder", "बेकिंग पाउडर", "Baking Powder", "Weikfield"],
    ["weikfield-baking-soda", "बेकिंग सोडा", "Baking Soda", "Weikfield"],
    ["weikfield-custard", "कस्टर्ड पाउडर", "Custard Powder", "Weikfield"],
    ["puramate-vanilla", "वनीला एसेंस", "Vanilla Essence", "Puramate"],
    ["puramate-cmc", "सीएमसी पाउडर", "CMC Powder", "Puramate"],
    ["puramate-citric", "सिट्रिक एसिड", "Citric Acid", "Puramate"],
    ["goldencrown-corn", "कॉर्न स्टार्च", "Corn Starch", "Golden Crown"],
    ["tops-corn", "कॉर्न फ्लोर", "Corn Flour", "Tops"],
    ["morde-compound", "कंपाउंड चॉकलेट", "Compound Chocolate", "Morde"],
    ["tansukh-atta", "चक्की आटा", "Chakki Atta", "Tansukh"],
    ["tansukh-besan", "बेसन", "Besan", "Tansukh"],
    ["tansukh-maida", "मैदा", "Maida", "Tansukh"],
    ["tansukh-sooji", "सूजी", "Sooji", "Tansukh"]
];

branded.forEach(function (b) {
    DB.registerProducts(C, [{
        id: "flours-brand-" + b[0],
        name_hi: b[1],
        name_en: b[2],
        brand: b[3],
        variant: "ब्रांडेड",
        subcategory: "branded-flour",
        aliases: [
            b[3] + " " + b[2],
            b[3] + " " + b[1]
        ],
        base_unit: "kg",
        pack_options: [
            "100 g", "200 g", "250 g", "500 g",
            "1 kg", "2 kg", "5 kg", "10 kg", "25 kg", "50 kg"
        ],
        sector_tags: [
            "kirana", "retail", "wholesale", "bakery"
        ],
        source: "brand-product-example"
    }]);
});

/* ============================================================
   END CATEGORY 03: FLOURS
   ============================================================ */

})(typeof window !== "undefined" ? window : globalThis);
 /* =========================================================
   CATEGORY 4: EDIBLE OIL & GHEE
   NEXUS MASTER FOOD DATABASE
   ========================================================= */

(function (global) {
    "use strict";

    const DB = global.NexusFoodMasterDatabase;
    if (!DB) {
        throw new Error("NexusFoodMasterDatabase engine not found");
    }

    const CATEGORY = "oils_ghee";

    const brands = [
        "Fortune",
        "Saffola",
        "Dhara",
        "Engine",
        "Emami Healthy & Tasty",
        "Gemini",
        "Freedom",
        "Sunpure",
        "Gold Winner",
        "Patanjali",
        "Dalda",
        "Ruchi Gold",
        "Nature Fresh",
        "Oleev",
        "Figaro",
        "Leonardo",
        "Borges",
        "Disano",
        "24 Mantra Organic",
        "Organic Tattva",
        "Tata Sampann",
        "Gowardhan",
        "Amul",
        "Mother Dairy",
        "Ananda",
        "Verka",
        "Ghee Shakti",
        "Aashirvaad Svasti",
        "Nandini",
        "Milma",
        "Aavin",
        "Sudha",
        "Vijaya",
        "Pride of Cows",
        "Country Delight",
        "Local Dairy",
        "Local Oil Mill",
        "Loose / Unbranded"
    ];

    const products = [
        // MUSTARD OIL
        {
            id: "oil-mustard",
            name_hi: "सरसों का तेल",
            name_en: "Mustard Oil",
            aliases: ["कच्ची घानी", "सरसों तेल", "mustard tel", "sarso oil"],
            subcategory: "mustard_oil",
            base_unit: "litre"
        },
        {
            id: "oil-mustard-kachhi-ghani",
            name_hi: "कच्ची घानी सरसों तेल",
            name_en: "Kachchi Ghani Mustard Oil",
            aliases: ["कच्ची घानी तेल", "kachhi ghani tel"],
            subcategory: "mustard_oil",
            base_unit: "litre"
        },
        {
            id: "oil-mustard-filtered",
            name_hi: "फिल्टर्ड सरसों तेल",
            name_en: "Filtered Mustard Oil",
            aliases: ["filtered sarso oil"],
            subcategory: "mustard_oil",
            base_unit: "litre"
        },

        // REFINED OILS
        {
            id: "oil-soybean",
            name_hi: "सोयाबीन तेल",
            name_en: "Soybean Oil",
            aliases: ["सोया तेल", "soyabean tel", "soya oil"],
            subcategory: "refined_oil",
            base_unit: "litre"
        },
        {
            id: "oil-sunflower",
            name_hi: "सूरजमुखी तेल",
            name_en: "Sunflower Oil",
            aliases: ["सनफ्लावर तेल", "sunflower tel"],
            subcategory: "refined_oil",
            base_unit: "litre"
        },
        {
            id: "oil-groundnut",
            name_hi: "मूंगफली तेल",
            name_en: "Groundnut Oil",
            aliases: ["मूंगफली का तेल", "peanut oil", "groundnut tel"],
            subcategory: "groundnut_oil",
            base_unit: "litre"
        },
        {
            id: "oil-rice-bran",
            name_hi: "राइस ब्रान तेल",
            name_en: "Rice Bran Oil",
            aliases: ["चावल की भूसी का तेल", "rice bran tel"],
            subcategory: "refined_oil",
            base_unit: "litre"
        },
        {
            id: "oil-cottonseed",
            name_hi: "कपासिया तेल",
            name_en: "Cottonseed Oil",
            aliases: ["कॉटनसीड तेल", "cotton seed oil"],
            subcategory: "refined_oil",
            base_unit: "litre"
        },
        {
            id: "oil-palm",
            name_hi: "पाम तेल",
            name_en: "Palm Oil",
            aliases: ["पामोलिन", "palmolein", "palm tel"],
            subcategory: "refined_oil",
            base_unit: "litre"
        },
        {
            id: "oil-blended",
            name_hi: "मिश्रित खाद्य तेल",
            name_en: "Blended Cooking Oil",
            aliases: ["ब्लेंडेड ऑयल", "mixed cooking oil"],
            subcategory: "blended_oil",
            base_unit: "litre"
        },

        // TRADITIONAL / COLD PRESSED OILS
        {
            id: "oil-coconut",
            name_hi: "नारियल तेल",
            name_en: "Coconut Oil",
            aliases: ["कोकोनट ऑयल", "coconut tel"],
            subcategory: "traditional_oil",
            base_unit: "litre"
        },
        {
            id: "oil-cold-pressed-groundnut",
            name_hi: "कोल्ड प्रेस्ड मूंगफली तेल",
            name_en: "Cold Pressed Groundnut Oil",
            aliases: ["लकड़ी घानी मूंगफली तेल", "wood pressed peanut oil"],
            subcategory: "cold_pressed",
            base_unit: "litre"
        },
        {
            id: "oil-cold-pressed-sesame",
            name_hi: "कोल्ड प्रेस्ड तिल तेल",
            name_en: "Cold Pressed Sesame Oil",
            aliases: ["तिल का तेल", "sesame oil", "gingelly oil"],
            subcategory: "cold_pressed",
            base_unit: "litre"
        },
        {
            id: "oil-sesame",
            name_hi: "तिल का तेल",
            name_en: "Sesame Oil",
            aliases: ["तिल्ली तेल", "til tel"],
            subcategory: "traditional_oil",
            base_unit: "litre"
        },
        {
            id: "oil-flaxseed",
            name_hi: "अलसी का तेल",
            name_en: "Flaxseed Oil",
            aliases: ["लिनसीड ऑयल", "linseed oil"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },
        {
            id: "oil-castor",
            name_hi: "अरंडी का तेल",
            name_en: "Castor Oil",
            aliases: ["कैस्टर ऑयल", "arandi tel"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },

        // OTHER EDIBLE OILS
        {
            id: "oil-olive",
            name_hi: "जैतून का तेल",
            name_en: "Olive Oil",
            aliases: ["ऑलिव ऑयल", "olive tel"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },
        {
            id: "oil-olive-extra-virgin",
            name_hi: "एक्स्ट्रा वर्जिन ऑलिव ऑयल",
            name_en: "Extra Virgin Olive Oil",
            aliases: ["extra virgin olive"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },
        {
            id: "oil-avocado",
            name_hi: "एवोकाडो तेल",
            name_en: "Avocado Oil",
            aliases: ["avocado oil"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },
        {
            id: "oil-almond",
            name_hi: "बादाम तेल",
            name_en: "Almond Oil",
            aliases: ["almond tel"],
            subcategory: "specialty_oil",
            base_unit: "litre"
        },

        // GHEE
        {
            id: "ghee-cow",
            name_hi: "गाय का घी",
            name_en: "Cow Ghee",
            aliases: ["देसी गाय का घी", "cow desi ghee"],
            subcategory: "ghee",
            base_unit: "kg"
        },
        {
            id: "ghee-buffalo",
            name_hi: "भैंस का घी",
            name_en: "Buffalo Ghee",
            aliases: ["buffalo desi ghee"],
            subcategory: "ghee",
            base_unit: "kg"
        },
        {
            id: "ghee-desi",
            name_hi: "देसी घी",
            name_en: "Desi Ghee",
            aliases: ["शुद्ध देसी घी", "pure desi ghee"],
            subcategory: "ghee",
            base_unit: "kg"
        },
        {
            id: "ghee-bilona",
            name_hi: "बिलोना घी",
            name_en: "Bilona Ghee",
            aliases: ["बिलोना गाय का घी", "bilona cow ghee"],
            subcategory: "ghee",
            base_unit: "kg"
        },
        {
            id: "ghee-granular",
            name_hi: "दानेदार घी",
            name_en: "Granular Ghee",
            aliases: ["दाना घी", "danedar ghee"],
            subcategory: "ghee",
            base_unit: "kg"
        },
        {
            id: "ghee-vanaspati",
            name_hi: "वनस्पति घी",
            name_en: "Vanaspati Ghee",
            aliases: ["डालडा", "वनस्पति"],
            subcategory: "vanaspati",
            base_unit: "kg"
        },

        // BUTTER AND RELATED
        {
            id: "butter-salted",
            name_hi: "नमकीन मक्खन",
            name_en: "Salted Butter",
            aliases: ["salted butter"],
            subcategory: "butter",
            base_unit: "kg"
        },
        {
            id: "butter-unsalted",
            name_hi: "बिना नमक का मक्खन",
            name_en: "Unsalted Butter",
            aliases: ["unsalted butter"],
            subcategory: "butter",
            base_unit: "kg"
        },
        {
            id: "butter-white",
            name_hi: "सफेद मक्खन",
            name_en: "White Butter",
            aliases: ["मलाई मक्खन", "white makkhan"],
            subcategory: "butter",
            base_unit: "kg"
        },
        {
            id: "cream-malai",
            name_hi: "मलाई",
            name_en: "Fresh Cream / Malai",
            aliases: ["दूध की मलाई", "milk cream"],
            subcategory: "dairy_fat",
            base_unit: "kg"
        },

        // LOOSE / LOCAL PRODUCTS
        {
            id: "oil-local-mill",
            name_hi: "स्थानीय मिल का खुला तेल",
            name_en: "Local Oil Mill Loose Oil",
            aliases: ["खुला तेल", "मिल का तेल", "loose oil"],
            subcategory: "local_oil",
            base_unit: "litre"
        },
        {
            id: "oil-local-mustard",
            name_hi: "स्थानीय पेराई सरसों तेल",
            name_en: "Local Pressed Mustard Oil",
            aliases: ["घानी तेल", "लोकल सरसों तेल"],
            subcategory: "local_oil",
            base_unit: "litre"
        },
        {
            id: "oil-local-groundnut",
            name_hi: "स्थानीय मूंगफली तेल",
            name_en: "Local Groundnut Oil",
            aliases: ["लोकल मूंगफली तेल"],
            subcategory: "local_oil",
            base_unit: "litre"
        },
        {
            id: "ghee-local",
            name_hi: "स्थानीय खुला घी",
            name_en: "Local Loose Ghee",
            aliases: ["खुला देसी घी", "लोकल घी"],
            subcategory: "local_ghee",
            base_unit: "kg"
        }
    ];

    DB.registerBrands(CATEGORY, brands);
    DB.registerProducts(CATEGORY, products);

})(typeof window !== "undefined" ? window : globalThis);

/* ================= END CATEGORY 4 ================= */
 /* =========================================================
   CATEGORY 5: SPICES & MASALA
   NEXUS MASTER FOOD DATABASE
   ========================================================= */

(function (global) {
    "use strict";

    const DB = global.NexusFoodMasterDatabase;
    if (!DB) {
        throw new Error("NexusFoodMasterDatabase engine not found");
    }

    const CATEGORY = "spices_masala";

    const brands = [
        "MDH",
        "Everest",
        "Catch",
        "Badshah",
        "Eastern",
        "MTR",
        "Aachi",
        "Ramdev",
        "Goldiee",
        "Patanjali",
        "Tata Sampann",
        "Keya",
        "Pushp",
        "Snapin",
        "Suhana",
        "Orika",
        "Mother's Recipe",
        "Priya",
        "Double Horse",
        "Nirapara",
        "Sakthi",
        "Vasant",
        "Rasoi Magic",
        "Rajesh Masala",
        "Local Masala Mill",
        "Local Spice Shop",
        "Loose / Unbranded"
    ];

    const products = [
        // WHOLE BASIC SPICES
        {
            id: "spice-turmeric-whole",
            name_hi: "साबुत हल्दी",
            name_en: "Whole Turmeric",
            aliases: ["हल्दी गांठ", "हल्दी की गांठ", "turmeric root"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-turmeric-powder",
            name_hi: "हल्दी पाउडर",
            name_en: "Turmeric Powder",
            aliases: ["पिसी हल्दी", "हल्दी", "haldi powder"],
            subcategory: "powder_spices",
            base_unit: "kg"
        },
        {
            id: "spice-red-chilli-whole",
            name_hi: "साबुत लाल मिर्च",
            name_en: "Whole Red Chilli",
            aliases: ["सूखी लाल मिर्च", "खड़ी लाल मिर्च", "sukhi mirch"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-red-chilli-powder",
            name_hi: "लाल मिर्च पाउडर",
            name_en: "Red Chilli Powder",
            aliases: ["पिसी लाल मिर्च", "मिर्च पाउडर", "mirchi powder"],
            subcategory: "powder_spices",
            base_unit: "kg"
        },
        {
            id: "spice-coriander-whole",
            name_hi: "साबुत धनिया",
            name_en: "Whole Coriander Seeds",
            aliases: ["धनिया दाना", "dhaniya dana"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-coriander-powder",
            name_hi: "धनिया पाउडर",
            name_en: "Coriander Powder",
            aliases: ["पिसा धनिया", "धनिया", "dhaniya powder"],
            subcategory: "powder_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cumin",
            name_hi: "जीरा",
            name_en: "Cumin Seeds",
            aliases: ["सफेद जीरा", "jeera"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cumin-powder",
            name_hi: "जीरा पाउडर",
            name_en: "Cumin Powder",
            aliases: ["पिसा जीरा", "jeera powder"],
            subcategory: "powder_spices",
            base_unit: "kg"
        },
        {
            id: "spice-black-cumin",
            name_hi: "शाही जीरा",
            name_en: "Black Cumin",
            aliases: ["काला जीरा", "शाही जीरा", "shahi jeera"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-mustard-seeds",
            name_hi: "राई",
            name_en: "Mustard Seeds",
            aliases: ["सरसों दाना", "काली सरसों", "rai"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-fenugreek",
            name_hi: "मेथी दाना",
            name_en: "Fenugreek Seeds",
            aliases: ["मेथी", "methi dana"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-fennel",
            name_hi: "सौंफ",
            name_en: "Fennel Seeds",
            aliases: ["सौंफ दाना", "saunf"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-carom",
            name_hi: "अजवाइन",
            name_en: "Carom Seeds",
            aliases: ["अजवायन", "ajwain"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-nigella",
            name_hi: "कलौंजी",
            name_en: "Nigella Seeds",
            aliases: ["मंगरैल", "kalonji"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-sesame",
            name_hi: "तिल",
            name_en: "Sesame Seeds",
            aliases: ["सफेद तिल", "काला तिल", "til"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-poppy",
            name_hi: "खसखस",
            name_en: "Poppy Seeds",
            aliases: ["पोस्ता दाना", "khas khas"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-black-pepper",
            name_hi: "काली मिर्च",
            name_en: "Black Pepper",
            aliases: ["गोल मिर्च", "black pepper"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },
        {
            id: "spice-white-pepper",
            name_hi: "सफेद मिर्च",
            name_en: "White Pepper",
            aliases: ["white pepper"],
            subcategory: "whole_spices",
            base_unit: "kg"
        },

        // WHOLE AROMATIC SPICES
        {
            id: "spice-cardamom-green",
            name_hi: "हरी इलायची",
            name_en: "Green Cardamom",
            aliases: ["छोटी इलायची", "इलायची दाना", "elaichi"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cardamom-black",
            name_hi: "बड़ी इलायची",
            name_en: "Black Cardamom",
            aliases: ["काली इलायची", "badi elaichi"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cloves",
            name_hi: "लौंग",
            name_en: "Cloves",
            aliases: ["लवंग", "laung"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cinnamon",
            name_hi: "दालचीनी",
            name_en: "Cinnamon",
            aliases: ["दालचीनी छाल", "dalchini"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-cassia",
            name_hi: "कासिया",
            name_en: "Cassia",
            aliases: ["कैसिया", "cassia bark"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-bay-leaf",
            name_hi: "तेजपत्ता",
            name_en: "Bay Leaf",
            aliases: ["तेज पत्ता", "tej patta"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-star-anise",
            name_hi: "चक्र फूल",
            name_en: "Star Anise",
            aliases: ["बादियान फूल", "chakri phool"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-nutmeg",
            name_hi: "जायफल",
            name_en: "Nutmeg",
            aliases: ["jaiphal"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-mace",
            name_hi: "जावित्री",
            name_en: "Mace",
            aliases: ["javitri"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-dry-ginger",
            name_hi: "सोंठ",
            name_en: "Dry Ginger",
            aliases: ["सूखी अदरक", "sonth"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },
        {
            id: "spice-asafoetida",
            name_hi: "हींग",
            name_en: "Asafoetida",
            aliases: ["कम्पाउंड हींग", "hing"],
            subcategory: "aromatic_spices",
            base_unit: "kg"
        },

        // SEEDS AND HERBS
        {
            id: "spice-dill",
            name_hi: "सोया साग के बीज",
            name_en: "Dill Seeds",
            aliases: ["सुवा बीज", "dill"],
            subcategory: "seeds",
            base_unit: "kg"
        },
        {
            id: "spice-celery",
            name_hi: "अजमोद बीज",
            name_en: "Celery Seeds",
            aliases: ["celery seed"],
            subcategory: "seeds",
            base_unit: "kg"
        },
        {
            id: "spice-dried-kasuri-methi",
            name_hi: "कसूरी मेथी",
            name_en: "Dried Fenugreek Leaves",
            aliases: ["सूखी मेथी पत्ती", "kasuri methi"],
            subcategory: "dried_herbs",
            base_unit: "kg"
        },
        {
            id: "spice-dried-mint",
            name_hi: "सूखा पुदीना",
            name_en: "Dried Mint",
            aliases: ["पुदीना पाउडर", "dry mint"],
            subcategory: "dried_herbs",
            base_unit: "kg"
        },

        // BLENDED MASALAS
        {
            id: "masala-garam",
            name_hi: "गरम मसाला",
            name_en: "Garam Masala",
            aliases: ["गरम मसाला पाउडर", "garam masala powder"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chhole",
            name_hi: "छोले मसाला",
            name_en: "Chole Masala",
            aliases: ["चना मसाला", "chana masala"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-pav-bhaji",
            name_hi: "पाव भाजी मसाला",
            name_en: "Pav Bhaji Masala",
            aliases: ["pav bhaji masala"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chana",
            name_hi: "चना मसाला",
            name_en: "Chana Masala",
            aliases: ["चना करी मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-sabzi",
            name_hi: "सब्जी मसाला",
            name_en: "Sabzi Masala",
            aliases: ["मिक्स सब्जी मसाला", "vegetable masala"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-paneer",
            name_hi: "पनीर मसाला",
            name_en: "Paneer Masala",
            aliases: ["पनीर बटर मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-kitchen-king",
            name_hi: "किचन किंग मसाला",
            name_en: "Kitchen King Masala",
            aliases: ["किचन किंग"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-biryani",
            name_hi: "बिरयानी मसाला",
            name_en: "Biryani Masala",
            aliases: ["हैदराबादी बिरयानी मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-pulao",
            name_hi: "पुलाव मसाला",
            name_en: "Pulao Masala",
            aliases: ["पुलाव मसाला पाउडर"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-meat",
            name_hi: "मीट मसाला",
            name_en: "Meat Masala",
            aliases: ["मटन मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chicken",
            name_hi: "चिकन मसाला",
            name_en: "Chicken Masala",
            aliases: ["चिकन करी मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-fish",
            name_hi: "फिश मसाला",
            name_en: "Fish Masala",
            aliases: ["मछली मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-sambar",
            name_hi: "सांभर मसाला",
            name_en: "Sambar Masala",
            aliases: ["सांभर पाउडर"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-rasam",
            name_hi: "रसम पाउडर",
            name_en: "Rasam Powder",
            aliases: ["रसम मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chaat",
            name_hi: "चाट मसाला",
            name_en: "Chaat Masala",
            aliases: ["चाट पाउडर"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-raita",
            name_hi: "रायता मसाला",
            name_en: "Raita Masala",
            aliases: ["रायता पाउडर"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-jaljeera",
            name_hi: "जलजीरा पाउडर",
            name_en: "Jaljeera Powder",
            aliases: ["जलजीरा मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-pani-puri",
            name_hi: "पानी पूरी मसाला",
            name_en: "Pani Puri Masala",
            aliases: ["गोलगप्पा मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-tandoori",
            name_hi: "तंदूरी मसाला",
            name_en: "Tandoori Masala",
            aliases: ["तंदूरी चिकन मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chai",
            name_hi: "चाय मसाला",
            name_en: "Tea Masala",
            aliases: ["चाय का मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },
        {
            id: "masala-pickle",
            name_hi: "अचार मसाला",
            name_en: "Pickle Masala",
            aliases: ["आचार मसाला"],
            subcategory: "blended_masala",
            base_unit: "kg"
        },

        // REGIONAL SPICE MIXES
        {
            id: "masala-kolhapuri",
            name_hi: "कोल्हापुरी मसाला",
            name_en: "Kolhapuri Masala",
            aliases: ["कोल्हापुरी तांबडा मसाला"],
            subcategory: "regional_masala",
            base_unit: "kg"
        },
        {
            id: "masala-goda",
            name_hi: "गोडा मसाला",
            name_en: "Goda Masala",
            aliases: ["महाराष्ट्रियन गोडा मसाला"],
            subcategory: "regional_masala",
            base_unit: "kg"
        },
        {
            id: "masala-chettinad",
            name_hi: "चेट्टीनाड मसाला",
            name_en: "Chettinad Masala",
            aliases: ["chettinad spice mix"],
            subcategory: "regional_masala",
            base_unit: "kg"
        },
        {
            id: "masala-guntur",
            name_hi: "गुंटूर मसाला",
            name_en: "Guntur Masala",
            aliases: ["आंध्र मसाला"],
            subcategory: "regional_masala",
            base_unit: "kg"
        },
        {
            id: "masala-kashmiri",
            name_hi: "कश्मीरी मसाला",
            name_en: "Kashmiri Masala",
            aliases: ["कश्मीरी करी मसाला"],
            subcategory: "regional_masala",
            base_unit: "kg"
        },

        // SALT AND SEASONING
        {
            id: "spice-black-salt",
            name_hi: "काला नमक",
            name_en: "Black Salt",
            aliases: ["बिट नमक", "काला सेंधा नमक"],
            subcategory: "salt",
            base_unit: "kg"
        },
        {
            id: "spice-rock-salt",
            name_hi: "सेंधा नमक",
            name_en: "Rock Salt",
            aliases: ["व्रत वाला नमक", "sendha namak"],
            subcategory: "salt",
            base_unit: "kg"
        },
        {
            id: "spice-seasoning",
            name_hi: "मिक्स सीजनिंग",
            name_en: "Mixed Seasoning",
            aliases: ["पिज्जा सीजनिंग", "इटालियन सीजनिंग"],
            subcategory: "seasoning",
            base_unit: "kg"
        },

        // LOOSE / LOCAL MILL PRODUCTS
        {
            id: "spice-local-ground-masala",
            name_hi: "स्थानीय पिसा मसाला",
            name_en: "Local Ground Masala",
            aliases: ["चक्की मसाला", "लोकल मसाला"],
            subcategory: "local_masala",
            base_unit: "kg"
        },
        {
            id: "spice-local-garam-masala",
            name_hi: "स्थानीय गरम मसाला",
            name_en: "Local Garam Masala",
            aliases: ["खुला गरम मसाला"],
            subcategory: "local_masala",
            base_unit: "kg"
        },
        {
            id: "spice-local-chilli-powder",
            name_hi: "स्थानीय लाल मिर्च पाउडर",
            name_en: "Local Chilli Powder",
            aliases: ["खुली लाल मिर्च", "लोकल मिर्च पाउडर"],
            subcategory: "local_masala",
            base_unit: "kg"
        },
        {
            id: "spice-local-turmeric",
            name_hi: "स्थानीय हल्दी पाउडर",
            name_en: "Local Turmeric Powder",
            aliases: ["खुली हल्दी", "लोकल हल्दी"],
            subcategory: "local_masala",
            base_unit: "kg"
        },
        {
            id: "spice-local-coriander",
            name_hi: "स्थानीय धनिया पाउडर",
            name_en: "Local Coriander Powder",
            aliases: ["खुला धनिया पाउडर"],
            subcategory: "local_masala",
            base_unit: "kg"
        }
    ];

    DB.registerBrands(CATEGORY, brands);
    DB.registerProducts(CATEGORY, products);

})(typeof window !== "undefined" ? window : globalThis);

/* ================= END CATEGORY 5 ================= */
 /* =========================================================
   CATEGORY 6: SUGAR, JAGGERY & SWEETENERS
   NEXUS MASTER FOOD DATABASE
   ========================================================= */

(function (global) {
    "use strict";

    const DB = global.NexusFoodMasterDatabase;
    if (!DB) {
        throw new Error("NexusFoodMasterDatabase engine not found");
    }

    const CATEGORY = "sugar_jaggery_sweeteners";

    const brands = [
        "Madhur",
        "Dhampur Green",
        "Dhampure",
        "Dalmia",
        "Shree Renuka",
        "Uttam",
        "Triveni",
        "Parry's",
        "Mawana",
        "EID Parry",
        "24 Mantra Organic",
        "Organic Tattva",
        "Tata Sampann",
        "Patanjali",
        "Dabur",
        "Zandu",
        "Apis",
        "Saffola",
        "Lion",
        "Little Bee",
        "Urban Platter",
        "So Sweet",
        "Local Sugar Mill",
        "Local Jaggery Maker",
        "Local Honey Producer",
        "Loose / Unbranded"
    ];

    const products = [
        // WHITE SUGAR
        {
            id: "sugar-white-granulated",
            name_hi: "सफेद दानेदार चीनी",
            name_en: "White Granulated Sugar",
            aliases: ["सफेद चीनी", "दाने वाली चीनी", "chini", "sugar"],
            subcategory: "white_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-crystal",
            name_hi: "क्रिस्टल चीनी",
            name_en: "Crystal Sugar",
            aliases: ["मोटी चीनी", "मोटे दाने की चीनी"],
            subcategory: "white_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-fine",
            name_hi: "बारीक चीनी",
            name_en: "Fine Sugar",
            aliases: ["बारीक दाने वाली चीनी"],
            subcategory: "white_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-powder",
            name_hi: "पिसी हुई चीनी",
            name_en: "Powdered Sugar",
            aliases: ["पाउडर शुगर", "icing sugar"],
            subcategory: "powdered_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-caster",
            name_hi: "कैस्टर शुगर",
            name_en: "Caster Sugar",
            aliases: ["कास्टर शुगर", "बारीक बेकरी चीनी"],
            subcategory: "special_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-cubes",
            name_hi: "चीनी के क्यूब",
            name_en: "Sugar Cubes",
            aliases: ["शुगर क्यूब"],
            subcategory: "special_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-sachets",
            name_hi: "चीनी के सैशे",
            name_en: "Sugar Sachets",
            aliases: ["छोटे चीनी पैकेट"],
            subcategory: "special_sugar",
            base_unit: "pack"
        },

        // RAW AND BROWN SUGAR
        {
            id: "sugar-brown",
            name_hi: "ब्राउन शुगर",
            name_en: "Brown Sugar",
            aliases: ["भूरी चीनी", "brown chini"],
            subcategory: "brown_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-raw",
            name_hi: "कच्ची चीनी",
            name_en: "Raw Sugar",
            aliases: ["रॉ शुगर"],
            subcategory: "raw_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-demerara",
            name_hi: "डेमेरारा शुगर",
            name_en: "Demerara Sugar",
            aliases: ["डेमेरारा चीनी"],
            subcategory: "special_sugar",
            base_unit: "kg"
        },
        {
            id: "sugar-muscovado",
            name_hi: "मस्कोवाडो शुगर",
            name_en: "Muscovado Sugar",
            aliases: ["मस्कोवाडो चीनी"],
            subcategory: "special_sugar",
            base_unit: "kg"
        },

        // JAGGERY
        {
            id: "jaggery-solid",
            name_hi: "गुड़",
            name_en: "Jaggery",
            aliases: ["देसी गुड़", "गुड़ की भेली", "gur", "gud"],
            subcategory: "jaggery",
            base_unit: "kg"
        },
        {
            id: "jaggery-powder",
            name_hi: "गुड़ पाउडर",
            name_en: "Jaggery Powder",
            aliases: ["पिसा गुड़", "गुड़ का चूर्ण"],
            subcategory: "jaggery",
            base_unit: "kg"
        },
        {
            id: "jaggery-liquid",
            name_hi: "तरल गुड़",
            name_en: "Liquid Jaggery",
            aliases: ["गुड़ का सिरप", "liquid gur"],
            subcategory: "jaggery",
            base_unit: "litre"
        },
        {
            id: "jaggery-cube",
            name_hi: "गुड़ के छोटे टुकड़े",
            name_en: "Jaggery Cubes",
            aliases: ["गुड़ क्यूब", "छोटा गुड़"],
            subcategory: "jaggery",
            base_unit: "kg"
        },
        {
            id: "jaggery-palm",
            name_hi: "ताड़ का गुड़",
            name_en: "Palm Jaggery",
            aliases: ["पाम गुड़", "ताड़ गुड़"],
            subcategory: "traditional_jaggery",
            base_unit: "kg"
        },
        {
            id: "jaggery-coconut",
            name_hi: "नारियल का गुड़",
            name_en: "Coconut Jaggery",
            aliases: ["कोकोनट गुड़"],
            subcategory: "traditional_jaggery",
            base_unit: "kg"
        },
        {
            id: "jaggery-date",
            name_hi: "खजूर का गुड़",
            name_en: "Date Palm Jaggery",
            aliases: ["खजूर गुड़", "नोलन गुड़"],
            subcategory: "traditional_jaggery",
            base_unit: "kg"
        },

        // HONEY
        {
            id: "honey-pure",
            name_hi: "शुद्ध शहद",
            name_en: "Pure Honey",
            aliases: ["मधु", "शहद", "honey"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-multiflora",
            name_hi: "मल्टीफ्लोरा शहद",
            name_en: "Multiflora Honey",
            aliases: ["फूलों का शहद"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-mustard",
            name_hi: "सरसों का शहद",
            name_en: "Mustard Honey",
            aliases: ["मस्टर्ड हनी"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-eucalyptus",
            name_hi: "नीलगिरी शहद",
            name_en: "Eucalyptus Honey",
            aliases: ["यूकेलिप्टस हनी"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-forest",
            name_hi: "वन शहद",
            name_en: "Forest Honey",
            aliases: ["जंगली शहद"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-organic",
            name_hi: "ऑर्गेनिक शहद",
            name_en: "Organic Honey",
            aliases: ["जैविक शहद"],
            subcategory: "honey",
            base_unit: "kg"
        },
        {
            id: "honey-comb",
            name_hi: "छत्ते वाला शहद",
            name_en: "Honeycomb",
            aliases: ["शहद का छत्ता"],
            subcategory: "honey",
            base_unit: "kg"
        },

        // NATURAL SWEETENERS
        {
            id: "sweetener-stevia",
            name_hi: "स्टीविया स्वीटनर",
            name_en: "Stevia Sweetener",
            aliases: ["स्टीविया", "stevia"],
            subcategory: "natural_sweetener",
            base_unit: "pack"
        },
        {
            id: "sweetener-date-syrup",
            name_hi: "खजूर सिरप",
            name_en: "Date Syrup",
            aliases: ["डेट सिरप"],
            subcategory: "natural_sweetener",
            base_unit: "litre"
        },
        {
            id: "sweetener-maple",
            name_hi: "मेपल सिरप",
            name_en: "Maple Syrup",
            aliases: ["maple syrup"],
            subcategory: "natural_sweetener",
            base_unit: "litre"
        },
        {
            id: "sweetener-agave",
            name_hi: "अगेव सिरप",
            name_en: "Agave Syrup",
            aliases: ["agave nectar"],
            subcategory: "natural_sweetener",
            base_unit: "litre"
        },
        {
            id: "sweetener-coconut-sugar",
            name_hi: "नारियल चीनी",
            name_en: "Coconut Sugar",
            aliases: ["कोकोनट शुगर"],
            subcategory: "natural_sweetener",
            base_unit: "kg"
        },
        {
            id: "sweetener-palm-sugar",
            name_hi: "ताड़ की चीनी",
            name_en: "Palm Sugar",
            aliases: ["पाम शुगर"],
            subcategory: "natural_sweetener",
            base_unit: "kg"
        },
        {
            id: "sweetener-date-powder",
            name_hi: "खजूर पाउडर",
            name_en: "Date Powder",
            aliases: ["सूखा खजूर पाउडर"],
            subcategory: "natural_sweetener",
            base_unit: "kg"
        },

        // TRADITIONAL SWEET PRODUCTS
        {
            id: "sweetener-mishri",
            name_hi: "मिश्री",
            name_en: "Rock Sugar / Mishri",
            aliases: ["मिश्री दाना", "मिश्री डली"],
            subcategory: "traditional_sweetener",
            base_unit: "kg"
        },
        {
            id: "sweetener-khadi-sakhar",
            name_hi: "खड़ी शक्कर",
            name_en: "Khadi Shakkar",
            aliases: ["खड़ी चीनी", "खांड"],
            subcategory: "traditional_sweetener",
            base_unit: "kg"
        },
        {
            id: "sweetener-khand",
            name_hi: "खांड",
            name_en: "Khand Sugar",
            aliases: ["देशी खांड", "खांडसारी"],
            subcategory: "traditional_sweetener",
            base_unit: "kg"
        },

        // LOCAL / LOOSE PRODUCTS
        {
            id: "sugar-local-loose",
            name_hi: "स्थानीय खुली चीनी",
            name_en: "Local Loose Sugar",
            aliases: ["खुली सफेद चीनी", "लोकल चीनी"],
            subcategory: "local_sugar",
            base_unit: "kg"
        },
        {
            id: "jaggery-local-loose",
            name_hi: "स्थानीय खुला गुड़",
            name_en: "Local Loose Jaggery",
            aliases: ["खुला देसी गुड़", "लोकल गुड़"],
            subcategory: "local_jaggery",
            base_unit: "kg"
        },
        {
            id: "honey-local",
            name_hi: "स्थानीय उत्पादक का शहद",
            name_en: "Local Producer Honey",
            aliases: ["लोकल शहद", "खुला शहद"],
            subcategory: "local_honey",
            base_unit: "kg"
        }
    ];

    DB.registerBrands(CATEGORY, brands);
    DB.registerProducts(CATEGORY, products);

})(typeof window !== "undefined" ? window : globalThis);

/* ================= END CATEGORY 6 ================= */
 /* =========================================================
   CATEGORY 7: NAMKEEN, SNACKS & CHIPS
   NEXUS MASTER FOOD DATABASE
   ========================================================= */

(function (global) {
    "use strict";

    const DB = global.NexusFoodMasterDatabase;
    if (!DB) {
        throw new Error("NexusFoodMasterDatabase engine not found");
    }

    const CATEGORY = "namkeen_snacks_chips";

    const brands = [
        "Haldiram's",
        "Bikaji",
        "Balaji",
        "Bikano",
        "Lays",
        "Kurkure",
        "Uncle Chipps",
        "Pringles",
        "Doritos",
        "Too Yumm",
        "Yellow Diamond",
        "Act II",
        "Cornitos",
        "Open Secret",
        "Chheda's",
        "Garden",
        "Gopal",
        "Aakash",
        "Jabsons",
        "Bambino",
        "MTR",
        "Adukale",
        "Dukes",
        "Crax",
        "Parle",
        "ITC Bingo",
        "Peppy",
        "Unibic",
        "Local Namkeen Maker",
        "Local Farsan Shop",
        "Loose / Unbranded"
    ];

    const products = [
        // BASIC NAMKEEN
        {
            id: "snack-bhujia",
            name_hi: "भुजिया",
            name_en: "Bhujia",
            aliases: ["भुजिया नमकीन", "sev bhujia"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-aloo-bhujia",
            name_hi: "आलू भुजिया",
            name_en: "Aloo Bhujia",
            aliases: ["आलू सेव", "aloo sev"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-plain-sev",
            name_hi: "सादा सेव",
            name_en: "Plain Sev",
            aliases: ["सेव", "plain namkeen sev"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-ratlami-sev",
            name_hi: "रतलामी सेव",
            name_en: "Ratlami Sev",
            aliases: ["रतलामी नमकीन"],
            subcategory: "regional_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-gathiya",
            name_hi: "गांठिया",
            name_en: "Gathiya",
            aliases: ["गाठिया", "bhavnagari gathiya"],
            subcategory: "regional_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-fafda",
            name_hi: "फाफड़ा",
            name_en: "Fafda",
            aliases: ["गुजराती फाफड़ा"],
            subcategory: "regional_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-mixture",
            name_hi: "मिक्सचर नमकीन",
            name_en: "Namkeen Mixture",
            aliases: ["मिक्स नमकीन", "mixture"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-navratan-mixture",
            name_hi: "नवरत्न मिक्सचर",
            name_en: "Navratan Mixture",
            aliases: ["नवरत्न नमकीन"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-khatta-meetha",
            name_hi: "खट्टा मीठा नमकीन",
            name_en: "Khatta Meetha",
            aliases: ["खट्टा मीठा मिक्सचर"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-chana-jor",
            name_hi: "चना जोर गरम",
            name_en: "Chana Jor Garam",
            aliases: ["चना जोर", "chana jor"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-dal-moth",
            name_hi: "दालमोठ",
            name_en: "Dal Moth",
            aliases: ["दाल मोठ", "dal moth"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-moong-dal",
            name_hi: "मूंग दाल नमकीन",
            name_en: "Moong Dal Namkeen",
            aliases: ["नमकीन मूंग दाल"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-chana-dal",
            name_hi: "चना दाल नमकीन",
            name_en: "Chana Dal Namkeen",
            aliases: ["मसाला चना दाल"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-peanut-masala",
            name_hi: "मसाला मूंगफली",
            name_en: "Masala Peanuts",
            aliases: ["मसाला दाना", "spicy peanuts"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-peanut-salted",
            name_hi: "नमकीन मूंगफली",
            name_en: "Salted Peanuts",
            aliases: ["सॉल्टेड पीनट"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-masala-chana",
            name_hi: "मसाला चना",
            name_en: "Masala Chana",
            aliases: ["भुना मसाला चना"],
            subcategory: "namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-roasted-chana",
            name_hi: "भुना चना",
            name_en: "Roasted Chana",
            aliases: ["भुना हुआ चना", "भुना काला चना"],
            subcategory: "namkeen",
            base_unit: "kg"
        },

        // REGIONAL FARSAN
        {
            id: "snack-dhokla",
            name_hi: "ढोकला",
            name_en: "Dhokla",
            aliases: ["खमण ढोकला", "khaman"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-khandvi",
            name_hi: "खांडवी",
            name_en: "Khandvi",
            aliases: ["सुरळी वड़ी"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-kachori",
            name_hi: "कचौरी",
            name_en: "Kachori",
            aliases: ["मसाला कचौरी"],
            subcategory: "farsan",
            base_unit: "piece"
        },
        {
            id: "snack-mini-kachori",
            name_hi: "मिनी कचौरी",
            name_en: "Mini Kachori",
            aliases: ["छोटी कचौरी"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-samosa",
            name_hi: "समोसा",
            name_en: "Samosa",
            aliases: ["आलू समोसा"],
            subcategory: "farsan",
            base_unit: "piece"
        },
        {
            id: "snack-mathri",
            name_hi: "मठरी",
            name_en: "Mathri",
            aliases: ["नमकीन मठरी"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-namak-para",
            name_hi: "नमकपारे",
            name_en: "Namak Para",
            aliases: ["नमक पारे", "निमकी"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-shakkar-para",
            name_hi: "शक्करपारे",
            name_en: "Shakkar Para",
            aliases: ["मीठे पारे"],
            subcategory: "farsan",
            base_unit: "kg"
        },
        {
            id: "snack-murukku",
            name_hi: "मुरुक्कू",
            name_en: "Murukku",
            aliases: ["चकली", "मुरुकु"],
            subcategory: "regional_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-thattai",
            name_hi: "थट्टई",
            name_en: "Thattai",
            aliases: ["तमिल नमकीन"],
            subcategory: "regional_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-banana-chips",
            name_hi: "केले के चिप्स",
            name_en: "Banana Chips",
            aliases: ["केला वेफर्स", "banana wafers"],
            subcategory: "chips",
            base_unit: "kg"
        },

        // POTATO AND OTHER CHIPS
        {
            id: "snack-potato-chips",
            name_hi: "आलू चिप्स",
            name_en: "Potato Chips",
            aliases: ["पोटैटो चिप्स", "आलू वेफर्स"],
            subcategory: "chips",
            base_unit: "pack"
        },
        {
            id: "snack-masala-chips",
            name_hi: "मसाला चिप्स",
            name_en: "Masala Chips",
            aliases: ["मसाला आलू चिप्स"],
            subcategory: "chips",
            base_unit: "pack"
        },
        {
            id: "snack-salted-chips",
            name_hi: "सॉल्टेड चिप्स",
            name_en: "Salted Chips",
            aliases: ["नमकीन आलू चिप्स"],
            subcategory: "chips",
            base_unit: "pack"
        },
        {
            id: "snack-cream-onion-chips",
            name_hi: "क्रीम एंड अनियन चिप्स",
            name_en: "Cream & Onion Chips",
            aliases: ["क्रीम प्याज चिप्स"],
            subcategory: "chips",
            base_unit: "pack"
        },
        {
            id: "snack-tomato-chips",
            name_hi: "टमाटर फ्लेवर चिप्स",
            name_en: "Tomato Flavoured Chips",
            aliases: ["टोमैटो चिप्स"],
            subcategory: "chips",
            base_unit: "pack"
        },
        {
            id: "snack-tapioca-chips",
            name_hi: "कसावा चिप्स",
            name_en: "Tapioca Chips",
            aliases: ["टैपिओका चिप्स"],
            subcategory: "chips",
            base_unit: "kg"
        },
        {
            id: "snack-sweet-potato-chips",
            name_hi: "शकरकंद चिप्स",
            name_en: "Sweet Potato Chips",
            aliases: ["स्वीट पोटैटो चिप्स"],
            subcategory: "chips",
            base_unit: "kg"
        },

        // PUFFED AND EXTRUDED SNACKS
        {
            id: "snack-puffed-rice",
            name_hi: "मुरमुरा",
            name_en: "Puffed Rice",
            aliases: ["लाई", "मुरमुरे", "murmura"],
            subcategory: "puffed_snacks",
            base_unit: "kg"
        },
        {
            id: "snack-puffed-corn",
            name_hi: "कॉर्न पफ",
            name_en: "Corn Puffs",
            aliases: ["मक्का पफ"],
            subcategory: "extruded_snacks",
            base_unit: "pack"
        },
        {
            id: "snack-cheese-balls",
            name_hi: "चीज बॉल्स",
            name_en: "Cheese Balls",
            aliases: ["चीज पफ"],
            subcategory: "extruded_snacks",
            base_unit: "pack"
        },
        {
            id: "snack-masala-rings",
            name_hi: "मसाला रिंग्स",
            name_en: "Masala Rings",
            aliases: ["क्रंची रिंग्स"],
            subcategory: "extruded_snacks",
            base_unit: "pack"
        },
        {
            id: "snack-kurkure-style",
            name_hi: "कुरकुरे स्नैक",
            name_en: "Puffed Corn Snack",
            aliases: ["मसाला कुरकुरे", "corn sticks"],
            subcategory: "extruded_snacks",
            base_unit: "pack"
        },

        // POPCORN
        {
            id: "snack-popcorn-plain",
            name_hi: "सादा पॉपकॉर्न",
            name_en: "Plain Popcorn",
            aliases: ["पॉपकॉर्न दाना"],
            subcategory: "popcorn",
            base_unit: "kg"
        },
        {
            id: "snack-popcorn-butter",
            name_hi: "बटर पॉपकॉर्न",
            name_en: "Butter Popcorn",
            aliases: ["मक्खन पॉपकॉर्न"],
            subcategory: "popcorn",
            base_unit: "pack"
        },
        {
            id: "snack-popcorn-cheese",
            name_hi: "चीज पॉपकॉर्न",
            name_en: "Cheese Popcorn",
            aliases: ["चीज फ्लेवर पॉपकॉर्न"],
            subcategory: "popcorn",
            base_unit: "pack"
        },

        // PAPAD AND FRYUMS
        {
            id: "snack-urad-papad",
            name_hi: "उड़द पापड़",
            name_en: "Urad Papad",
            aliases: ["उड़द दाल पापड़"],
            subcategory: "papad_fryums",
            base_unit: "kg"
        },
        {
            id: "snack-moong-papad",
            name_hi: "मूंग पापड़",
            name_en: "Moong Papad",
            aliases: ["मूंग दाल पापड़"],
            subcategory: "papad_fryums",
            base_unit: "kg"
        },
        {
            id: "snack-potato-papad",
            name_hi: "आलू पापड़",
            name_en: "Potato Papad",
            aliases: ["आलू के पापड़"],
            subcategory: "papad_fryums",
            base_unit: "kg"
        },
        {
            id: "snack-fryums",
            name_hi: "फ्रायम्स",
            name_en: "Fryums",
            aliases: ["फ्राईम्स", "पाइप फ्रायम्स"],
            subcategory: "papad_fryums",
            base_unit: "kg"
        },
        {
            id: "snack-sabudana-papad",
            name_hi: "साबूदाना पापड़",
            name_en: "Sabudana Papad",
            aliases: ["साबूदाना पापड़ी"],
            subcategory: "papad_fryums",
            base_unit: "kg"
        },

        // LOCAL LOOSE NAMKEEN
        {
            id: "snack-local-mixture",
            name_hi: "स्थानीय खुला मिक्सचर",
            name_en: "Local Loose Mixture",
            aliases: ["लोकल मिक्सचर", "खुला नमकीन"],
            subcategory: "local_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-local-bhujia",
            name_hi: "स्थानीय खुली भुजिया",
            name_en: "Local Loose Bhujia",
            aliases: ["लोकल भुजिया", "खुली सेव"],
            subcategory: "local_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-local-sev",
            name_hi: "स्थानीय खुली सेव",
            name_en: "Local Loose Sev",
            aliases: ["खुला सेव", "लोकल सेव"],
            subcategory: "local_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-local-chips",
            name_hi: "स्थानीय आलू चिप्स",
            name_en: "Local Potato Chips",
            aliases: ["लोकल वेफर्स", "खुले आलू चिप्स"],
            subcategory: "local_namkeen",
            base_unit: "kg"
        },
        {
            id: "snack-local-farsan",
            name_hi: "स्थानीय फरसाण",
            name_en: "Local Farsan",
            aliases: ["लोकल नमकीन", "दुकान का नमकीन"],
            subcategory: "local_namkeen",
            base_unit: "kg"
        }
    ];

    DB.registerBrands(CATEGORY, brands);
    DB.registerProducts(CATEGORY, products);

})(typeof window !== "undefined" ? window : globalThis);

/* ================= END CATEGORY 7 ================= */ 
 /* =========================================================
   CATEGORY 8: BISCUITS, COOKIES, RUSK & BAKERY
   NEXUS MASTER FOOD DATABASE
   ========================================================= */

(function (global) {
    "use strict";

    const DB = global.NexusFoodMasterDatabase;
    if (!DB) {
        throw new Error("NexusFoodMasterDatabase engine not found");
    }

    const CATEGORY = "biscuits_cookies_bakery";

    const brands = [
        "Parle",
        "Britannia",
        "Sunfeast",
        "ITC",
        "Oreo",
        "Cadbury",
        "Mondelez",
        "Unibic",
        "Priyagold",
        "Cremica",
        "Bisk Farm",
        "Anmol",
        "Dukes",
        "McVitie's",
        "Lotus Biscoff",
        "Sunfeast Mom's Magic",
        "Hide & Seek",
        "Bourbon",
        "Good Day",
        "Marie Gold",
        "50-50",
        "Treat",
        "Dark Fantasy",
        "Jim Jam",
        "Milk Bikis",
        "Tiger",
        "Little Hearts",
        "Krackjack",
        "Nice",
        "Patanjali",
        "Haldiram's",
        "Modern",
        "English Oven",
        "Harvest Gold",
        "Monginis",
        "Local Bakery",
        "Local Biscuit Maker",
        "Loose / Unbranded"
    ];

    const products = [
        // BASIC BISCUITS
        {
            id: "biscuit-glucose",
            name_hi: "ग्लूकोज बिस्कुट",
            name_en: "Glucose Biscuits",
            aliases: ["ग्लूकोज", "पारले जी टाइप बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-marie",
            name_hi: "मारी बिस्कुट",
            name_en: "Marie Biscuits",
            aliases: ["मारी गोल्ड टाइप", "मैरी बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-salted",
            name_hi: "नमकीन बिस्कुट",
            name_en: "Salted Biscuits",
            aliases: ["सॉल्टेड बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-sweet",
            name_hi: "मीठे बिस्कुट",
            name_en: "Sweet Biscuits",
            aliases: ["मीठा बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-tea",
            name_hi: "चाय बिस्कुट",
            name_en: "Tea Biscuits",
            aliases: ["टी बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-milk",
            name_hi: "मिल्क बिस्कुट",
            name_en: "Milk Biscuits",
            aliases: ["दूध बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-coconut",
            name_hi: "नारियल बिस्कुट",
            name_en: "Coconut Biscuits",
            aliases: ["कोकोनट बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-jeera",
            name_hi: "जीरा बिस्कुट",
            name_en: "Jeera Biscuits",
            aliases: ["जीरा कुकीज"],
            subcategory: "biscuits",
            base_unit: "pack"
        },

        // CREAM AND SANDWICH BISCUITS
        {
            id: "biscuit-cream",
            name_hi: "क्रीम बिस्कुट",
            name_en: "Cream Biscuits",
            aliases: ["क्रीम वाले बिस्कुट"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-chocolate-cream",
            name_hi: "चॉकलेट क्रीम बिस्कुट",
            name_en: "Chocolate Cream Biscuits",
            aliases: ["चॉकलेट क्रीम"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-vanilla-cream",
            name_hi: "वनीला क्रीम बिस्कुट",
            name_en: "Vanilla Cream Biscuits",
            aliases: ["वेनिला क्रीम"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-strawberry-cream",
            name_hi: "स्ट्रॉबेरी क्रीम बिस्कुट",
            name_en: "Strawberry Cream Biscuits",
            aliases: ["स्ट्रॉबेरी बिस्कुट"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-orange-cream",
            name_hi: "ऑरेंज क्रीम बिस्कुट",
            name_en: "Orange Cream Biscuits",
            aliases: ["संतरा क्रीम बिस्कुट"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-bourbon",
            name_hi: "बोर्बन बिस्कुट",
            name_en: "Bourbon Biscuits",
            aliases: ["चॉकलेट बोर्बन"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-jam",
            name_hi: "जैम बिस्कुट",
            name_en: "Jam Biscuits",
            aliases: ["जैम सैंडविच बिस्कुट"],
            subcategory: "cream_biscuits",
            base_unit: "pack"
        },

        // COOKIES
        {
            id: "cookie-chocolate-chip",
            name_hi: "चॉकलेट चिप कुकीज़",
            name_en: "Chocolate Chip Cookies",
            aliases: ["चोको चिप कुकीज"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-butter",
            name_hi: "बटर कुकीज़",
            name_en: "Butter Cookies",
            aliases: ["मक्खन कुकीज"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-cashew",
            name_hi: "काजू कुकीज़",
            name_en: "Cashew Cookies",
            aliases: ["काजू बिस्कुट"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-almond",
            name_hi: "बादाम कुकीज़",
            name_en: "Almond Cookies",
            aliases: ["बादाम बिस्कुट"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-oat",
            name_hi: "ओट्स कुकीज़",
            name_en: "Oat Cookies",
            aliases: ["ओटमील कुकीज"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-ragi",
            name_hi: "रागी कुकीज़",
            name_en: "Ragi Cookies",
            aliases: ["मंडुआ कुकीज"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-multigrain",
            name_hi: "मल्टीग्रेन कुकीज़",
            name_en: "Multigrain Cookies",
            aliases: ["मल्टीग्रेन बिस्कुट"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-digestive",
            name_hi: "डाइजेस्टिव बिस्कुट",
            name_en: "Digestive Biscuits",
            aliases: ["हेल्थ बिस्कुट"],
            subcategory: "cookies",
            base_unit: "pack"
        },
        {
            id: "cookie-sugar-free",
            name_hi: "शुगर फ्री कुकीज़",
            name_en: "Sugar Free Cookies",
            aliases: ["बिना चीनी कुकीज"],
            subcategory: "cookies",
            base_unit: "pack"
        },

        // PREMIUM BISCUITS
        {
            id: "biscuit-chocolate",
            name_hi: "चॉकलेट बिस्कुट",
            name_en: "Chocolate Biscuits",
            aliases: ["चॉकलेट बिस्किट"],
            subcategory: "premium_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-dark-chocolate",
            name_hi: "डार्क चॉकलेट बिस्कुट",
            name_en: "Dark Chocolate Biscuits",
            aliases: ["डार्क चॉकलेट कुकीज"],
            subcategory: "premium_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-wafer",
            name_hi: "वेफर बिस्कुट",
            name_en: "Wafer Biscuits",
            aliases: ["वेफर्स", "क्रीम वेफर"],
            subcategory: "premium_biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-nice",
            name_hi: "नाइस बिस्कुट",
            name_en: "Nice Biscuits",
            aliases: ["चीनी लगे बिस्कुट"],
            subcategory: "biscuits",
            base_unit: "pack"
        },
        {
            id: "biscuit-heart",
            name_hi: "हार्ट शेप बिस्कुट",
            name_en: "Heart Shaped Biscuits",
            aliases: ["लिटिल हार्ट्स"],
            subcategory: "premium_biscuits",
            base_unit: "pack"
        },

        // RUSK AND TOAST
        {
            id: "rusk-plain",
            name_hi: "सादा रस्क",
            name_en: "Plain Rusk",
            aliases: ["टोस्ट", "सादा टोस्ट"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },
        {
            id: "rusk-milk",
            name_hi: "मिल्क रस्क",
            name_en: "Milk Rusk",
            aliases: ["दूध वाला रस्क"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },
        {
            id: "rusk-suji",
            name_hi: "सूजी रस्क",
            name_en: "Semolina Rusk",
            aliases: ["रवा रस्क"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },
        {
            id: "rusk-elaichi",
            name_hi: "इलायची रस्क",
            name_en: "Cardamom Rusk",
            aliases: ["इलायची टोस्ट"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },
        {
            id: "rusk-fruit",
            name_hi: "फ्रूट रस्क",
            name_en: "Fruit Rusk",
            aliases: ["फ्रूट टोस्ट"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },

        // BREAD AND BAKERY
        {
            id: "bakery-white-bread",
            name_hi: "सफेद ब्रेड",
            name_en: "White Bread",
            aliases: ["सादा ब्रेड", "ब्रेड"],
            subcategory: "bread",
            base_unit: "loaf"
        },
        {
            id: "bakery-brown-bread",
            name_hi: "ब्राउन ब्रेड",
            name_en: "Brown Bread",
            aliases: ["गेहूं ब्रेड"],
            subcategory: "bread",
            base_unit: "loaf"
        },
        {
            id: "bakery-whole-wheat-bread",
            name_hi: "होल व्हीट ब्रेड",
            name_en: "Whole Wheat Bread",
            aliases: ["आटे की ब्रेड"],
            subcategory: "bread",
            base_unit: "loaf"
        },
        {
            id: "bakery-multigrain-bread",
            name_hi: "मल्टीग्रेन ब्रेड",
            name_en: "Multigrain Bread",
            aliases: ["मिश्रित अनाज ब्रेड"],
            subcategory: "bread",
            base_unit: "loaf"
        },
        {
            id: "bakery-milk-bread",
            name_hi: "मिल्क ब्रेड",
            name_en: "Milk Bread",
            aliases: ["दूध ब्रेड"],
            subcategory: "bread",
            base_unit: "loaf"
        },
        {
            id: "bakery-bun",
            name_hi: "बन",
            name_en: "Bun",
            aliases: ["मीठा बन", "पाव बन"],
            subcategory: "bread",
            base_unit: "piece"
        },
        {
            id: "bakery-pav",
            name_hi: "पाव",
            name_en: "Pav",
            aliases: ["पाव ब्रेड"],
            subcategory: "bread",
            base_unit: "pack"
        },
        {
            id: "bakery-burger-bun",
            name_hi: "बर्गर बन",
            name_en: "Burger Bun",
            aliases: ["बर्गर ब्रेड"],
            subcategory: "bread",
            base_unit: "pack"
        },
        {
            id: "bakery-pizza-base",
            name_hi: "पिज्जा बेस",
            name_en: "Pizza Base",
            aliases: ["पिज्जा ब्रेड"],
            subcategory: "bakery",
            base_unit: "pack"
        },
        {
            id: "bakery-bread-crumbs",
            name_hi: "ब्रेड क्रम्ब्स",
            name_en: "Bread Crumbs",
            aliases: ["ब्रेड का चूरा"],
            subcategory: "bakery",
            base_unit: "kg"
        },

        // CAKES AND SWEET BAKERY
        {
            id: "bakery-sponge-cake",
            name_hi: "स्पंज केक",
            name_en: "Sponge Cake",
            aliases: ["सादा केक"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-fruit-cake",
            name_hi: "फ्रूट केक",
            name_en: "Fruit Cake",
            aliases: ["मिक्स फ्रूट केक"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-chocolate-cake",
            name_hi: "चॉकलेट केक",
            name_en: "Chocolate Cake",
            aliases: ["चोको केक"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-cupcake",
            name_hi: "कप केक",
            name_en: "Cupcake",
            aliases: ["कपकेक"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-muffin",
            name_hi: "मफिन",
            name_en: "Muffin",
            aliases: ["चॉकलेट मफिन"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-donut",
            name_hi: "डोनट",
            name_en: "Donut",
            aliases: ["डोनट्स"],
            subcategory: "cakes",
            base_unit: "piece"
        },
        {
            id: "bakery-khari",
            name_hi: "खारी बिस्कुट",
            name_en: "Khari Biscuit",
            aliases: ["पफ खारी"],
            subcategory: "bakery",
            base_unit: "pack"
        },
        {
            id: "bakery-toast",
            name_hi: "बेकरी टोस्ट",
            name_en: "Bakery Toast",
            aliases: ["कड़क टोस्ट"],
            subcategory: "rusk_toast",
            base_unit: "pack"
        },

        // LOCAL BAKERY PRODUCTS
        {
            id: "bakery-local-bread",
            name_hi: "स्थानीय बेकरी ब्रेड",
            name_en: "Local Bakery Bread",
            aliases: ["लोकल ब्रेड", "ताजा ब्रेड"],
            subcategory: "local_bakery",
            base_unit: "loaf"
        },
        {
            id: "bakery-local-biscuit",
            name_hi: "स्थानीय बेकरी बिस्कुट",
            name_en: "Local Bakery Biscuits",
            aliases: ["लोकल बिस्कुट", "खुले बिस्कुट"],
            subcategory: "local_bakery",
            base_unit: "kg"
        },
        {
            id: "bakery-local-rusk",
            name_hi: "स्थानीय बेकरी रस्क",
            name_en: "Local Bakery Rusk",
            aliases: ["लोकल टोस्ट"],
            subcategory: "local_bakery",
            base_unit: "kg"
        },
        {
            id: "bakery-local-cake",
            name_hi: "स्थानीय बेकरी केक",
            name_en: "Local Bakery Cake",
            aliases: ["लोकल केक", "दुकान का केक"],
            subcategory: "local_bakery",
            base_unit: "piece"
        }
    ];

    DB.registerBrands(CATEGORY, brands);
    DB.registerProducts(CATEGORY, products);

})(typeof window !== "undefined" ? window : globalThis);

/* ================= END CATEGORY 8 ================= */
 /* ============================================================
   CATEGORY 09: TEA, COFFEE & BEVERAGES
   NEXUS FOOD MASTER DATABASE
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "tea_coffee_beverages";

  const brands = [
    "Tata Tea",
    "Tata Tea Premium",
    "Tata Tea Gold",
    "Tata Tea Agni",
    "Brooke Bond",
    "Red Label",
    "Taaza",
    "3 Roses",
    "Wagh Bakri",
    "Society Tea",
    "Girnar",
    "Goodricke",
    "Duncan's",
    "Tetley",
    "Twinings",
    "Lipton",
    "Organic India",
    "Vahdam",
    "Tea Trunk",
    "Chai Point",
    "Aasam Tea",
    "Darjeeling Tea",
    "Nilgiri Tea",
    "Local Tea Supplier",
    "Loose Tea / Unbranded",

    "Nescafe",
    "Bru",
    "Continental",
    "Tata Coffee",
    "Davidoff",
    "Lavazza",
    "Sleepy Owl",
    "Blue Tokai",
    "Rage Coffee",
    "Country Bean",
    "Bevzilla",
    "Local Coffee Roaster",
    "Loose Coffee / Unbranded",

    "Coca-Cola",
    "Thums Up",
    "Sprite",
    "Fanta",
    "Limca",
    "Pepsi",
    "7UP",
    "Mirinda",
    "Mountain Dew",
    "Maaza",
    "Slice",
    "Frooti",
    "Appy",
    "Appy Fizz",
    "Paper Boat",
    "Real",
    "B Natural",
    "Tropicana",
    "Minute Maid",
    "Rasna",
    "Tang",
    "Glucon-D",
    "Red Bull",
    "Sting",
    "Monster",
    "Hell Energy",
    "Gatorade",
    "Fast&Up",
    "Bisleri",
    "Kinley",
    "Aquafina",
    "Bailley",
    "Rail Neer",
    "Himalayan",
    "Vedica",
    "Local Juice Maker",
    "Local Sharbat Maker",
    "Local Beverage Supplier",
    "Loose / Unbranded"
  ];

  const products = [
    {
      id: "bev-tea-assam",
      name: "Assam Tea",
      name_hi: "असम चायपत्ती",
      aliases: ["assam chai", "assam tea leaves", "असम चाय", "असम पत्ती"],
      unit: "kg",
      type: "tea",
      variants: ["CTC", "Leaf", "Dust"]
    },
    {
      id: "bev-tea-darjeeling",
      name: "Darjeeling Tea",
      name_hi: "दार्जिलिंग चाय",
      aliases: ["darjeeling chai", "दार्जिलिंग टी"],
      unit: "kg",
      type: "tea"
    },
    {
      id: "bev-tea-nilgiri",
      name: "Nilgiri Tea",
      name_hi: "नीलगिरि चाय",
      aliases: ["nilgiri chai", "नीलगिरी चाय"],
      unit: "kg",
      type: "tea"
    },
    {
      id: "bev-tea-ctc",
      name: "CTC Tea",
      name_hi: "सीटीसी चायपत्ती",
      aliases: ["granule tea", "danedar chai", "दानेदार चाय"],
      unit: "kg",
      type: "tea"
    },
    {
      id: "bev-tea-dust",
      name: "Tea Dust",
      name_hi: "चाय की धूल",
      aliases: ["dust tea", "chai dust", "डस्ट चाय"],
      unit: "kg",
      type: "tea"
    },
    {
      id: "bev-tea-leaf",
      name: "Leaf Tea",
      name_hi: "पत्ती वाली चाय",
      aliases: ["whole leaf tea", "long leaf chai"],
      unit: "kg",
      type: "tea"
    },
    {
      id: "bev-tea-green",
      name: "Green Tea",
      name_hi: "ग्रीन टी",
      aliases: ["green chai", "हरी चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-black",
      name: "Black Tea",
      name_hi: "ब्लैक टी",
      aliases: ["black chai", "काली चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-white",
      name: "White Tea",
      name_hi: "व्हाइट टी",
      aliases: ["white chai"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-masala",
      name: "Masala Tea",
      name_hi: "मसाला चाय",
      aliases: ["masala chai", "मसाला चायपत्ती"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-cardamom",
      name: "Cardamom Tea",
      name_hi: "इलायची चाय",
      aliases: ["elaichi chai", "इलायची वाली चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-ginger",
      name: "Ginger Tea",
      name_hi: "अदरक चाय",
      aliases: ["adrak chai", "अदरक वाली चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-lemon",
      name: "Lemon Tea",
      name_hi: "लेमन टी",
      aliases: ["nimbu tea", "नींबू चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-herbal",
      name: "Herbal Tea",
      name_hi: "हर्बल चाय",
      aliases: ["herbal chai", "जड़ी बूटी चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-kashmiri",
      name: "Kashmiri Kahwa",
      name_hi: "कश्मीरी कहवा",
      aliases: ["kahwa", "कहवा चाय"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-instant",
      name: "Instant Tea Premix",
      name_hi: "इंस्टेंट चाय मिक्स",
      aliases: ["tea premix", "चाय प्रीमिक्स"],
      unit: "pack",
      type: "tea"
    },
    {
      id: "bev-tea-loose",
      name: "Loose Local Tea",
      name_hi: "खुली लोकल चायपत्ती",
      aliases: ["loose chai patti", "खुली चाय", "लोकल चाय"],
      unit: "kg",
      type: "tea"
    },

    {
      id: "bev-coffee-beans",
      name: "Coffee Beans",
      name_hi: "कॉफी बीन्स",
      aliases: ["coffee dana", "कॉफी के दाने"],
      unit: "kg",
      type: "coffee"
    },
    {
      id: "bev-coffee-ground",
      name: "Ground Coffee",
      name_hi: "पिसी हुई कॉफी",
      aliases: ["coffee powder", "कॉफी पाउडर"],
      unit: "kg",
      type: "coffee"
    },
    {
      id: "bev-coffee-instant",
      name: "Instant Coffee",
      name_hi: "इंस्टेंट कॉफी",
      aliases: ["instant coffee powder"],
      unit: "pack",
      type: "coffee"
    },
    {
      id: "bev-coffee-filter",
      name: "Filter Coffee Powder",
      name_hi: "फिल्टर कॉफी पाउडर",
      aliases: ["south indian coffee", "filter coffee"],
      unit: "pack",
      type: "coffee"
    },
    {
      id: "bev-coffee-decaf",
      name: "Decaf Coffee",
      name_hi: "डिकैफ कॉफी",
      aliases: ["decaffeinated coffee"],
      unit: "pack",
      type: "coffee"
    },
    {
      id: "bev-coffee-premix",
      name: "Instant Coffee Premix",
      name_hi: "इंस्टेंट कॉफी मिक्स",
      aliases: ["coffee premix", "कॉफी प्रीमिक्स"],
      unit: "pack",
      type: "coffee"
    },
    {
      id: "bev-coffee-chicory",
      name: "Coffee Chicory Blend",
      name_hi: "कॉफी चिकोरी मिक्स",
      aliases: ["coffee chicory", "चिकोरी कॉफी"],
      unit: "pack",
      type: "coffee"
    },
    {
      id: "bev-coffee-loose",
      name: "Loose Local Coffee",
      name_hi: "खुली लोकल कॉफी",
      aliases: ["local coffee powder", "खुली कॉफी"],
      unit: "kg",
      type: "coffee"
    },

    {
      id: "bev-soft-cola",
      name: "Cola Soft Drink",
      name_hi: "कोला कोल्ड ड्रिंक",
      aliases: ["cola", "cold drink cola", "कोल्ड ड्रिंक"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soft-lemon",
      name: "Lemon Soft Drink",
      name_hi: "नींबू कोल्ड ड्रिंक",
      aliases: ["lemon soda", "nimbu cold drink"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soft-orange",
      name: "Orange Soft Drink",
      name_hi: "ऑरेंज कोल्ड ड्रिंक",
      aliases: ["orange soda", "संतरा कोल्ड ड्रिंक"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soft-mango",
      name: "Mango Drink",
      name_hi: "मैंगो ड्रिंक",
      aliases: ["mango juice drink", "आम का ड्रिंक"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soft-apple",
      name: "Apple Drink",
      name_hi: "एप्पल ड्रिंक",
      aliases: ["apple juice drink"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soft-fruit",
      name: "Mixed Fruit Drink",
      name_hi: "मिक्स फ्रूट ड्रिंक",
      aliases: ["fruit drink", "mixed fruit"],
      unit: "bottle",
      type: "soft_drink"
    },
    {
      id: "bev-soda",
      name: "Soda Water",
      name_hi: "सोडा वाटर",
      aliases: ["club soda", "सोडा"],
      unit: "bottle",
      type: "water"
    },
    {
      id: "bev-tonic",
      name: "Tonic Water",
      name_hi: "टॉनिक वाटर",
      aliases: ["tonic"],
      unit: "bottle",
      type: "water"
    },

    {
      id: "bev-juice-orange",
      name: "Orange Juice",
      name_hi: "संतरे का जूस",
      aliases: ["orange juice", "संतरा जूस"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-mango",
      name: "Mango Juice",
      name_hi: "आम का जूस",
      aliases: ["aam juice", "मैंगो जूस"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-apple",
      name: "Apple Juice",
      name_hi: "सेब का जूस",
      aliases: ["seb juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-pomegranate",
      name: "Pomegranate Juice",
      name_hi: "अनार का जूस",
      aliases: ["anar juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-guava",
      name: "Guava Juice",
      name_hi: "अमरूद का जूस",
      aliases: ["amrood juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-pineapple",
      name: "Pineapple Juice",
      name_hi: "अनानास का जूस",
      aliases: ["ananas juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-grape",
      name: "Grape Juice",
      name_hi: "अंगूर का जूस",
      aliases: ["grape juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-mixed",
      name: "Mixed Fruit Juice",
      name_hi: "मिक्स फ्रूट जूस",
      aliases: ["mix fruit juice"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-coconut",
      name: "Coconut Water",
      name_hi: "नारियल पानी",
      aliases: ["nariyal pani", "tender coconut water"],
      unit: "pack",
      type: "juice"
    },
    {
      id: "bev-juice-sugarcane",
      name: "Sugarcane Juice",
      name_hi: "गन्ने का रस",
      aliases: ["ganne ka juice"],
      unit: "glass",
      type: "fresh_juice"
    },
    {
      id: "bev-juice-lemon",
      name: "Lemon Juice",
      name_hi: "नींबू का जूस",
      aliases: ["nimbu juice"],
      unit: "glass",
      type: "fresh_juice"
    },

    {
      id: "bev-water-packaged",
      name: "Packaged Drinking Water",
      name_hi: "पैक्ड पीने का पानी",
      aliases: ["bottled water", "mineral water", "पानी की बोतल"],
      unit: "bottle",
      type: "water"
    },
    {
      id: "bev-water-large",
      name: "Large Water Jar",
      name_hi: "बड़ा पानी जार",
      aliases: ["20 litre water jar", "water can", "पानी का कैन"],
      unit: "jar",
      type: "water"
    },
    {
      id: "bev-water-small",
      name: "Small Water Bottle",
      name_hi: "छोटी पानी बोतल",
      aliases: ["small bottle water", "छोटी बोतल पानी"],
      unit: "bottle",
      type: "water"
    },

    {
      id: "bev-syrup-rose",
      name: "Rose Sharbat",
      name_hi: "गुलाब शरबत",
      aliases: ["rose syrup", "गुलाब सिरप"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-khus",
      name: "Khus Sharbat",
      name_hi: "खस शरबत",
      aliases: ["khus syrup"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-kala-khatta",
      name: "Kala Khatta Syrup",
      name_hi: "काला खट्टा सिरप",
      aliases: ["kala khatta sharbat"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-badam",
      name: "Badam Sharbat",
      name_hi: "बादाम शरबत",
      aliases: ["almond syrup", "बादाम सिरप"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-lemon",
      name: "Nimbu Sharbat Concentrate",
      name_hi: "नींबू शरबत कॉन्संट्रेट",
      aliases: ["lemon squash", "nimbu squash"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-mango",
      name: "Mango Squash",
      name_hi: "मैंगो स्क्वैश",
      aliases: ["mango concentrate"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-syrup-rasna",
      name: "Instant Drink Mix",
      name_hi: "इंस्टेंट ड्रिंक मिक्स",
      aliases: ["rasna powder", "tang powder", "शरबत पाउडर"],
      unit: "pack",
      type: "drink_mix"
    },

    {
      id: "bev-energy",
      name: "Energy Drink",
      name_hi: "एनर्जी ड्रिंक",
      aliases: ["energy beverage", "एनर्जी वाला ड्रिंक"],
      unit: "can",
      type: "energy_drink"
    },
    {
      id: "bev-sports",
      name: "Sports Drink",
      name_hi: "स्पोर्ट्स ड्रिंक",
      aliases: ["electrolyte sports drink"],
      unit: "bottle",
      type: "sports_drink"
    },
    {
      id: "bev-glucose",
      name: "Glucose Drink Powder",
      name_hi: "ग्लूकोज ड्रिंक पाउडर",
      aliases: ["glucose powder", "ग्लूकोज"],
      unit: "pack",
      type: "drink_mix"
    },
    {
      id: "bev-electrolyte",
      name: "Electrolyte Drink Mix",
      name_hi: "इलेक्ट्रोलाइट ड्रिंक मिक्स",
      aliases: ["electrolyte powder", "hydration powder"],
      unit: "pack",
      type: "drink_mix"
    },

    {
      id: "bev-barley-water",
      name: "Barley Water",
      name_hi: "जौ का पानी",
      aliases: ["jau water"],
      unit: "bottle",
      type: "traditional_drink"
    },
    {
      id: "bev-sattu-drink",
      name: "Sattu Drink Mix",
      name_hi: "सत्तू ड्रिंक मिक्स",
      aliases: ["sattu sharbat", "सत्तू शरबत"],
      unit: "pack",
      type: "traditional_drink"
    },
    {
      id: "bev-jaljeera",
      name: "Jaljeera Drink Mix",
      name_hi: "जलजीरा ड्रिंक मिक्स",
      aliases: ["jal jira", "जलजीरा पाउडर"],
      unit: "pack",
      type: "traditional_drink"
    },
    {
      id: "bev-aam-panna",
      name: "Aam Panna",
      name_hi: "आम पन्ना",
      aliases: ["raw mango drink", "कैरी पन्ना"],
      unit: "bottle",
      type: "traditional_drink"
    },
    {
      id: "bev-lassi",
      name: "Packaged Lassi",
      name_hi: "पैक्ड लस्सी",
      aliases: ["lassi drink"],
      unit: "pack",
      type: "traditional_drink"
    },
    {
      id: "bev-buttermilk",
      name: "Packaged Buttermilk",
      name_hi: "पैक्ड छाछ",
      aliases: ["chaas", "छाछ"],
      unit: "pack",
      type: "traditional_drink"
    },

    {
      id: "bev-local-juice",
      name: "Local Fresh Juice",
      name_hi: "लोकल ताजा जूस",
      aliases: ["fresh juice", "ताजा फल जूस"],
      unit: "glass",
      type: "fresh_juice"
    },
    {
      id: "bev-local-sharbat",
      name: "Local Homemade Sharbat",
      name_hi: "घर का बना शरबत",
      aliases: ["homemade syrup", "लोकल शरबत"],
      unit: "bottle",
      type: "syrup"
    },
    {
      id: "bev-local-drink",
      name: "Local Traditional Drink",
      name_hi: "लोकल पारंपरिक पेय",
      aliases: ["local drink", "देसी पेय"],
      unit: "glass",
      type: "traditional_drink"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 /* ============================================================
   CATEGORY 10: MILK, CURD & DAIRY PRODUCTS
   NEXUS FOOD MASTER DATABASE
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "milk_dairy_products";

  const brands = [
    "Amul",
    "Mother Dairy",
    "Verka",
    "Vita",
    "Nandini",
    "Milma",
    "Aavin",
    "Sudha",
    "Saras",
    "Gokul",
    "Warana",
    "Mahanand",
    "Govardhan",
    "Parag",
    "Namaste India",
    "Country Delight",
    "Akshayakalpa",
    "Heritage",
    "Dodla",
    "Jersey",
    "Thirumala",
    "Arokya",
    "Hatsun",
    "Arun",
    "Schreiber Dynamix",
    "Pride of Cows",
    "Storia",
    "Epigamia",
    "Milky Mist",
    "Britannia",
    "Nestle",
    "Nestle A+",
    "Danone",
    "Go",
    "Dlecta",
    "Lactel",
    "President",
    "Gowardhan",
    "Local Dairy",
    "Local Milk Booth",
    "Local Milkman",
    "Local Paneer Maker",
    "Local Dairy Farm",
    "Loose / Unbranded"
  ];

  const products = [
    {
      id: "dairy-milk-full-cream",
      name: "Full Cream Milk",
      name_hi: "फुल क्रीम दूध",
      aliases: ["full fat milk", "मलाई वाला दूध", "फुल फैट मिल्क"],
      unit: "litre",
      type: "milk",
      fat_level: "full_cream"
    },
    {
      id: "dairy-milk-toned",
      name: "Toned Milk",
      name_hi: "टोन्ड दूध",
      aliases: ["toned doodh"],
      unit: "litre",
      type: "milk",
      fat_level: "toned"
    },
    {
      id: "dairy-milk-double-toned",
      name: "Double Toned Milk",
      name_hi: "डबल टोन्ड दूध",
      aliases: ["double toned doodh"],
      unit: "litre",
      type: "milk",
      fat_level: "double_toned"
    },
    {
      id: "dairy-milk-standardized",
      name: "Standardized Milk",
      name_hi: "स्टैंडर्डाइज्ड दूध",
      aliases: ["standard milk"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-skimmed",
      name: "Skimmed Milk",
      name_hi: "स्किम्ड दूध",
      aliases: ["low fat milk", "fat free milk"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-cow",
      name: "Cow Milk",
      name_hi: "गाय का दूध",
      aliases: ["cow doodh", "गाय दूध"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-buffalo",
      name: "Buffalo Milk",
      name_hi: "भैंस का दूध",
      aliases: ["buffalo doodh", "भैंस दूध"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-goat",
      name: "Goat Milk",
      name_hi: "बकरी का दूध",
      aliases: ["goat doodh"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-organic",
      name: "Organic Milk",
      name_hi: "ऑर्गेनिक दूध",
      aliases: ["organic doodh"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-a2",
      name: "A2 Milk",
      name_hi: "ए2 दूध",
      aliases: ["a2 cow milk"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-loose",
      name: "Loose Fresh Milk",
      name_hi: "खुला ताजा दूध",
      aliases: ["loose doodh", "खुला दूध", "ताजा दूध"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-boiled",
      name: "Boiled Milk",
      name_hi: "उबला हुआ दूध",
      aliases: ["ubla doodh"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-milk-flavoured",
      name: "Flavoured Milk",
      name_hi: "फ्लेवर्ड दूध",
      aliases: ["flavor milk", "फ्लेवर वाला दूध"],
      unit: "bottle",
      type: "milk"
    },
    {
      id: "dairy-milk-chocolate",
      name: "Chocolate Milk",
      name_hi: "चॉकलेट दूध",
      aliases: ["chocolate flavoured milk"],
      unit: "bottle",
      type: "milk"
    },
    {
      id: "dairy-milk-strawberry",
      name: "Strawberry Milk",
      name_hi: "स्ट्रॉबेरी दूध",
      aliases: ["strawberry flavoured milk"],
      unit: "bottle",
      type: "milk"
    },
    {
      id: "dairy-milk-tetra",
      name: "Long Life UHT Milk",
      name_hi: "लॉन्ग लाइफ दूध",
      aliases: ["tetra pack milk", "uht milk"],
      unit: "pack",
      type: "milk"
    },
    {
      id: "dairy-milk-powder",
      name: "Milk Powder",
      name_hi: "दूध पाउडर",
      aliases: ["doodh powder", "dry milk powder"],
      unit: "pack",
      type: "milk_powder"
    },
    {
      id: "dairy-milk-skimmed-powder",
      name: "Skimmed Milk Powder",
      name_hi: "स्किम्ड मिल्क पाउडर",
      aliases: ["smp powder"],
      unit: "pack",
      type: "milk_powder"
    },
    {
      id: "dairy-milk-condensed",
      name: "Condensed Milk",
      name_hi: "कंडेंस्ड मिल्क",
      aliases: ["sweetened condensed milk"],
      unit: "tin",
      type: "milk_product"
    },
    {
      id: "dairy-milk-evaporated",
      name: "Evaporated Milk",
      name_hi: "इवैपोरेटेड मिल्क",
      aliases: ["unsweetened condensed milk"],
      unit: "tin",
      type: "milk_product"
    },

    {
      id: "dairy-curd-plain",
      name: "Plain Curd",
      name_hi: "सादा दही",
      aliases: ["dahi", "दही", "plain yogurt"],
      unit: "kg",
      type: "curd"
    },
    {
      id: "dairy-curd-cup",
      name: "Packaged Curd Cup",
      name_hi: "पैक्ड दही कप",
      aliases: ["dahi cup", "yogurt cup"],
      unit: "cup",
      type: "curd"
    },
    {
      id: "dairy-curd-set",
      name: "Set Curd",
      name_hi: "सेट दही",
      aliases: ["set dahi"],
      unit: "kg",
      type: "curd"
    },
    {
      id: "dairy-curd-mishti",
      name: "Mishti Doi",
      name_hi: "मिष्टी दोई",
      aliases: ["sweet bengali curd", "मीठा दही"],
      unit: "cup",
      type: "curd"
    },
    {
      id: "dairy-curd-greek",
      name: "Greek Yogurt",
      name_hi: "ग्रीक योगर्ट",
      aliases: ["greek dahi"],
      unit: "cup",
      type: "curd"
    },
    {
      id: "dairy-curd-flavoured",
      name: "Flavoured Yogurt",
      name_hi: "फ्लेवर्ड योगर्ट",
      aliases: ["fruit yogurt"],
      unit: "cup",
      type: "curd"
    },
    {
      id: "dairy-curd-probiotic",
      name: "Probiotic Curd",
      name_hi: "प्रोबायोटिक दही",
      aliases: ["probiotic yogurt"],
      unit: "cup",
      type: "curd"
    },
    {
      id: "dairy-buttermilk",
      name: "Buttermilk",
      name_hi: "छाछ",
      aliases: ["chaas", "mattha", "मट्ठा"],
      unit: "litre",
      type: "buttermilk"
    },
    {
      id: "dairy-spiced-buttermilk",
      name: "Masala Buttermilk",
      name_hi: "मसाला छाछ",
      aliases: ["masala chaas", "मसाला मट्ठा"],
      unit: "bottle",
      type: "buttermilk"
    },
    {
      id: "dairy-lassi-sweet",
      name: "Sweet Lassi",
      name_hi: "मीठी लस्सी",
      aliases: ["meethi lassi"],
      unit: "glass",
      type: "lassi"
    },
    {
      id: "dairy-lassi-salted",
      name: "Salted Lassi",
      name_hi: "नमकीन लस्सी",
      aliases: ["namkeen lassi"],
      unit: "glass",
      type: "lassi"
    },
    {
      id: "dairy-lassi-mango",
      name: "Mango Lassi",
      name_hi: "मैंगो लस्सी",
      aliases: ["aam lassi"],
      unit: "bottle",
      type: "lassi"
    },

    {
      id: "dairy-paneer",
      name: "Fresh Paneer",
      name_hi: "ताजा पनीर",
      aliases: ["paneer", "पनीर"],
      unit: "kg",
      type: "paneer"
    },
    {
      id: "dairy-paneer-packed",
      name: "Packaged Paneer",
      name_hi: "पैक्ड पनीर",
      aliases: ["packet paneer"],
      unit: "pack",
      type: "paneer"
    },
    {
      id: "dairy-paneer-low-fat",
      name: "Low Fat Paneer",
      name_hi: "लो फैट पनीर",
      aliases: ["low fat cottage cheese"],
      unit: "pack",
      type: "paneer"
    },
    {
      id: "dairy-paneer-tofu",
      name: "Tofu",
      name_hi: "टोफू",
      aliases: ["soy paneer", "सोया पनीर"],
      unit: "pack",
      type: "plant_based_alternative"
    },
    {
      id: "dairy-khoya",
      name: "Khoya / Mawa",
      name_hi: "खोया / मावा",
      aliases: ["mawa", "खोआ"],
      unit: "kg",
      type: "milk_solid"
    },
    {
      id: "dairy-chhena",
      name: "Chhena",
      name_hi: "छेना",
      aliases: ["chenna", "fresh chhena"],
      unit: "kg",
      type: "milk_solid"
    },
    {
      id: "dairy-cream",
      name: "Fresh Cream",
      name_hi: "फ्रेश क्रीम",
      aliases: ["malai cream", "क्रीम"],
      unit: "pack",
      type: "cream"
    },
    {
      id: "dairy-whipping-cream",
      name: "Whipping Cream",
      name_hi: "व्हिपिंग क्रीम",
      aliases: ["whipped cream"],
      unit: "pack",
      type: "cream"
    },
    {
      id: "dairy-malai",
      name: "Fresh Malai",
      name_hi: "ताजी मलाई",
      aliases: ["milk cream", "दूध की मलाई"],
      unit: "kg",
      type: "cream"
    },

    {
      id: "dairy-butter-salted",
      name: "Salted Butter",
      name_hi: "नमकीन मक्खन",
      aliases: ["salt butter", "मक्खन"],
      unit: "pack",
      type: "butter"
    },
    {
      id: "dairy-butter-unsalted",
      name: "Unsalted Butter",
      name_hi: "बिना नमक का मक्खन",
      aliases: ["plain butter"],
      unit: "pack",
      type: "butter"
    },
    {
      id: "dairy-butter-white",
      name: "White Butter",
      name_hi: "सफेद मक्खन",
      aliases: ["makkhan", "घर का मक्खन"],
      unit: "kg",
      type: "butter"
    },
    {
      id: "dairy-butter-cultured",
      name: "Cultured Butter",
      name_hi: "कल्चर्ड बटर",
      aliases: ["cultured makkhan"],
      unit: "pack",
      type: "butter"
    },

    {
      id: "dairy-cheese-slice",
      name: "Cheese Slices",
      name_hi: "चीज स्लाइस",
      aliases: ["cheese slice", "स्लाइस चीज"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-block",
      name: "Cheese Block",
      name_hi: "चीज ब्लॉक",
      aliases: ["cheese cube block"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-cube",
      name: "Cheese Cubes",
      name_hi: "चीज क्यूब्स",
      aliases: ["cheese cubes"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-mozzarella",
      name: "Mozzarella Cheese",
      name_hi: "मोजरेला चीज",
      aliases: ["pizza cheese"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-cheddar",
      name: "Cheddar Cheese",
      name_hi: "चेडर चीज",
      aliases: ["cheddar"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-processed",
      name: "Processed Cheese",
      name_hi: "प्रोसेस्ड चीज",
      aliases: ["processed cheese block"],
      unit: "pack",
      type: "cheese"
    },
    {
      id: "dairy-cheese-spread",
      name: "Cheese Spread",
      name_hi: "चीज स्प्रेड",
      aliases: ["cheese dip"],
      unit: "jar",
      type: "cheese"
    },
    {
      id: "dairy-cheese-cream",
      name: "Cream Cheese",
      name_hi: "क्रीम चीज",
      aliases: ["cream cheese spread"],
      unit: "pack",
      type: "cheese"
    },

    {
      id: "dairy-ghee",
      name: "Dairy Ghee",
      name_hi: "डेयरी घी",
      aliases: ["milk ghee", "घी"],
      unit: "kg",
      type: "ghee",
      shared_category: "oils_ghee"
    },
    {
      id: "dairy-ghee-cow",
      name: "Cow Ghee",
      name_hi: "गाय का घी",
      aliases: ["cow ghee"],
      unit: "kg",
      type: "ghee",
      shared_category: "oils_ghee"
    },
    {
      id: "dairy-ghee-buffalo",
      name: "Buffalo Ghee",
      name_hi: "भैंस का घी",
      aliases: ["buffalo ghee"],
      unit: "kg",
      type: "ghee",
      shared_category: "oils_ghee"
    },

    {
      id: "dairy-sweets-basundi",
      name: "Basundi",
      name_hi: "बासुंदी",
      aliases: ["basundi sweet"],
      unit: "pack",
      type: "milk_sweet"
    },
    {
      id: "dairy-sweets-rabri",
      name: "Rabri",
      name_hi: "रबड़ी",
      aliases: ["rabdi"],
      unit: "kg",
      type: "milk_sweet"
    },
    {
      id: "dairy-sweets-kheer",
      name: "Ready Kheer",
      name_hi: "तैयार खीर",
      aliases: ["rice kheer"],
      unit: "pack",
      type: "milk_sweet"
    },
    {
      id: "dairy-sweets-shrikhand",
      name: "Shrikhand",
      name_hi: "श्रीखंड",
      aliases: ["shrikhand sweet"],
      unit: "cup",
      type: "milk_sweet"
    },
    {
      id: "dairy-sweets-peda",
      name: "Milk Peda",
      name_hi: "दूध पेड़ा",
      aliases: ["doodh peda"],
      unit: "kg",
      type: "milk_sweet"
    },

    {
      id: "dairy-plant-soy",
      name: "Soy Milk",
      name_hi: "सोया दूध",
      aliases: ["soya milk"],
      unit: "litre",
      type: "plant_based_alternative"
    },
    {
      id: "dairy-plant-almond",
      name: "Almond Milk",
      name_hi: "बादाम दूध",
      aliases: ["badam milk"],
      unit: "litre",
      type: "plant_based_alternative"
    },
    {
      id: "dairy-plant-oat",
      name: "Oat Milk",
      name_hi: "ओट मिल्क",
      aliases: ["oats milk"],
      unit: "litre",
      type: "plant_based_alternative"
    },
    {
      id: "dairy-plant-coconut",
      name: "Coconut Milk",
      name_hi: "नारियल दूध",
      aliases: ["nariyal milk"],
      unit: "pack",
      type: "plant_based_alternative"
    },

    {
      id: "dairy-local-milk",
      name: "Local Dairy Milk",
      name_hi: "लोकल डेयरी दूध",
      aliases: ["local doodh", "डेयरी वाला दूध"],
      unit: "litre",
      type: "milk"
    },
    {
      id: "dairy-local-curd",
      name: "Local Dairy Curd",
      name_hi: "लोकल डेयरी दही",
      aliases: ["local dahi", "घर का दही"],
      unit: "kg",
      type: "curd"
    },
    {
      id: "dairy-local-paneer",
      name: "Local Fresh Paneer",
      name_hi: "लोकल ताजा पनीर",
      aliases: ["local paneer"],
      unit: "kg",
      type: "paneer"
    },
    {
      id: "dairy-local-khoya",
      name: "Local Khoya",
      name_hi: "लोकल खोया",
      aliases: ["local mawa"],
      unit: "kg",
      type: "milk_solid"
    },
    {
      id: "dairy-local-cream",
      name: "Local Fresh Cream",
      name_hi: "लोकल ताजी क्रीम",
      aliases: ["local malai"],
      unit: "kg",
      type: "cream"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 /* ============================================================
   CATEGORY 11: SALT, PAPAD & PICKLES
   NEXUS FOOD MASTER DATABASE
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "salt_papad_pickles";

  const brands = [
    "Tata Salt",
    "Aashirvaad",
    "Catch",
    "Patanjali",
    "Saffola",
    "Annapurna",
    "Captain Cook",
    "Nirma",
    "Suhana",
    "Everest",
    "MDH",
    "Mother's Recipe",
    "Priya",
    "Bedekar",
    "MTR",
    "Nilon's",
    "Pachranga",
    "Ahmed",
    "Kissan",
    "Del Monte",
    "Druk",
    "Lijjat",
    "Ganesh",
    "Madhur",
    "Haldiram's",
    "Bikaji",
    "Bikano",
    "Papadwala",
    "Local Papad Maker",
    "Local Pickle Maker",
    "Local Spice Shop",
    "Local Food Producer",
    "Loose / Unbranded"
  ];

  const products = [
    {
      id: "salt-iodized",
      name: "Iodized Salt",
      name_hi: "आयोडीन वाला नमक",
      aliases: ["iodine salt", "iodized namak", "आयोडाइज्ड नमक"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-common",
      name: "Common Salt",
      name_hi: "साधारण नमक",
      aliases: ["normal salt", "सादा नमक"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-crystal",
      name: "Crystal Salt",
      name_hi: "दानेदार नमक",
      aliases: ["mota namak", "मोटा नमक"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-powder",
      name: "Fine Table Salt",
      name_hi: "बारीक टेबल नमक",
      aliases: ["table salt", "fine namak"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-rock",
      name: "Rock Salt",
      name_hi: "सेंधा नमक",
      aliases: ["sendha namak", "vrat ka namak"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-black",
      name: "Black Salt",
      name_hi: "काला नमक",
      aliases: ["kala namak", "black rock salt"],
      unit: "kg",
      type: "salt"
    },
    {
      id: "salt-himalayan-pink",
      name: "Pink Himalayan Salt",
      name_hi: "हिमालयन गुलाबी नमक",
      aliases: ["pink salt", "pink himalayan namak"],
      unit: "pack",
      type: "salt"
    },
    {
      id: "salt-low-sodium",
      name: "Low Sodium Salt",
      name_hi: "कम सोडियम वाला नमक",
      aliases: ["low sodium namak"],
      unit: "pack",
      type: "salt"
    },
    {
      id: "salt-rock-powder",
      name: "Rock Salt Powder",
      name_hi: "सेंधा नमक पाउडर",
      aliases: ["sendha namak powder"],
      unit: "pack",
      type: "salt"
    },
    {
      id: "salt-black-powder",
      name: "Black Salt Powder",
      name_hi: "काला नमक पाउडर",
      aliases: ["kala namak powder"],
      unit: "pack",
      type: "salt"
    },
    {
      id: "salt-seasoned",
      name: "Seasoned Salt",
      name_hi: "मसालेदार नमक",
      aliases: ["seasoning salt"],
      unit: "pack",
      type: "salt"
    },
    {
      id: "salt-loose",
      name: "Loose Local Salt",
      name_hi: "खुला लोकल नमक",
      aliases: ["loose namak", "खुला नमक"],
      unit: "kg",
      type: "salt"
    },

    {
      id: "papad-urad",
      name: "Urad Papad",
      name_hi: "उड़द पापड़",
      aliases: ["urad dal papad", "उड़द दाल पापड़"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-moong",
      name: "Moong Papad",
      name_hi: "मूंग पापड़",
      aliases: ["moong dal papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-chana",
      name: "Chana Papad",
      name_hi: "चना पापड़",
      aliases: ["chana dal papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-rice",
      name: "Rice Papad",
      name_hi: "चावल पापड़",
      aliases: ["rice appalam"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-potato",
      name: "Potato Papad",
      name_hi: "आलू पापड़",
      aliases: ["aloo papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-sabudana",
      name: "Sabudana Papad",
      name_hi: "साबूदाना पापड़",
      aliases: ["sago papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-punjabi",
      name: "Punjabi Papad",
      name_hi: "पंजाबी पापड़",
      aliases: ["punjabi masala papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-masala",
      name: "Masala Papad",
      name_hi: "मसाला पापड़",
      aliases: ["spicy papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-jeera",
      name: "Jeera Papad",
      name_hi: "जीरा पापड़",
      aliases: ["cumin papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-garlic",
      name: "Garlic Papad",
      name_hi: "लहसुन पापड़",
      aliases: ["garlic appalam"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-khichiya",
      name: "Khichiya Papad",
      name_hi: "खीचिया पापड़",
      aliases: ["khichiya", "rice khichiya"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-appalam",
      name: "Appalam",
      name_hi: "अप्पलम",
      aliases: ["south indian papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-mini",
      name: "Mini Papad",
      name_hi: "मिनी पापड़",
      aliases: ["small papad"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-fryums",
      name: "Papad Fryums",
      name_hi: "पापड़ फ्रायम्स",
      aliases: ["fryums", "फ्रायम्स"],
      unit: "pack",
      type: "papad"
    },
    {
      id: "papad-loose",
      name: "Loose Local Papad",
      name_hi: "खुला लोकल पापड़",
      aliases: ["loose papad", "घर का पापड़"],
      unit: "kg",
      type: "papad"
    },

    {
      id: "pickle-mango",
      name: "Mango Pickle",
      name_hi: "आम का अचार",
      aliases: ["aam ka achar", "mango achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-mango-sweet",
      name: "Sweet Mango Pickle",
      name_hi: "मीठा आम का अचार",
      aliases: ["meetha aam achar", "sweet mango achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-lime",
      name: "Lime Pickle",
      name_hi: "नींबू का अचार",
      aliases: ["nimbu achar", "lemon pickle"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-chilli",
      name: "Green Chilli Pickle",
      name_hi: "हरी मिर्च का अचार",
      aliases: ["hari mirch achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-red-chilli",
      name: "Red Chilli Pickle",
      name_hi: "लाल मिर्च का अचार",
      aliases: ["lal mirch achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-mixed",
      name: "Mixed Vegetable Pickle",
      name_hi: "मिक्स सब्जी का अचार",
      aliases: ["mixed achar", "mix pickle"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-carrot",
      name: "Carrot Pickle",
      name_hi: "गाजर का अचार",
      aliases: ["gajar achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-cauliflower",
      name: "Cauliflower Pickle",
      name_hi: "गोभी का अचार",
      aliases: ["gobhi achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-turnip",
      name: "Turnip Pickle",
      name_hi: "शलजम का अचार",
      aliases: ["shalgam achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-garlic",
      name: "Garlic Pickle",
      name_hi: "लहसुन का अचार",
      aliases: ["lahsun achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-ginger",
      name: "Ginger Pickle",
      name_hi: "अदरक का अचार",
      aliases: ["adrak achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-amla",
      name: "Amla Pickle",
      name_hi: "आंवले का अचार",
      aliases: ["amla achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-jackfruit",
      name: "Jackfruit Pickle",
      name_hi: "कटहल का अचार",
      aliases: ["kathal achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-olive",
      name: "Olive Pickle",
      name_hi: "जैतून का अचार",
      aliases: ["zaitoon achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-fish",
      name: "Fish Pickle",
      name_hi: "मछली का अचार",
      aliases: ["machhli achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-prawn",
      name: "Prawn Pickle",
      name_hi: "झींगा अचार",
      aliases: ["prawn achar", "झींगा का अचार"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-chicken",
      name: "Chicken Pickle",
      name_hi: "चिकन अचार",
      aliases: ["chicken achar"],
      unit: "jar",
      type: "pickle"
    },
    {
      id: "pickle-oil",
      name: "Pickle Oil",
      name_hi: "अचार का तेल",
      aliases: ["achar oil"],
      unit: "bottle",
      type: "pickle_ingredient"
    },
    {
      id: "pickle-masala",
      name: "Pickle Masala",
      name_hi: "अचार मसाला",
      aliases: ["achar masala"],
      unit: "pack",
      type: "pickle_ingredient"
    },
    {
      id: "pickle-vinegar",
      name: "Pickling Vinegar",
      name_hi: "अचार वाला सिरका",
      aliases: ["achar vinegar"],
      unit: "bottle",
      type: "pickle_ingredient"
    },
    {
      id: "pickle-loose",
      name: "Loose Local Pickle",
      name_hi: "खुला लोकल अचार",
      aliases: ["loose achar", "घर का अचार", "लोकल अचार"],
      unit: "kg",
      type: "pickle"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 /* ============================================================
   CATEGORY 12: SAUCES, KETCHUP, JAMS & SPREADS
   NEXUS FOOD MASTER DATABASE
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "sauces_jams_spreads";

  const brands = [
    "Kissan",
    "Maggi",
    "Heinz",
    "Del Monte",
    "Veeba",
    "Dr. Oetker",
    "FunFoods",
    "Ching's Secret",
    "Smith & Jones",
    "Wingreens Farms",
    "Cremica",
    "Sil",
    "Mala's",
    "Mapro",
    "Dabur",
    "Patanjali",
    "Mother's Recipe",
    "Priya",
    "Nilon's",
    "Bedekar",
    "Kohinoor",
    "Lee Kum Kee",
    "American Garden",
    "Tabasco",
    "HP Sauce",
    "Nutella",
    "Sundrop",
    "Dr. Oetker FunFoods",
    "Veeba",
    "Pintola",
    "MyFitness",
    "Alpino",
    "Saffola",
    "Hershey's",
    "Cadbury",
    "Skippy",
    "Jif",
    "Borges",
    "Urban Platter",
    "Local Sauce Maker",
    "Local Jam Maker",
    "Local Chutney Maker",
    "Local Food Producer",
    "Loose / Unbranded"
  ];

  const products = [
    {
      id: "sauce-tomato",
      name: "Tomato Ketchup",
      name_hi: "टमाटर केचप",
      aliases: ["tomato sauce", "टमाटर सॉस", "ketchup"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-tomato-sweet",
      name: "Sweet Tomato Sauce",
      name_hi: "मीठी टमाटर सॉस",
      aliases: ["sweet ketchup"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-chilli-red",
      name: "Red Chilli Sauce",
      name_hi: "रेड चिली सॉस",
      aliases: ["red chilli sauce", "लाल मिर्च सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-chilli-green",
      name: "Green Chilli Sauce",
      name_hi: "ग्रीन चिली सॉस",
      aliases: ["green chilli sauce", "हरी मिर्च सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-schezwan",
      name: "Schezwan Sauce",
      name_hi: "शेजवान सॉस",
      aliases: ["schezwan chutney", "शेजवान चटनी"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-soy",
      name: "Soy Sauce",
      name_hi: "सोया सॉस",
      aliases: ["soya sauce"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-dark-soy",
      name: "Dark Soy Sauce",
      name_hi: "डार्क सोया सॉस",
      aliases: ["dark soya sauce"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-light-soy",
      name: "Light Soy Sauce",
      name_hi: "लाइट सोया सॉस",
      aliases: ["light soya sauce"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-chilli-garlic",
      name: "Chilli Garlic Sauce",
      name_hi: "चिली गार्लिक सॉस",
      aliases: ["garlic chilli sauce", "लहसुन मिर्च सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-vinegar",
      name: "Vinegar",
      name_hi: "सिरका",
      aliases: ["sirka", "खाने वाला सिरका"],
      unit: "bottle",
      type: "condiment"
    },
    {
      id: "sauce-white-vinegar",
      name: "White Vinegar",
      name_hi: "सफेद सिरका",
      aliases: ["distilled vinegar"],
      unit: "bottle",
      type: "condiment"
    },
    {
      id: "sauce-apple-vinegar",
      name: "Apple Cider Vinegar",
      name_hi: "एप्पल साइडर सिरका",
      aliases: ["apple vinegar", "seb ka sirka"],
      unit: "bottle",
      type: "condiment"
    },
    {
      id: "sauce-malt-vinegar",
      name: "Malt Vinegar",
      name_hi: "माल्ट सिरका",
      aliases: ["malt sirka"],
      unit: "bottle",
      type: "condiment"
    },
    {
      id: "sauce-chilli-vinegar",
      name: "Chilli Vinegar",
      name_hi: "मिर्च वाला सिरका",
      aliases: ["chilli sirka"],
      unit: "bottle",
      type: "condiment"
    },
    {
      id: "sauce-green-chutney",
      name: "Green Chutney",
      name_hi: "हरी चटनी",
      aliases: ["hari chutney", "mint coriander chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-tamarind-chutney",
      name: "Tamarind Chutney",
      name_hi: "इमली की चटनी",
      aliases: ["imli chutney", "saunth chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-mint-chutney",
      name: "Mint Chutney",
      name_hi: "पुदीने की चटनी",
      aliases: ["pudina chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-coconut-chutney",
      name: "Coconut Chutney",
      name_hi: "नारियल चटनी",
      aliases: ["nariyal chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-garlic-chutney",
      name: "Garlic Chutney",
      name_hi: "लहसुन की चटनी",
      aliases: ["lahsun chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-mango-chutney",
      name: "Mango Chutney",
      name_hi: "आम की चटनी",
      aliases: ["aam chutney"],
      unit: "jar",
      type: "chutney"
    },
    {
      id: "sauce-mayonnaise",
      name: "Mayonnaise",
      name_hi: "मेयोनेज़",
      aliases: ["mayo", "मेयो"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "sauce-eggless-mayo",
      name: "Eggless Mayonnaise",
      name_hi: "एगलेस मेयोनेज़",
      aliases: ["vegetarian mayo", "बिना अंडे का मेयो"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "sauce-cheese-mayo",
      name: "Cheese Mayonnaise",
      name_hi: "चीज मेयोनेज़",
      aliases: ["cheese mayo"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "sauce-tandoori-mayo",
      name: "Tandoori Mayonnaise",
      name_hi: "तंदूरी मेयोनेज़",
      aliases: ["tandoori mayo"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "sauce-mustard",
      name: "Mustard Sauce",
      name_hi: "मस्टर्ड सॉस",
      aliases: ["mustard dip", "सरसों सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-barbecue",
      name: "Barbecue Sauce",
      name_hi: "बार्बेक्यू सॉस",
      aliases: ["bbq sauce"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-pizza-pasta",
      name: "Pizza Pasta Sauce",
      name_hi: "पिज्जा पास्ता सॉस",
      aliases: ["pizza sauce", "pasta sauce"],
      unit: "jar",
      type: "sauce"
    },
    {
      id: "sauce-white-pasta",
      name: "White Pasta Sauce",
      name_hi: "व्हाइट पास्ता सॉस",
      aliases: ["white sauce"],
      unit: "jar",
      type: "sauce"
    },
    {
      id: "sauce-hot",
      name: "Hot Sauce",
      name_hi: "हॉट सॉस",
      aliases: ["spicy sauce", "तीखी सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-peri-peri",
      name: "Peri Peri Sauce",
      name_hi: "पेरी पेरी सॉस",
      aliases: ["peri peri dip"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-oyster",
      name: "Oyster Sauce",
      name_hi: "ऑयस्टर सॉस",
      aliases: ["oyster cooking sauce"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-teriyaki",
      name: "Teriyaki Sauce",
      name_hi: "तेरियाकी सॉस",
      aliases: ["teriyaki"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-sriracha",
      name: "Sriracha Sauce",
      name_hi: "श्रीराचा सॉस",
      aliases: ["sriracha chilli sauce"],
      unit: "bottle",
      type: "sauce"
    },

    {
      id: "jam-mixed-fruit",
      name: "Mixed Fruit Jam",
      name_hi: "मिक्स फ्रूट जैम",
      aliases: ["mix fruit jam", "मिश्रित फल जैम"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-mango",
      name: "Mango Jam",
      name_hi: "आम का जैम",
      aliases: ["aam jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-strawberry",
      name: "Strawberry Jam",
      name_hi: "स्ट्रॉबेरी जैम",
      aliases: ["strawberry jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-pineapple",
      name: "Pineapple Jam",
      name_hi: "अनानास जैम",
      aliases: ["pineapple jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-orange",
      name: "Orange Marmalade",
      name_hi: "ऑरेंज मार्मलेड",
      aliases: ["orange jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-guava",
      name: "Guava Jam",
      name_hi: "अमरूद जैम",
      aliases: ["amrood jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-apple",
      name: "Apple Jam",
      name_hi: "सेब का जैम",
      aliases: ["seb jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-blackcurrant",
      name: "Blackcurrant Jam",
      name_hi: "ब्लैककरंट जैम",
      aliases: ["black currant jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-sugar-free",
      name: "Sugar Free Jam",
      name_hi: "शुगर फ्री जैम",
      aliases: ["no added sugar jam"],
      unit: "jar",
      type: "jam"
    },
    {
      id: "jam-jelly",
      name: "Fruit Jelly",
      name_hi: "फ्रूट जेली",
      aliases: ["jelly", "फल जेली"],
      unit: "jar",
      type: "jelly"
    },
    {
      id: "jam-marmalade",
      name: "Fruit Marmalade",
      name_hi: "फ्रूट मार्मलेड",
      aliases: ["fruit preserve"],
      unit: "jar",
      type: "jam"
    },

    {
      id: "spread-peanut",
      name: "Peanut Butter",
      name_hi: "पीनट बटर",
      aliases: ["moongfali butter", "मूंगफली बटर"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-crunchy-peanut",
      name: "Crunchy Peanut Butter",
      name_hi: "क्रंची पीनट बटर",
      aliases: ["crunchy peanut spread"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-smooth-peanut",
      name: "Smooth Peanut Butter",
      name_hi: "स्मूद पीनट बटर",
      aliases: ["creamy peanut butter"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-chocolate",
      name: "Chocolate Spread",
      name_hi: "चॉकलेट स्प्रेड",
      aliases: ["chocolate spread", "चॉकलेट क्रीम"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-hazelnut",
      name: "Hazelnut Chocolate Spread",
      name_hi: "हेज़लनट चॉकलेट स्प्रेड",
      aliases: ["hazelnut spread"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-almond",
      name: "Almond Butter",
      name_hi: "बादाम बटर",
      aliases: ["badam butter"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-cashew",
      name: "Cashew Butter",
      name_hi: "काजू बटर",
      aliases: ["kaju butter"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-sesame",
      name: "Tahini Sesame Spread",
      name_hi: "ताहिनी तिल स्प्रेड",
      aliases: ["tahini", "sesame paste"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-honey",
      name: "Honey Spread",
      name_hi: "हनी स्प्रेड",
      aliases: ["honey spread"],
      unit: "jar",
      type: "spread"
    },
    {
      id: "spread-marmite",
      name: "Yeast Extract Spread",
      name_hi: "यीस्ट एक्सट्रैक्ट स्प्रेड",
      aliases: ["yeast spread"],
      unit: "jar",
      type: "spread"
    },

    {
      id: "sauce-local-tomato",
      name: "Local Tomato Sauce",
      name_hi: "लोकल टमाटर सॉस",
      aliases: ["local ketchup", "घर की टमाटर सॉस"],
      unit: "bottle",
      type: "sauce"
    },
    {
      id: "sauce-local-chutney",
      name: "Local Chutney",
      name_hi: "लोकल चटनी",
      aliases: ["homemade chutney", "घर की चटनी"],
      unit: "kg",
      type: "chutney"
    },
    {
      id: "jam-local",
      name: "Local Homemade Jam",
      name_hi: "लोकल घर का जैम",
      aliases: ["homemade jam", "घर का जैम"],
      unit: "kg",
      type: "jam"
    },
    {
      id: "spread-local",
      name: "Local Homemade Spread",
      name_hi: "लोकल घर का स्प्रेड",
      aliases: ["homemade spread"],
      unit: "kg",
      type: "spread"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 /* ============================================================
   CATEGORY 13: DRY FRUITS, NUTS & SEEDS
   NEXUS FOOD MASTER DATABASE
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "dry_fruits_nuts_seeds";

  const brands = [
    "Happilo",
    "Farmley",
    "Nutraj",
    "Rostaa",
    "Solimo",
    "Vedaka",
    "Tata Sampann",
    "Amazon Brand",
    "bb Royal",
    "bb Popular",
    "24 Mantra Organic",
    "Organic Tattva",
    "Natureland Organics",
    "Lion Dates",
    "Lion Arabian Dates",
    "ProV",
    "True Elements",
    "Yogabar",
    "Open Secret",
    "Urban Platter",
    "Whole Farm",
    "Healthy Master",
    "RiteBite",
    "Munchilicious",
    "Wonderland Foods",
    "Local Dry Fruit Merchant",
    "Local Wholesale Market",
    "Local Roaster",
    "Loose / Unbranded"
  ];

  const products = [
    /* -------------------- ALMONDS -------------------- */

    {
      id: "dry-almond-california",
      name: "California Almonds",
      name_hi: "कैलिफोर्निया बादाम",
      aliases: ["california badam", "विदेशी बादाम"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-kashmiri",
      name: "Kashmiri Almonds",
      name_hi: "कश्मीरी बादाम",
      aliases: ["kashmiri badam"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-mamra",
      name: "Mamra Almonds",
      name_hi: "ममरा बादाम",
      aliases: ["mamra badam", "मामरा बादाम"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-gurbandi",
      name: "Gurbandi Almonds",
      name_hi: "गुरबंदी बादाम",
      aliases: ["gurbandi badam"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-roasted",
      name: "Roasted Almonds",
      name_hi: "भुने बादाम",
      aliases: ["roasted badam"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-salted",
      name: "Salted Almonds",
      name_hi: "नमकीन बादाम",
      aliases: ["salted badam"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-blanched",
      name: "Blanched Almonds",
      name_hi: "छिलका उतरे बादाम",
      aliases: ["peeled almonds", "बिना छिलके बादाम"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-sliced",
      name: "Almond Slices",
      name_hi: "बादाम कतरन",
      aliases: ["badam flakes", "बादाम स्लाइस"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-powder",
      name: "Almond Powder",
      name_hi: "बादाम पाउडर",
      aliases: ["badam powder"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-almond-flour",
      name: "Almond Flour",
      name_hi: "बादाम आटा",
      aliases: ["almond meal"],
      unit: "kg",
      type: "almond"
    },

    /* -------------------- CASHEWS -------------------- */

    {
      id: "dry-cashew-w180",
      name: "Cashew W180",
      name_hi: "काजू डब्ल्यू 180",
      aliases: ["w180 kaju", "jumbo kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-w210",
      name: "Cashew W210",
      name_hi: "काजू डब्ल्यू 210",
      aliases: ["w210 kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-w240",
      name: "Cashew W240",
      name_hi: "काजू डब्ल्यू 240",
      aliases: ["w240 kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-w320",
      name: "Cashew W320",
      name_hi: "काजू डब्ल्यू 320",
      aliases: ["w320 kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-w400",
      name: "Cashew W400",
      name_hi: "काजू डब्ल्यू 400",
      aliases: ["w400 kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-broken",
      name: "Broken Cashew",
      name_hi: "टूटा काजू",
      aliases: ["kaju tukda", "काजू टुकड़ा"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-split",
      name: "Split Cashew",
      name_hi: "दो फांका काजू",
      aliases: ["split kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-roasted",
      name: "Roasted Cashew",
      name_hi: "भुना काजू",
      aliases: ["roasted kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-salted",
      name: "Salted Cashew",
      name_hi: "नमकीन काजू",
      aliases: ["salted kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-cashew-masala",
      name: "Masala Cashew",
      name_hi: "मसाला काजू",
      aliases: ["masala kaju"],
      unit: "kg",
      type: "cashew"
    },

    /* -------------------- PISTACHIOS -------------------- */

    {
      id: "dry-pistachio-shell",
      name: "Pistachio With Shell",
      name_hi: "छिलके वाला पिस्ता",
      aliases: ["pista shell", "पिस्ता"],
      unit: "kg",
      type: "pistachio"
    },
    {
      id: "dry-pistachio-kernel",
      name: "Pistachio Kernels",
      name_hi: "पिस्ता गिरी",
      aliases: ["pista giri", "बिना छिलके पिस्ता"],
      unit: "kg",
      type: "pistachio"
    },
    {
      id: "dry-pistachio-roasted",
      name: "Roasted Pistachio",
      name_hi: "भुना पिस्ता",
      aliases: ["roasted pista"],
      unit: "kg",
      type: "pistachio"
    },
    {
      id: "dry-pistachio-salted",
      name: "Salted Pistachio",
      name_hi: "नमकीन पिस्ता",
      aliases: ["salted pista"],
      unit: "kg",
      type: "pistachio"
    },
    {
      id: "dry-pistachio-sliced",
      name: "Pistachio Slices",
      name_hi: "पिस्ता कतरन",
      aliases: ["pista flakes"],
      unit: "kg",
      type: "pistachio"
    },

    /* -------------------- WALNUTS -------------------- */

    {
      id: "dry-walnut-shell",
      name: "Walnuts With Shell",
      name_hi: "छिलके वाला अखरोट",
      aliases: ["akhrot shell", "अखरोट"],
      unit: "kg",
      type: "walnut"
    },
    {
      id: "dry-walnut-kernel",
      name: "Walnut Kernels",
      name_hi: "अखरोट गिरी",
      aliases: ["akhrot giri", "walnut without shell"],
      unit: "kg",
      type: "walnut"
    },
    {
      id: "dry-walnut-halves",
      name: "Walnut Halves",
      name_hi: "अखरोट आधी गिरी",
      aliases: ["akhrot halves"],
      unit: "kg",
      type: "walnut"
    },
    {
      id: "dry-walnut-pieces",
      name: "Walnut Pieces",
      name_hi: "अखरोट टुकड़े",
      aliases: ["akhrot tukda"],
      unit: "kg",
      type: "walnut"
    },

    /* -------------------- RAISINS -------------------- */

    {
      id: "dry-raisin-green",
      name: "Green Raisins",
      name_hi: "हरी किशमिश",
      aliases: ["green kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-black",
      name: "Black Raisins",
      name_hi: "काली किशमिश",
      aliases: ["black kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-golden",
      name: "Golden Raisins",
      name_hi: "सुनहरी किशमिश",
      aliases: ["golden kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-brown",
      name: "Brown Raisins",
      name_hi: "भूरी किशमिश",
      aliases: ["brown kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-seedless",
      name: "Seedless Raisins",
      name_hi: "बिना बीज की किशमिश",
      aliases: ["seedless kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-munakka",
      name: "Munakka",
      name_hi: "मुनक्का",
      aliases: ["large raisins", "बड़ा मुनक्का"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-raisin-black-seeded",
      name: "Black Seeded Raisins",
      name_hi: "काली बीज वाली किशमिश",
      aliases: ["black seeded kismis"],
      unit: "kg",
      type: "raisin"
    },

    /* -------------------- DATES -------------------- */

    {
      id: "dry-date-ajwa",
      name: "Ajwa Dates",
      name_hi: "अजवा खजूर",
      aliases: ["ajwa khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-medjool",
      name: "Medjool Dates",
      name_hi: "मेडजूल खजूर",
      aliases: ["medjool khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-safawi",
      name: "Safawi Dates",
      name_hi: "सफावी खजूर",
      aliases: ["safawi khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-kimia",
      name: "Kimia Dates",
      name_hi: "किमिया खजूर",
      aliases: ["kimia khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-khalas",
      name: "Khalas Dates",
      name_hi: "खलास खजूर",
      aliases: ["khalas khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-degli",
      name: "Deglet Noor Dates",
      name_hi: "डेगलेट नूर खजूर",
      aliases: ["deglet dates"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-dry",
      name: "Dry Dates",
      name_hi: "सूखे खजूर",
      aliases: ["chuhara", "छुहारा"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-pitted",
      name: "Pitted Dates",
      name_hi: "बिना गुठली के खजूर",
      aliases: ["seedless dates"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-chopped",
      name: "Chopped Dates",
      name_hi: "कटे हुए खजूर",
      aliases: ["date pieces"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-date-paste",
      name: "Date Paste",
      name_hi: "खजूर पेस्ट",
      aliases: ["khajoor paste"],
      unit: "pack",
      type: "date"
    },

    /* -------------------- OTHER DRIED FRUITS -------------------- */

    {
      id: "dry-fig",
      name: "Dried Figs",
      name_hi: "सूखे अंजीर",
      aliases: ["anjeer", "anjeer dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-apricot",
      name: "Dried Apricots",
      name_hi: "सूखी खुबानी",
      aliases: ["khubani", "dry khubani"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-prune",
      name: "Prunes",
      name_hi: "सूखे आलूबुखारे",
      aliases: ["dried plum"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-cranberry",
      name: "Dried Cranberries",
      name_hi: "सूखी क्रैनबेरी",
      aliases: ["cranberry dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-blueberry",
      name: "Dried Blueberries",
      name_hi: "सूखी ब्लूबेरी",
      aliases: ["blueberry dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-cherry",
      name: "Dried Cherries",
      name_hi: "सूखी चेरी",
      aliases: ["dry cherry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-kiwi",
      name: "Dried Kiwi",
      name_hi: "सूखी कीवी",
      aliases: ["kiwi dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-papaya",
      name: "Dried Papaya",
      name_hi: "सूखा पपीता",
      aliases: ["papaya dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-pineapple",
      name: "Dried Pineapple",
      name_hi: "सूखा अनानास",
      aliases: ["pineapple dry"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-coconut",
      name: "Dried Coconut",
      name_hi: "सूखा नारियल",
      aliases: ["dry nariyal", "खोपरा"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-coconut-copra",
      name: "Copra",
      name_hi: "नारियल खोपरा",
      aliases: ["copra coconut"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-tutty-fruity",
      name: "Tutti Frutti",
      name_hi: "टूटी फ्रूटी",
      aliases: ["tutti fruity"],
      unit: "kg",
      type: "candied_fruit"
    },

    /* -------------------- OTHER NUTS -------------------- */

    {
      id: "dry-hazelnut",
      name: "Hazelnuts",
      name_hi: "हेज़लनट",
      aliases: ["hazel nuts"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-brazil-nut",
      name: "Brazil Nuts",
      name_hi: "ब्राजील नट्स",
      aliases: ["brazil nut"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-macadamia",
      name: "Macadamia Nuts",
      name_hi: "मैकाडेमिया नट्स",
      aliases: ["macadamia"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-pecan",
      name: "Pecan Nuts",
      name_hi: "पेकान नट्स",
      aliases: ["pecan"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-pine-nut",
      name: "Pine Nuts",
      name_hi: "चिलगोजा",
      aliases: ["chilgoza", "pine kernels"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-chironji",
      name: "Chironji",
      name_hi: "चिरौंजी",
      aliases: ["charoli", "चारोली"],
      unit: "kg",
      type: "nut"
    },
    {
      id: "dry-watermelon-seed-kernel",
      name: "Watermelon Seed Kernels",
      name_hi: "तरबूज मगज",
      aliases: ["magaj", "तरबूज के बीज की गिरी"],
      unit: "kg",
      type: "seed_kernel"
    },
    {
      id: "dry-pumpkin-seed-kernel",
      name: "Pumpkin Seed Kernels",
      name_hi: "कद्दू के बीज की गिरी",
      aliases: ["pumpkin kernels"],
      unit: "kg",
      type: "seed_kernel"
    },

    /* -------------------- EDIBLE SEEDS -------------------- */

    {
      id: "seed-pumpkin",
      name: "Pumpkin Seeds",
      name_hi: "कद्दू के बीज",
      aliases: ["kaddu seeds"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-sunflower",
      name: "Sunflower Seeds",
      name_hi: "सूरजमुखी के बीज",
      aliases: ["sunflower dana"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-watermelon",
      name: "Watermelon Seeds",
      name_hi: "तरबूज के बीज",
      aliases: ["watermelon dana"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-chia",
      name: "Chia Seeds",
      name_hi: "चिया बीज",
      aliases: ["chia dana"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-flax",
      name: "Flax Seeds",
      name_hi: "अलसी के बीज",
      aliases: ["alsi", "linseed"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-sesame-white",
      name: "White Sesame Seeds",
      name_hi: "सफेद तिल",
      aliases: ["white til"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-sesame-black",
      name: "Black Sesame Seeds",
      name_hi: "काले तिल",
      aliases: ["black til"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-poppy",
      name: "Poppy Seeds",
      name_hi: "खसखस",
      aliases: ["khas khas", "पोस्ता दाना"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-basil",
      name: "Basil Seeds",
      name_hi: "सब्जा बीज",
      aliases: ["sabja", "tukmaria"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-hemp",
      name: "Edible Hemp Seeds",
      name_hi: "खाने योग्य भांग के बीज",
      aliases: ["hemp hearts"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-cucumber",
      name: "Cucumber Seeds",
      name_hi: "खीरे के बीज",
      aliases: ["kheera seeds"],
      unit: "kg",
      type: "seed"
    },
    {
      id: "seed-cantaloupe",
      name: "Muskmelon Seeds",
      name_hi: "खरबूजे के बीज",
      aliases: ["kharbuja seeds"],
      unit: "kg",
      type: "seed"
    },

    /* -------------------- ROASTED & MIXED PRODUCTS -------------------- */

    {
      id: "dry-mix-classic",
      name: "Mixed Dry Fruits",
      name_hi: "मिक्स ड्राई फ्रूट्स",
      aliases: ["dry fruit mix", "मिक्स मेवा"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-mix-premium",
      name: "Premium Dry Fruit Mix",
      name_hi: "प्रीमियम ड्राई फ्रूट मिक्स",
      aliases: ["premium mix nuts"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-mix-trail",
      name: "Trail Mix",
      name_hi: "ट्रेल मिक्स",
      aliases: ["nuts and seeds mix"],
      unit: "pack",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-mix-roasted",
      name: "Roasted Nuts Mix",
      name_hi: "भुने मेवों का मिक्स",
      aliases: ["roasted dry fruit mix"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-mix-salted",
      name: "Salted Nuts Mix",
      name_hi: "नमकीन मेवा मिक्स",
      aliases: ["salted nuts"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-mix-seeds",
      name: "Mixed Seeds",
      name_hi: "मिक्स बीज",
      aliases: ["seed mix"],
      unit: "kg",
      type: "seed_mix"
    },
    {
      id: "dry-mix-panchmeva",
      name: "Panchmeva",
      name_hi: "पंचमेवा",
      aliases: ["five dry fruits mix"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-makhana-plain",
      name: "Plain Makhana",
      name_hi: "सादा मखाना",
      aliases: ["fox nuts", "फॉक्स नट्स"],
      unit: "kg",
      type: "makhana"
    },
    {
      id: "dry-makhana-roasted",
      name: "Roasted Makhana",
      name_hi: "भुना मखाना",
      aliases: ["roasted fox nuts"],
      unit: "kg",
      type: "makhana"
    },
    {
      id: "dry-makhana-masala",
      name: "Masala Makhana",
      name_hi: "मसाला मखाना",
      aliases: ["spicy makhana"],
      unit: "pack",
      type: "makhana"
    },
    {
      id: "dry-makhana-caramel",
      name: "Caramel Makhana",
      name_hi: "कैरामेल मखाना",
      aliases: ["sweet makhana"],
      unit: "pack",
      type: "makhana"
    },

    /* -------------------- LOCAL & LOOSE PRODUCTS -------------------- */

    {
      id: "dry-local-almond",
      name: "Local Loose Almonds",
      name_hi: "खुले लोकल बादाम",
      aliases: ["loose badam"],
      unit: "kg",
      type: "almond"
    },
    {
      id: "dry-local-cashew",
      name: "Local Loose Cashews",
      name_hi: "खुले लोकल काजू",
      aliases: ["loose kaju"],
      unit: "kg",
      type: "cashew"
    },
    {
      id: "dry-local-pistachio",
      name: "Local Loose Pistachios",
      name_hi: "खुले लोकल पिस्ता",
      aliases: ["loose pista"],
      unit: "kg",
      type: "pistachio"
    },
    {
      id: "dry-local-walnut",
      name: "Local Loose Walnuts",
      name_hi: "खुले लोकल अखरोट",
      aliases: ["loose akhrot"],
      unit: "kg",
      type: "walnut"
    },
    {
      id: "dry-local-raisin",
      name: "Local Loose Raisins",
      name_hi: "खुली लोकल किशमिश",
      aliases: ["loose kismis"],
      unit: "kg",
      type: "raisin"
    },
    {
      id: "dry-local-dates",
      name: "Local Loose Dates",
      name_hi: "खुले लोकल खजूर",
      aliases: ["loose khajoor"],
      unit: "kg",
      type: "date"
    },
    {
      id: "dry-local-fig",
      name: "Local Loose Figs",
      name_hi: "खुले लोकल अंजीर",
      aliases: ["loose anjeer"],
      unit: "kg",
      type: "dried_fruit"
    },
    {
      id: "dry-local-makhana",
      name: "Local Loose Makhana",
      name_hi: "खुला लोकल मखाना",
      aliases: ["loose fox nuts"],
      unit: "kg",
      type: "makhana"
    },
    {
      id: "dry-local-mix",
      name: "Local Mixed Dry Fruits",
      name_hi: "लोकल मिक्स मेवा",
      aliases: ["loose dry fruit mix"],
      unit: "kg",
      type: "dry_fruit_mix"
    },
    {
      id: "dry-local-seeds",
      name: "Local Mixed Seeds",
      name_hi: "लोकल मिक्स बीज",
      aliases: ["loose seed mix"],
      unit: "kg",
      type: "seed_mix"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 /* ============================================================
   CATEGORY 14: CHOCOLATES, CANDIES, TOFFEES & SWEETS
   PART 1 OF 2
   ============================================================ */

(function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;

  if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
  }

  const CATEGORY = "chocolates_candies_toffees_sweets";

  const brands = [
    "Cadbury", "Cadbury Dairy Milk", "Cadbury Silk",
    "Cadbury Bournville", "Cadbury Fuse", "Cadbury 5 Star",
    "Cadbury Perk", "Cadbury Gems", "Cadbury Temptations",
    "Cadbury Oreo", "Hershey's", "Hershey's Kisses",
    "Hershey's Bars", "Hershey's Nuggets", "Hershey's Syrup",
    "Nestle", "Nestle KitKat", "Nestle Munch",
    "Nestle Milkybar", "Nestle Bar One", "Nestle Alpino",
    "Nestle Polo", "Mars", "Snickers", "Bounty", "Twix",
    "Galaxy", "Toblerone", "Ferrero Rocher", "Kinder",
    "Kinder Joy", "Kinder Bueno", "Kinder Chocolate",
    "Lindt", "Lindor", "Ritter Sport", "Amul",
    "Amul Dark Chocolate", "Campco", "Lotus", "Lotte",
    "Lotte Choco Pie", "Lotte Choco Cookie", "Parle",
    "Parle Melody", "Parle Kismi", "Parle Mango Bite",
    "Parle Poppins", "Parle Kaccha Mango Bite",
    "Parle Londonderry", "Parle Mazelo", "ITC", "Fabelle",
    "Sunfeast", "ChocOn", "Chocoville", "Morde",
    "Van Houten", "Callebaut", "Belcolade",
    "Barry Callebaut", "Cocoacraft", "Smoor",
    "Paul And Mike", "Manam Chocolate", "Pascati",
    "Mason & Co", "Zevic", "Urban Platter",
    "Local Chocolate Maker", "Local Bakery Chocolate",

    "Perfetti Van Melle", "Alpenliebe", "Center Fresh",
    "Center Fruit", "Mentos", "Chupa Chups", "Happydent",
    "Big Babol", "Boomer", "Pulse", "Kopiko", "Chlormint",
    "Candyman", "Candyman Eclairs", "Candyman Fantastik",
    "Candyman Toffichoo", "Pan Pasand", "Ravalgaon",
    "Ravalgaon Mango Mood", "Ravalgaon Pan Pasand",
    "Juzt Jelly", "Jelly Belly", "Jolly Rancher",
    "Werther's Original", "Ricola", "Fisherman's Friend",
    "Halls", "Orbit", "Extra", "Wrigley's", "Doublemint",
    "Trident", "Hajmola", "Dabur", "Patanjali",

    "Haldiram's", "Bikano", "Bikaji", "Bikanervala",
    "Chitale Bandhu", "Prabhuji", "Gits", "MTR",
    "Adukale", "Anand Sweets", "K.C. Das",
    "Balaram Mullick", "Kanti Sweets", "A2B",
    "Adyar Ananda Bhavan", "Sri Krishna Sweets",
    "Sree Mithai", "Haldiram Nagpur", "Kaka Halwai",
    "Jodhpur Sweets", "Bikaner Sweets", "Om Sweets",
    "Ghasitaram", "Pulla Reddy Sweets", "Dadu's",
    "Agarwal Sweets", "Local Halwai", "Local Sweet Shop",
    "Local Mithai Maker", "Local Candy Maker",
    "Local Toffee Maker", "Loose / Unbranded"
  ];

  const products = [

    /* CHOCOLATE BARS & TABLETS */

    {
      id: "sweet-choco-milk",
      name: "Milk Chocolate",
      name_hi: "मिल्क चॉकलेट",
      aliases: ["dairy milk type chocolate", "दूध वाली चॉकलेट"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-dark",
      name: "Dark Chocolate",
      name_hi: "डार्क चॉकलेट",
      aliases: ["bitter chocolate", "कड़वी चॉकलेट"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-white",
      name: "White Chocolate",
      name_hi: "व्हाइट चॉकलेट",
      aliases: ["सफेद चॉकलेट"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-compound",
      name: "Chocolate Compound",
      name_hi: "चॉकलेट कंपाउंड",
      aliases: ["compound chocolate"],
      unit: "kg",
      type: "baking_chocolate"
    },
    {
      id: "sweet-choco-baking",
      name: "Baking Chocolate",
      name_hi: "बेकिंग चॉकलेट",
      aliases: ["cooking chocolate"],
      unit: "pack",
      type: "baking_chocolate"
    },
    {
      id: "sweet-choco-couverture",
      name: "Couverture Chocolate",
      name_hi: "कूवर्चर चॉकलेट",
      aliases: ["couverture"],
      unit: "kg",
      type: "baking_chocolate"
    },
    {
      id: "sweet-choco-hazelnut",
      name: "Hazelnut Chocolate",
      name_hi: "हेज़लनट चॉकलेट",
      aliases: ["nut chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-almond",
      name: "Almond Chocolate",
      name_hi: "बादाम चॉकलेट",
      aliases: ["badam chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-fruit-nut",
      name: "Fruit and Nut Chocolate",
      name_hi: "फ्रूट एंड नट चॉकलेट",
      aliases: ["fruit nut chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-crunch",
      name: "Crunchy Chocolate",
      name_hi: "क्रंची चॉकलेट",
      aliases: ["crunch chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-caramel",
      name: "Caramel Chocolate",
      name_hi: "कैरामेल चॉकलेट",
      aliases: ["caramel bar"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-wafer",
      name: "Chocolate Wafer",
      name_hi: "चॉकलेट वेफर",
      aliases: ["choco wafer"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-filled",
      name: "Filled Chocolate",
      name_hi: "फिलिंग वाली चॉकलेट",
      aliases: ["cream filled chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-truffle",
      name: "Chocolate Truffle",
      name_hi: "चॉकलेट ट्रफल",
      aliases: ["choco truffle"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-praline",
      name: "Chocolate Praline",
      name_hi: "चॉकलेट प्रालिन",
      aliases: ["praline chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-mint",
      name: "Mint Chocolate",
      name_hi: "मिंट चॉकलेट",
      aliases: ["pudina chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-orange",
      name: "Orange Chocolate",
      name_hi: "ऑरेंज चॉकलेट",
      aliases: ["santra chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-strawberry",
      name: "Strawberry Chocolate",
      name_hi: "स्ट्रॉबेरी चॉकलेट",
      aliases: ["strawberry filled chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-sugarfree",
      name: "Sugar Free Chocolate",
      name_hi: "शुगर फ्री चॉकलेट",
      aliases: ["sugarless chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-mini",
      name: "Mini Chocolate",
      name_hi: "मिनी चॉकलेट",
      aliases: ["small chocolate"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-assorted",
      name: "Assorted Chocolates",
      name_hi: "मिक्स चॉकलेट",
      aliases: ["mixed chocolate pack"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-coins",
      name: "Chocolate Coins",
      name_hi: "चॉकलेट सिक्के",
      aliases: ["chocolate coin"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-lollipop",
      name: "Chocolate Lollipop",
      name_hi: "चॉकलेट लॉलीपॉप",
      aliases: ["choco lollipop"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-pencil",
      name: "Chocolate Pencil",
      name_hi: "चॉकलेट पेंसिल",
      aliases: ["choco pencil"],
      unit: "piece",
      type: "chocolate"
    },
    {
      id: "sweet-choco-balls",
      name: "Chocolate Balls",
      name_hi: "चॉकलेट बॉल्स",
      aliases: ["choco balls"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-coated-nuts",
      name: "Chocolate Coated Nuts",
      name_hi: "चॉकलेट चढ़े मेवे",
      aliases: ["choco almonds", "chocolate cashew"],
      unit: "kg",
      type: "chocolate"
    },

    /* CHOCOLATE PRODUCTS */

    {
      id: "sweet-choco-spread",
      name: "Chocolate Spread",
      name_hi: "चॉकलेट स्प्रेड",
      aliases: ["choco spread"],
      unit: "jar",
      type: "chocolate_spread"
    },
    {
      id: "sweet-choco-hazelnut-spread",
      name: "Hazelnut Chocolate Spread",
      name_hi: "हेज़लनट चॉकलेट स्प्रेड",
      aliases: ["nutella type spread"],
      unit: "jar",
      type: "chocolate_spread"
    },
    {
      id: "sweet-choco-syrup",
      name: "Chocolate Syrup",
      name_hi: "चॉकलेट सिरप",
      aliases: ["choco sauce"],
      unit: "bottle",
      type: "chocolate"
    },
    {
      id: "sweet-choco-drinking",
      name: "Drinking Chocolate",
      name_hi: "ड्रिंकिंग चॉकलेट",
      aliases: ["hot chocolate powder"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-powder",
      name: "Chocolate Powder",
      name_hi: "चॉकलेट पाउडर",
      aliases: ["cocoa chocolate powder"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-milkshake",
      name: "Chocolate Milkshake Mix",
      name_hi: "चॉकलेट मिल्कशेक मिक्स",
      aliases: ["chocolate shake powder"],
      unit: "pack",
      type: "chocolate"
    },
    {
      id: "sweet-choco-gift-box",
      name: "Chocolate Gift Box",
      name_hi: "चॉकलेट गिफ्ट बॉक्स",
      aliases: ["chocolate gift pack"],
      unit: "box",
      type: "chocolate_gift"
    },
    {
      id: "sweet-choco-easter",
      name: "Chocolate Eggs",
      name_hi: "चॉकलेट अंडे",
      aliases: ["choco egg"],
      unit: "piece",
      type: "chocolate"
    },

    /* TOFFEES & ECLAIRS */

    {
      id: "sweet-toffee-milk",
      name: "Milk Toffee",
      name_hi: "मिल्क टॉफी",
      aliases: ["दूध टॉफी"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-caramel",
      name: "Caramel Toffee",
      name_hi: "कैरामेल टॉफी",
      aliases: ["caramel candy"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-chocolate",
      name: "Chocolate Toffee",
      name_hi: "चॉकलेट टॉफी",
      aliases: ["choco toffee"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-eclair",
      name: "Chocolate Eclair",
      name_hi: "चॉकलेट एक्लेयर",
      aliases: ["eclairs", "एक्लेयर टॉफी"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-coffee",
      name: "Coffee Toffee",
      name_hi: "कॉफी टॉफी",
      aliases: ["coffee candy"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-fruit",
      name: "Fruit Toffee",
      name_hi: "फ्रूट टॉफी",
      aliases: ["fruit candy"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-mango",
      name: "Mango Toffee",
      name_hi: "मैंगो टॉफी",
      aliases: ["aam toffee"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-mint",
      name: "Mint Toffee",
      name_hi: "पुदीना टॉफी",
      aliases: ["mint candy"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-butter",
      name: "Butter Toffee",
      name_hi: "बटर टॉफी",
      aliases: ["butterscotch toffee"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-coconut",
      name: "Coconut Toffee",
      name_hi: "नारियल टॉफी",
      aliases: ["coconut candy"],
      unit: "piece",
      type: "toffee"
    },
    {
      id: "sweet-toffee-mixed",
      name: "Mixed Toffee",
      name_hi: "मिक्स टॉफी",
      aliases: ["assorted toffee"],
      unit: "kg",
      type: "toffee"
    },
    {
      id: "sweet-toffee-local",
      name: "Local Loose Toffee",
      name_hi: "खुली लोकल टॉफी",
      aliases: ["loose toffee"],
      unit: "kg",
      type: "toffee"
    },

    /* CANDIES */

    {
      id: "sweet-candy-fruit",
      name: "Fruit Candy",
      name_hi: "फ्रूट कैंडी",
      aliases: ["fruit sweets"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-mango",
      name: "Mango Candy",
      name_hi: "मैंगो कैंडी",
      aliases: ["aam candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-kaccha-mango",
      name: "Raw Mango Candy",
      name_hi: "कच्चे आम की कैंडी",
      aliases: ["kaccha aam candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-imli",
      name: "Imli Candy",
      name_hi: "इमली कैंडी",
      aliases: ["tamarind candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-amla",
      name: "Amla Candy",
      name_hi: "आंवला कैंडी",
      aliases: ["amla sweet"],
      unit: "kg",
      type: "candy"
    },
    {
      id: "sweet-candy-orange",
      name: "Orange Candy",
      name_hi: "ऑरेंज कैंडी",
      aliases: ["santra candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-lemon",
      name: "Lemon Candy",
      name_hi: "नींबू कैंडी",
      aliases: ["nimbu candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-strawberry",
      name: "Strawberry Candy",
      name_hi: "स्ट्रॉबेरी कैंडी",
      aliases: ["strawberry sweets"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-pineapple",
      name: "Pineapple Candy",
      name_hi: "अनानास कैंडी",
      aliases: ["pineapple sweets"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-mint",
      name: "Mint Candy",
      name_hi: "मिंट कैंडी",
      aliases: ["pudina candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-ginger",
      name: "Ginger Candy",
      name_hi: "अदरक कैंडी",
      aliases: ["adrak candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-herbal",
      name: "Herbal Candy",
      name_hi: "हर्बल कैंडी",
      aliases: ["herbal sweets"],
      unit: "pack",
      type: "candy"
    },
    {
      id: "sweet-candy-honey",
      name: "Honey Candy",
      name_hi: "हनी कैंडी",
      aliases: ["shahad candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-masala",
      name: "Masala Candy",
      name_hi: "मसाला कैंडी",
      aliases: ["spicy candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-khatta-meetha",
      name: "Khatta Meetha Candy",
      name_hi: "खट्टी मीठी कैंडी",
      aliases: ["sour sweet candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-hard",
      name: "Hard Candy",
      name_hi: "हार्ड कैंडी",
      aliases: ["कठोर कैंडी"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-filled",
      name: "Filled Candy",
      name_hi: "फिलिंग वाली कैंडी",
      aliases: ["center filled candy"],
      unit: "piece",
      type: "candy"
    },
    {
      id: "sweet-candy-sugarfree",
      name: "Sugar Free Candy",
      name_hi: "शुगर फ्री कैंडी",
      aliases: ["sugarless candy"],
      unit: "pack",
      type: "candy"
    },
    {
      id: "sweet-candy-mixed",
      name: "Mixed Candy",
      name_hi: "मिक्स कैंडी",
      aliases: ["assorted candy"],
      unit: "kg",
      type: "candy"
    },

    /* LOLLIPOPS & GUMMIES */

    {
      id: "sweet-lollipop-fruit",
      name: "Fruit Lollipop",
      name_hi: "फ्रूट लॉलीपॉप",
      aliases: ["fruit lolly"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-lollipop-mango",
      name: "Mango Lollipop",
      name_hi: "मैंगो लॉलीपॉप",
      aliases: ["aam lolly"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-lollipop-strawberry",
      name: "Strawberry Lollipop",
      name_hi: "स्ट्रॉबेरी लॉलीपॉप",
      aliases: ["strawberry lolly"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-lollipop-creamy",
      name: "Cream Lollipop",
      name_hi: "क्रीम लॉलीपॉप",
      aliases: ["milk lolly"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-lollipop-chocolate",
      name: "Chocolate Lollipop",
      name_hi: "चॉकलेट लॉलीपॉप",
      aliases: ["choco lolly"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-lollipop-ring",
      name: "Ring Lollipop",
      name_hi: "रिंग लॉलीपॉप",
      aliases: ["ring candy"],
      unit: "piece",
      type: "lollipop"
    },
    {
      id: "sweet-gummy-bears",
      name: "Gummy Bears",
      name_hi: "गमी बियर",
      aliases: ["jelly bears"],
      unit: "pack",
      type: "gummy"
    },
    {
      id: "sweet-gummy-worms",
      name: "Gummy Worms",
      name_hi: "गमी वर्म्स",
      aliases: ["jelly worms"],
      unit: "pack",
      type: "gummy"
    },
    {
      id: "sweet-gummy-fruit",
      name: "Fruit Gummies",
      name_hi: "फ्रूट गमी",
      aliases: ["fruit jelly candy"],
      unit: "pack",
      type: "gummy"
    },
    {
      id: "sweet-jelly-candy",
      name: "Jelly Candy",
      name_hi: "जेली कैंडी",
      aliases: ["jelly sweets"],
      unit: "piece",
      type: "gummy"
    },
    {
      id: "sweet-jelly-cup",
      name: "Jelly Cups",
      name_hi: "जेली कप",
      aliases: ["jelly cup"],
      unit: "piece",
      type: "gummy"
    },

    /* CHEWING GUM & MINTS */

    {
      id: "sweet-gum-mint",
      name: "Mint Chewing Gum",
      name_hi: "मिंट च्यूइंग गम",
      aliases: ["mint gum"],
      unit: "pack",
      type: "chewing_gum"
    },
    {
      id: "sweet-gum-fruit",
      name: "Fruit Chewing Gum",
      name_hi: "फ्रूट च्यूइंग गम",
      aliases: ["fruit gum"],
      unit: "pack",
      type: "chewing_gum"
    },
    {
      id: "sweet-gum-bubble",
      name: "Bubble Gum",
      name_hi: "बबल गम",
      aliases: ["bubblegum"],
      unit: "piece",
      type: "chewing_gum"
    },
    {
      id: "sweet-gum-center-filled",
      name: "Center Filled Gum",
      name_hi: "सेंटर फिल्ड गम",
      aliases: ["filled chewing gum"],
      unit: "pack",
      type: "chewing_gum"
    },
    {
      id: "sweet-gum-sugarfree",
      name: "Sugar Free Chewing Gum",
      name_hi: "शुगर फ्री च्यूइंग गम",
      aliases: ["sugarless gum"],
      unit: "pack",
      type: "chewing_gum"
    },
    {
      id: "sweet-mint-mouth-freshener",
      name: "Mint Mouth Freshener",
      name_hi: "मिंट माउथ फ्रेशनर",
      aliases: ["mint freshener"],
      unit: "pack",
      type: "mint"
    },
    {
      id: "sweet-mint-strong",
      name: "Strong Mint",
      name_hi: "स्ट्रॉन्ग मिंट",
      aliases: ["strong mint candy"],
      unit: "pack",
      type: "mint"
    },
    {
      id: "sweet-mint-pellets",
      name: "Mint Pellets",
      name_hi: "मिंट पेलेट्स",
      aliases: ["mint tablets"],
      unit: "pack",
      type: "mint"
    },

/* PART 1 ENDS HERE — PART 2 CONTINUES THE SAME ARRAY */
 /* INDIAN TRADITIONAL SWEETS */

    {
      id: "sweet-ladoo-besan",
      name: "Besan Ladoo",
      name_hi: "बेसन लड्डू",
      aliases: ["besan laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-motichoor",
      name: "Motichoor Ladoo",
      name_hi: "मोतीचूर लड्डू",
      aliases: ["motichur laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-boondi",
      name: "Boondi Ladoo",
      name_hi: "बूंदी लड्डू",
      aliases: ["boondi laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-atta",
      name: "Atta Ladoo",
      name_hi: "आटे के लड्डू",
      aliases: ["wheat ladoo"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-coconut",
      name: "Coconut Ladoo",
      name_hi: "नारियल लड्डू",
      aliases: ["nariyal laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-ragi",
      name: "Ragi Ladoo",
      name_hi: "रागी लड्डू",
      aliases: ["nachni laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-dry-fruit",
      name: "Dry Fruit Ladoo",
      name_hi: "ड्राई फ्रूट लड्डू",
      aliases: ["meva laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-gond",
      name: "Gond Ladoo",
      name_hi: "गोंद लड्डू",
      aliases: ["edible gum laddu"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ladoo-pinni",
      name: "Pinni",
      name_hi: "पिन्नी",
      aliases: ["punjabi pinni"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-plain",
      name: "Plain Barfi",
      name_hi: "सादी बर्फी",
      aliases: ["barfi", "बर्फी"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-milk",
      name: "Milk Barfi",
      name_hi: "मिल्क बर्फी",
      aliases: ["doodh barfi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-kaju",
      name: "Kaju Barfi",
      name_hi: "काजू बर्फी",
      aliases: ["kaju katli", "काजू कतली"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-pista",
      name: "Pista Barfi",
      name_hi: "पिस्ता बर्फी",
      aliases: ["pista katli"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-coconut",
      name: "Coconut Barfi",
      name_hi: "नारियल बर्फी",
      aliases: ["nariyal barfi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-chocolate",
      name: "Chocolate Barfi",
      name_hi: "चॉकलेट बर्फी",
      aliases: ["choco barfi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-badam",
      name: "Badam Barfi",
      name_hi: "बादाम बर्फी",
      aliases: ["almond barfi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-besan",
      name: "Besan Barfi",
      name_hi: "बेसन बर्फी",
      aliases: ["mohanthal"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-barfi-kalakand",
      name: "Kalakand",
      name_hi: "कलाकंद",
      aliases: ["milk cake sweet"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-peda",
      name: "Peda",
      name_hi: "पेड़ा",
      aliases: ["mathura peda"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-peda-kesar",
      name: "Kesar Peda",
      name_hi: "केसर पेड़ा",
      aliases: ["saffron peda"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-peda-dharwad",
      name: "Dharwad Peda",
      name_hi: "धारवाड़ पेड़ा",
      aliases: ["dharwad sweet"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-gulab-jamun",
      name: "Gulab Jamun",
      name_hi: "गुलाब जामुन",
      aliases: ["gulabjamun"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-kala-jamun",
      name: "Kala Jamun",
      name_hi: "काला जामुन",
      aliases: ["kala gulab jamun"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-rasgulla",
      name: "Rasgulla",
      name_hi: "रसगुल्ला",
      aliases: ["rosogolla"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-rajbhog",
      name: "Rajbhog",
      name_hi: "राजभोग",
      aliases: ["raj bhog"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-rasmalai",
      name: "Rasmalai",
      name_hi: "रसमलाई",
      aliases: ["ras malai"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-sandesh",
      name: "Sandesh",
      name_hi: "संदेश",
      aliases: ["bengali sandesh"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-chamcham",
      name: "Cham Cham",
      name_hi: "चमचम",
      aliases: ["chomchom"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-malpua",
      name: "Malpua",
      name_hi: "मालपुआ",
      aliases: ["malpua sweet"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-jalebi",
      name: "Jalebi",
      name_hi: "जलेबी",
      aliases: ["imarti type jalebi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-imarti",
      name: "Imarti",
      name_hi: "इमरती",
      aliases: ["amriti"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-balushahi",
      name: "Balushahi",
      name_hi: "बालूशाही",
      aliases: ["badusha"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-gujiya",
      name: "Gujiya",
      name_hi: "गुझिया",
      aliases: ["karanji"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-shakarpara",
      name: "Shakkarpara",
      name_hi: "शक्करपारा",
      aliases: ["shakar para"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-ghewar",
      name: "Ghewar",
      name_hi: "घेवर",
      aliases: ["rajasthani ghewar"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-sohan-halwa",
      name: "Sohan Halwa",
      name_hi: "सोहन हलवा",
      aliases: ["sohan halwa"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-karachi-halwa",
      name: "Karachi Halwa",
      name_hi: "कराची हलवा",
      aliases: ["bombay halwa"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-moong-halwa",
      name: "Moong Dal Halwa",
      name_hi: "मूंग दाल हलवा",
      aliases: ["moong halwa"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-gajar-halwa",
      name: "Gajar Halwa",
      name_hi: "गाजर का हलवा",
      aliases: ["carrot halwa"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-sooji-halwa",
      name: "Sooji Halwa",
      name_hi: "सूजी का हलवा",
      aliases: ["rava kesari"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-panjiri",
      name: "Panjiri",
      name_hi: "पंजीरी",
      aliases: ["dhania panjiri"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-revdi",
      name: "Revdi",
      name_hi: "रेवड़ी",
      aliases: ["til revdi"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-gajak",
      name: "Gajak",
      name_hi: "गजक",
      aliases: ["til gajak"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-chikki",
      name: "Peanut Chikki",
      name_hi: "मूंगफली चिक्की",
      aliases: ["groundnut chikki"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-til-chikki",
      name: "Til Chikki",
      name_hi: "तिल चिक्की",
      aliases: ["sesame chikki"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-dryfruit-chikki",
      name: "Dry Fruit Chikki",
      name_hi: "ड्राई फ्रूट चिक्की",
      aliases: ["meva chikki"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-petha",
      name: "Petha",
      name_hi: "पेठा",
      aliases: ["agra petha"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-khaja",
      name: "Khaja",
      name_hi: "खाजा",
      aliases: ["khaja sweet"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-anarsa",
      name: "Anarsa",
      name_hi: "अनरसा",
      aliases: ["anarsha"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-thekua",
      name: "Thekua",
      name_hi: "ठेकुआ",
      aliases: ["thekwa"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-modak",
      name: "Modak",
      name_hi: "मोदक",
      aliases: ["ukadiche modak"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-puran-poli",
      name: "Puran Poli",
      name_hi: "पूरन पोली",
      aliases: ["puranpoli"],
      unit: "piece",
      type: "indian_sweet"
    },
    {
      id: "sweet-mysore-pak",
      name: "Mysore Pak",
      name_hi: "मैसूर पाक",
      aliases: ["mysorepak"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-adhirasam",
      name: "Adhirasam",
      name_hi: "अधिरसम",
      aliases: ["athirasam"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-kaju-roll",
      name: "Kaju Roll",
      name_hi: "काजू रोल",
      aliases: ["kaju anjeer roll"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-dryfruit-roll",
      name: "Dry Fruit Roll",
      name_hi: "ड्राई फ्रूट रोल",
      aliases: ["meva roll"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-kheer",
      name: "Kheer",
      name_hi: "खीर",
      aliases: ["rice kheer"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-phirni",
      name: "Phirni",
      name_hi: "फिरनी",
      aliases: ["firni"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-shrikhand",
      name: "Shrikhand",
      name_hi: "श्रीखंड",
      aliases: ["amrakhand"],
      unit: "kg",
      type: "indian_sweet"
    },
    {
      id: "sweet-basundi",
      name: "Basundi",
      name_hi: "बासुंदी",
      aliases: ["basundi sweet"],
      unit: "kg",
      type: "indian_sweet"
    },

    /* REGIONAL SWEETS */

    {
      id: "sweet-malpua-bihar",
      name: "Bihari Malpua",
      name_hi: "बिहारी मालपुआ",
      aliases: ["bihar malpua"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-khurchan",
      name: "Khurchan",
      name_hi: "खुरचन",
      aliases: ["milk khurchan"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-bebinca",
      name: "Bebinca",
      name_hi: "बेबींका",
      aliases: ["goan bebinca"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-kobbari-mithai",
      name: "Coconut Mithai",
      name_hi: "कोब्बरी मिठाई",
      aliases: ["kobbari mithai"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-adhirasam-festival",
      name: "Festival Adhirasam",
      name_hi: "त्योहार अधिरसम",
      aliases: ["festival athirasam"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-sutarfeni",
      name: "Sutarfeni",
      name_hi: "सुतरफेणी",
      aliases: ["sutar feni"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-kesar-peda",
      name: "Kesar Milk Peda",
      name_hi: "केसर मिल्क पेड़ा",
      aliases: ["kesar doodh peda"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-patisa",
      name: "Patisa",
      name_hi: "पतिसा",
      aliases: ["soan papdi type sweet"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-soan-papdi",
      name: "Soan Papdi",
      name_hi: "सोन पापड़ी",
      aliases: ["sohan papdi"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-mohanthal",
      name: "Mohanthal",
      name_hi: "मोहनथाल",
      aliases: ["gujarati mohanthal"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-kopra-pak",
      name: "Kopra Pak",
      name_hi: "कोपरा पाक",
      aliases: ["coconut pak"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-gond-pak",
      name: "Gond Pak",
      name_hi: "गोंद पाक",
      aliases: ["gond sweet"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-dodha",
      name: "Dodha Barfi",
      name_hi: "धोड़ा बर्फी",
      aliases: ["dodha"],
      unit: "kg",
      type: "regional_sweet"
    },
    {
      id: "sweet-pinni-punjabi",
      name: "Punjabi Pinni",
      name_hi: "पंजाबी पिन्नी",
      aliases: ["desi ghee pinni"],
      unit: "kg",
      type: "regional_sweet"
    },

    /* PACKAGED SWEETS */

    {
      id: "sweet-pack-gulab-jamun",
      name: "Packaged Gulab Jamun",
      name_hi: "पैकेट गुलाब जामुन",
      aliases: ["tin gulab jamun", "canned gulab jamun"],
      unit: "tin",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-rasgulla",
      name: "Packaged Rasgulla",
      name_hi: "पैकेट रसगुल्ला",
      aliases: ["tin rasgulla", "canned rasgulla"],
      unit: "tin",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-rasmalai",
      name: "Packaged Rasmalai",
      name_hi: "पैकेट रसमलाई",
      aliases: ["tin rasmalai"],
      unit: "pack",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-soan-papdi",
      name: "Packaged Soan Papdi",
      name_hi: "पैकेट सोन पापड़ी",
      aliases: ["soan papdi box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-kaju-katli",
      name: "Packaged Kaju Katli",
      name_hi: "पैकेट काजू कतली",
      aliases: ["kaju katli box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-ladoo",
      name: "Packaged Ladoo",
      name_hi: "पैकेट लड्डू",
      aliases: ["laddu box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-chikki",
      name: "Packaged Chikki",
      name_hi: "पैकेट चिक्की",
      aliases: ["chikki packet"],
      unit: "pack",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-gajak",
      name: "Packaged Gajak",
      name_hi: "पैकेट गजक",
      aliases: ["gajak packet"],
      unit: "pack",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-petha",
      name: "Packaged Petha",
      name_hi: "पैकेट पेठा",
      aliases: ["petha box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-mixed",
      name: "Assorted Indian Sweets Box",
      name_hi: "मिक्स मिठाई का डिब्बा",
      aliases: ["mixed mithai box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-festival",
      name: "Festival Sweet Box",
      name_hi: "त्योहार मिठाई बॉक्स",
      aliases: ["diwali sweet box", "gift mithai box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-dryfruit",
      name: "Dry Fruit Sweet Box",
      name_hi: "ड्राई फ्रूट मिठाई बॉक्स",
      aliases: ["dry fruit mithai box"],
      unit: "box",
      type: "packaged_sweet"
    },
    {
      id: "sweet-pack-peda",
      name: "Packaged Peda",
      name_hi: "पैकेट पेड़ा",
      aliases: ["peda box"],
      unit: "box",
      type: "packaged_sweet"
    },

    /* SUGAR CANDY & MOUTH FRESHENER */

    {
      id: "sweet-sugar-candy",
      name: "Sugar Candy",
      name_hi: "मिश्री",
      aliases: ["mishri", "rock sugar"],
      unit: "kg",
      type: "sugar_candy"
    },
    {
      id: "sweet-sugar-candy-small",
      name: "Small Sugar Candy",
      name_hi: "छोटी मिश्री",
      aliases: ["small mishri"],
      unit: "kg",
      type: "sugar_candy"
    },
    {
      id: "sweet-sugar-candy-large",
      name: "Large Sugar Candy",
      name_hi: "बड़ी मिश्री",
      aliases: ["large mishri"],
      unit: "kg",
      type: "sugar_candy"
    },
    {
      id: "sweet-candy-coated-fennel",
      name: "Sugar Coated Fennel",
      name_hi: "मीठी सौंफ",
      aliases: ["meethi saunf"],
      unit: "kg",
      type: "mouth_freshener"
    },
    {
      id: "sweet-candy-colored-fennel",
      name: "Colored Sweet Fennel",
      name_hi: "रंगीन मीठी सौंफ",
      aliases: ["rang birangi saunf"],
      unit: "kg",
      type: "mouth_freshener"
    },
    {
      id: "sweet-candy-dhana-dal",
      name: "Sweet Dhana Dal",
      name_hi: "मीठी धनादाल",
      aliases: ["sugar coated coriander"],
      unit: "kg",
      type: "mouth_freshener"
    },
    {
      id: "sweet-candy-mouth-mix",
      name: "Sweet Mouth Freshener Mix",
      name_hi: "मीठा मुखवास",
      aliases: ["mukhwas"],
      unit: "kg",
      type: "mouth_freshener"
    },
    {
      id: "sweet-candy-gulkand",
      name: "Gulkand",
      name_hi: "गुलकंद",
      aliases: ["rose petal preserve"],
      unit: "jar",
      type: "mouth_freshener"
    },
    {
      id: "sweet-candy-supari",
      name: "Sweet Supari",
      name_hi: "मीठी सुपारी",
      aliases: ["sweet betel nut"],
      unit: "kg",
      type: "mouth_freshener"
    },

    /* LOCAL & UNBRANDED */

    {
      id: "sweet-local-chocolate",
      name: "Local Homemade Chocolate",
      name_hi: "लोकल घर की बनी चॉकलेट",
      aliases: ["homemade chocolate", "loose chocolate"],
      unit: "kg",
      type: "local_chocolate"
    },
    {
      id: "sweet-local-candy",
      name: "Local Loose Candy",
      name_hi: "खुली लोकल कैंडी",
      aliases: ["loose candy"],
      unit: "kg",
      type: "local_candy"
    },
    {
      id: "sweet-local-toffee",
      name: "Local Loose Toffee",
      name_hi: "खुली लोकल टॉफी",
      aliases: ["loose toffee"],
      unit: "kg",
      type: "local_toffee"
    },
    {
      id: "sweet-local-lollipop",
      name: "Local Lollipop",
      name_hi: "लोकल लॉलीपॉप",
      aliases: ["local lolly"],
      unit: "piece",
      type: "local_candy"
    },
    {
      id: "sweet-local-ladoo",
      name: "Local Loose Ladoo",
      name_hi: "खुले लोकल लड्डू",
      aliases: ["local laddu"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-barfi",
      name: "Local Loose Barfi",
      name_hi: "खुली लोकल बर्फी",
      aliases: ["local barfi"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-peda",
      name: "Local Loose Peda",
      name_hi: "खुले लोकल पेड़े",
      aliases: ["local peda"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-jalebi",
      name: "Local Fresh Jalebi",
      name_hi: "लोकल ताजी जलेबी",
      aliases: ["fresh jalebi"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-gulab-jamun",
      name: "Local Gulab Jamun",
      name_hi: "लोकल गुलाब जामुन",
      aliases: ["fresh gulab jamun"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-rasgulla",
      name: "Local Rasgulla",
      name_hi: "लोकल रसगुल्ला",
      aliases: ["fresh rasgulla"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-kaju-katli",
      name: "Local Kaju Katli",
      name_hi: "लोकल काजू कतली",
      aliases: ["fresh kaju katli"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-halwa",
      name: "Local Loose Halwa",
      name_hi: "खुला लोकल हलवा",
      aliases: ["local halwa"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-chikki",
      name: "Local Loose Chikki",
      name_hi: "खुली लोकल चिक्की",
      aliases: ["local chikki"],
      unit: "kg",
      type: "local_sweet"
    },
    {
      id: "sweet-local-gajak",
      name: "Local Loose Gajak",
      name_hi: "खुली लोकल गजक",
     aliases: ["local gajak", "loose gajak", "गजक", "खुली गजक"],
      unit: "kg",
      type: "local_sweet"
    }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();

 (function (global) { 
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "icecream_kulfi_frozen_desserts";

  const brands = [
    "Amul",
    "Mother Dairy",
    "Kwality Wall's",
    "Vadilal",
    "Havmor",
    "Cream Bell",
    "Arun Icecreams",
    "Naturals",
    "Baskin Robbins",
    "Häagen-Dazs",
    "London Dairy",
    "NIC Ice Creams",
    "Milky Mist",
    "Cream Stone",
    "Melt It Down",
    "Top N Town",
    "Dinshaw's",
    "Dairy Day",
    "Monginis",
    "Pabrai's",
    "Apsara Ice Creams",
    "Grameen Kulfi",
    "Roll Over",
    "Frozen Bottle",
    "Cocoberry",
    "Gelatissimo",
    "Haagen Dazs",
    "Mother Dairy Safal",
    "Jubilant FoodWorks",
    "Local Ice Cream Maker",
    "Local Kulfi Maker",
    "Local Dairy",
    "Local Frozen Dessert Shop",
    "Loose / Unbranded"
  ];

  const products = [

    /* ICE CREAM - BASIC FLAVOURS */

    {
      id: "ice-vanilla",
      name: "Vanilla Ice Cream",
      name_hi: "वनीला आइसक्रीम",
      aliases: ["vanilla", "वनीला", "वैनिला"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-chocolate",
      name: "Chocolate Ice Cream",
      name_hi: "चॉकलेट आइसक्रीम",
      aliases: ["chocolate ice cream", "चॉकलेट"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-strawberry",
      name: "Strawberry Ice Cream",
      name_hi: "स्ट्रॉबेरी आइसक्रीम",
      aliases: ["strawberry", "स्ट्रॉबेरी"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-mango",
      name: "Mango Ice Cream",
      name_hi: "मैंगो आइसक्रीम",
      aliases: ["mango", "आम वाली आइसक्रीम"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-butterscotch",
      name: "Butterscotch Ice Cream",
      name_hi: "बटरस्कॉच आइसक्रीम",
      aliases: ["butterscotch", "बटरस्कॉच"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-blackcurrant",
      name: "Black Currant Ice Cream",
      name_hi: "ब्लैक करंट आइसक्रीम",
      aliases: ["black currant", "ब्लैक करंट"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-pista",
      name: "Pista Ice Cream",
      name_hi: "पिस्ता आइसक्रीम",
      aliases: ["pista", "पिस्ता"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-kesar-pista",
      name: "Kesar Pista Ice Cream",
      name_hi: "केसर पिस्ता आइसक्रीम",
      aliases: ["kesar pista", "केसर पिस्ता"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-kulfi-flavour",
      name: "Kulfi Flavour Ice Cream",
      name_hi: "कुल्फी फ्लेवर आइसक्रीम",
      aliases: ["kulfi ice cream", "कुल्फी फ्लेवर"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-vanilla-chocolate",
      name: "Vanilla Chocolate Ice Cream",
      name_hi: "वनीला चॉकलेट आइसक्रीम",
      aliases: ["vanilla chocolate"],
      unit: "pack",
      type: "icecream"
    },

    /* PREMIUM & SPECIAL ICE CREAM */

    {
      id: "ice-chocolate-chip",
      name: "Chocolate Chip Ice Cream",
      name_hi: "चॉकलेट चिप आइसक्रीम",
      aliases: ["choco chip"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-cookie-cream",
      name: "Cookies and Cream Ice Cream",
      name_hi: "कुकीज एंड क्रीम आइसक्रीम",
      aliases: ["cookies cream", "oreo ice cream"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-caramel",
      name: "Caramel Ice Cream",
      name_hi: "कैरामेल आइसक्रीम",
      aliases: ["caramel"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-raisin",
      name: "Kishmish Ice Cream",
      name_hi: "किशमिश आइसक्रीम",
      aliases: ["raisin ice cream"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-tutti-frutti",
      name: "Tutti Frutti Ice Cream",
      name_hi: "टूटी फ्रूटी आइसक्रीम",
      aliases: ["tutti frutti"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-rajbhog",
      name: "Rajbhog Ice Cream",
      name_hi: "राजभोग आइसक्रीम",
      aliases: ["rajbhog"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-gulkand",
      name: "Gulkand Ice Cream",
      name_hi: "गुलकंद आइसक्रीम",
      aliases: ["gulkand"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-paan",
      name: "Paan Ice Cream",
      name_hi: "पान आइसक्रीम",
      aliases: ["paan flavour"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-sitaphal",
      name: "Sitaphal Ice Cream",
      name_hi: "सीताफल आइसक्रीम",
      aliases: ["custard apple ice cream", "शरीफा आइसक्रीम"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-tender-coconut",
      name: "Tender Coconut Ice Cream",
      name_hi: "नारियल आइसक्रीम",
      aliases: ["tender coconut"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-jackfruit",
      name: "Jackfruit Ice Cream",
      name_hi: "कटहल आइसक्रीम",
      aliases: ["jackfruit"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-blueberry",
      name: "Blueberry Ice Cream",
      name_hi: "ब्लूबेरी आइसक्रीम",
      aliases: ["blueberry"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-mixed-fruit",
      name: "Mixed Fruit Ice Cream",
      name_hi: "मिक्स फ्रूट आइसक्रीम",
      aliases: ["mix fruit ice cream"],
      unit: "pack",
      type: "icecream"
    },

    /* CONES, CUPS & STICKS */

    {
      id: "ice-cone",
      name: "Ice Cream Cone",
      name_hi: "आइसक्रीम कोन",
      aliases: ["cone ice cream"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-chocolate-cone",
      name: "Chocolate Cone",
      name_hi: "चॉकलेट कोन",
      aliases: ["choco cone"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-wafer-cone",
      name: "Wafer Cone Ice Cream",
      name_hi: "वेफर कोन आइसक्रीम",
      aliases: ["wafer cone"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-cup-small",
      name: "Small Ice Cream Cup",
      name_hi: "छोटी आइसक्रीम कप",
      aliases: ["small cup ice cream"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-cup-large",
      name: "Large Ice Cream Cup",
      name_hi: "बड़ी आइसक्रीम कप",
      aliases: ["large cup ice cream"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-stick",
      name: "Ice Cream Stick",
      name_hi: "आइसक्रीम स्टिक",
      aliases: ["ice lolly"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-choco-bar",
      name: "Chocolate Ice Cream Bar",
      name_hi: "चॉकलेट आइसक्रीम बार",
      aliases: ["choco bar"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-sandwich",
      name: "Ice Cream Sandwich",
      name_hi: "आइसक्रीम सैंडविच",
      aliases: ["ice cream biscuit sandwich"],
      unit: "piece",
      type: "icecream"
    },
    {
      id: "ice-family-pack",
      name: "Family Pack Ice Cream",
      name_hi: "फैमिली पैक आइसक्रीम",
      aliases: ["family pack"],
      unit: "pack",
      type: "icecream"
    },
    {
      id: "ice-party-pack",
      name: "Party Pack Ice Cream",
      name_hi: "पार्टी पैक आइसक्रीम",
      aliases: ["party pack"],
      unit: "pack",
      type: "icecream"
    },

    /* FROZEN DESSERTS */

    {
      id: "ice-frozen-dessert",
      name: "Frozen Dessert",
      name_hi: "फ्रोजन डेज़र्ट",
      aliases: ["frozen dessert"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-chocolate-frozen-dessert",
      name: "Chocolate Frozen Dessert",
      name_hi: "चॉकलेट फ्रोजन डेज़र्ट",
      aliases: ["chocolate frozen dessert"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-frozen-yogurt",
      name: "Frozen Yogurt",
      name_hi: "फ्रोजन योगर्ट",
      aliases: ["frozen yoghurt", "फ्रोजन दही"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-gelato",
      name: "Gelato",
      name_hi: "जेलाटो",
      aliases: ["italian ice cream"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-sorbet",
      name: "Fruit Sorbet",
      name_hi: "फ्रूट सॉर्बे",
      aliases: ["sorbet"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-granita",
      name: "Granita",
      name_hi: "ग्रेनिटा",
      aliases: ["fruit granita"],
      unit: "pack",
      type: "frozen_dessert"
    },

    /* PART 1 CONTINUES IN PART 2 */
 /* KULFI */

    {
      id: "ice-kulfi-malai",
      name: "Malai Kulfi",
      name_hi: "मलाई कुल्फी",
      aliases: ["malai kulfi", "मलाई वाली कुल्फी"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-kesar",
      name: "Kesar Kulfi",
      name_hi: "केसर कुल्फी",
      aliases: ["kesar", "केसर वाली कुल्फी"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-pista",
      name: "Pista Kulfi",
      name_hi: "पिस्ता कुल्फी",
      aliases: ["pista kulfi"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-badam",
      name: "Badam Kulfi",
      name_hi: "बादाम कुल्फी",
      aliases: ["almond kulfi"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-mango",
      name: "Mango Kulfi",
      name_hi: "मैंगो कुल्फी",
      aliases: ["आम कुल्फी"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-chocolate",
      name: "Chocolate Kulfi",
      name_hi: "चॉकलेट कुल्फी",
      aliases: ["choco kulfi"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-matka",
      name: "Matka Kulfi",
      name_hi: "मटका कुल्फी",
      aliases: ["matka malai kulfi"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-stick",
      name: "Kulfi Stick",
      name_hi: "कुल्फी स्टिक",
      aliases: ["stick kulfi"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-falooda",
      name: "Kulfi Falooda",
      name_hi: "कुल्फी फालूदा",
      aliases: ["kulfi faluda"],
      unit: "piece",
      type: "kulfi"
    },
    {
      id: "ice-kulfi-local",
      name: "Local Kulfi",
      name_hi: "स्थानीय कुल्फी",
      aliases: ["loose kulfi", "बिना ब्रांड कुल्फी"],
      unit: "piece",
      type: "kulfi"
    },

    /* FALOODA & ICE CANDY */

    {
      id: "ice-falooda",
      name: "Falooda",
      name_hi: "फालूदा",
      aliases: ["faluda"],
      unit: "glass",
      type: "frozen_dessert"
    },
    {
      id: "ice-falooda-mix",
      name: "Falooda Mix",
      name_hi: "फालूदा मिक्स",
      aliases: ["faluda mix"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-ice-candy-orange",
      name: "Orange Ice Candy",
      name_hi: "संतरा आइस कैंडी",
      aliases: ["orange ice lolly"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-ice-candy-mango",
      name: "Mango Ice Candy",
      name_hi: "मैंगो आइस कैंडी",
      aliases: ["mango ice lolly"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-ice-candy-kala-khatta",
      name: "Kala Khatta Ice Candy",
      name_hi: "काला खट्टा आइस कैंडी",
      aliases: ["kala khatta gola"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-ice-candy-lemon",
      name: "Lemon Ice Candy",
      name_hi: "नींबू आइस कैंडी",
      aliases: ["lemon ice lolly"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-ice-candy-cola",
      name: "Cola Ice Candy",
      name_hi: "कोला आइस कैंडी",
      aliases: ["cola ice lolly"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-ice-candy-mixed",
      name: "Mixed Fruit Ice Candy",
      name_hi: "मिक्स फ्रूट आइस कैंडी",
      aliases: ["mixed ice candy"],
      unit: "piece",
      type: "ice_candy"
    },
    {
      id: "ice-gola",
      name: "Ice Gola",
      name_hi: "बर्फ का गोला",
      aliases: ["baraf gola", "चुस्की"],
      unit: "piece",
      type: "ice_candy"
    },

    /* FROZEN INDIAN DESSERTS */

    {
      id: "ice-frozen-gulab-jamun",
      name: "Frozen Gulab Jamun",
      name_hi: "फ्रोजन गुलाब जामुन",
      aliases: ["frozen jamun"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-frozen-rasmalai",
      name: "Frozen Rasmalai",
      name_hi: "फ्रोजन रसमलाई",
      aliases: ["frozen ras malai"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-frozen-rasgulla",
      name: "Frozen Rasgulla",
      name_hi: "फ्रोजन रसगुल्ला",
      aliases: ["frozen roshogolla"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-frozen-shrikhand",
      name: "Frozen Shrikhand",
      name_hi: "फ्रोजन श्रीखंड",
      aliases: ["frozen amrakhand"],
      unit: "pack",
      type: "frozen_dessert"
    },
    {
      id: "ice-frozen-kheer",
      name: "Frozen Kheer",
      name_hi: "फ्रोजन खीर",
      aliases: ["frozen rice pudding"],
      unit: "pack",
      type: "frozen_dessert"
    },

    /* LOCAL & UNBRANDED PRODUCTS */

    {
      id: "ice-local-matka",
      name: "Local Matka Ice Cream",
      name_hi: "स्थानीय मटका आइसक्रीम",
      aliases: ["matka ice cream", "मटका आइसक्रीम"],
      unit: "piece",
      type: "local_icecream"
    },
    {
      id: "ice-local-stick",
      name: "Local Ice Cream Stick",
      name_hi: "स्थानीय आइसक्रीम स्टिक",
      aliases: ["loose ice cream stick"],
      unit: "piece",
      type: "local_icecream"
    },
    {
      id: "ice-local-cup",
      name: "Local Ice Cream Cup",
      name_hi: "स्थानीय आइसक्रीम कप",
      aliases: ["loose ice cream cup"],
      unit: "piece",
      type: "local_icecream"
    },
    {
      id: "ice-local-cone",
      name: "Local Ice Cream Cone",
      name_hi: "स्थानीय आइसक्रीम कोन",
      aliases: ["loose cone"],
      unit: "piece",
      type: "local_icecream"
    },
    {
      id: "ice-local-family-pack",
      name: "Local Family Pack Ice Cream",
      name_hi: "स्थानीय फैमिली पैक आइसक्रीम",
      aliases: ["local family pack"],
      unit: "pack",
      type: "local_icecream"
    },
    {
      id: "ice-local-falooda",
      name: "Local Falooda",
      name_hi: "स्थानीय फालूदा",
      aliases: ["loose falooda"],
      unit: "glass",
      type: "local_icecream"
    },
    {
      id: "ice-local-gola",
      name: "Local Ice Gola",
      name_hi: "स्थानीय बर्फ का गोला",
      aliases: ["local gola", "बर्फ गोला"],
      unit: "piece",
      type: "local_icecream"
    },
    {
      id: "ice-local-frozen-dessert",
      name: "Local Frozen Dessert",
      name_hi: "स्थानीय फ्रोजन डेज़र्ट",
      aliases: ["loose frozen dessert"],
      unit: "pack",
      type: "local_icecream"
    }

  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 


    /* PART 1 CONTINUES IN PART 2 */
 (function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "frozen_foods_ready_to_cook";

  const brands = [
    "McCain",
    "ITC Master Chef",
    "Godrej Yummiez",
    "Sumeru",
    "Prasuma",
    "Venky's",
    "Suguna",
    "Licious",
    "Zappfresh",
    "FreshToHome",
    "Meatzza",
    "Al Kabeer",
    "CP Foods",
    "Mushroom Company",
    "HyFun",
    "Iscon Balaji",
    "Safal",
    "Mother Dairy",
    "Amul",
    "Haldiram's",
    "MTR",
    "Gits",
    "iD Fresh Food",
    "ITC Kitchens of India",
    "Kitchens of India",
    "Keventers",
    "Wow! Momo",
    "Wow! China",
    "Prasuma Momos",
    "Bambino",
    "Bikano",
    "Vadilal",
    "Farm Fresh",
    "Local Frozen Food Maker",
    "Local Food Processor",
    "Local Meat Shop",
    "Local Poultry Shop",
    "Local Fish Supplier",
    "Loose / Unbranded"
  ];

  const products = [

    /* FROZEN VEGETABLES */

    {
      id: "frozen-green-peas",
      name: "Frozen Green Peas",
      name_hi: "फ्रोजन हरी मटर",
      aliases: ["frozen matar", "जमी हुई मटर"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-sweet-corn",
      name: "Frozen Sweet Corn",
      name_hi: "फ्रोजन स्वीट कॉर्न",
      aliases: ["frozen corn", "जमी हुई मकई"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-baby-corn",
      name: "Frozen Baby Corn",
      name_hi: "फ्रोजन बेबी कॉर्न",
      aliases: ["baby corn"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-mixed-vegetables",
      name: "Frozen Mixed Vegetables",
      name_hi: "फ्रोजन मिक्स सब्जियाँ",
      aliases: ["mixed veg", "मिक्स वेज"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-carrot",
      name: "Frozen Carrot",
      name_hi: "फ्रोजन गाजर",
      aliases: ["frozen gajar"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-beans",
      name: "Frozen French Beans",
      name_hi: "फ्रोजन फ्रेंच बीन्स",
      aliases: ["frozen beans"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-broccoli",
      name: "Frozen Broccoli",
      name_hi: "फ्रोजन ब्रोकली",
      aliases: ["frozen broccoli florets"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-cauliflower",
      name: "Frozen Cauliflower",
      name_hi: "फ्रोजन फूलगोभी",
      aliases: ["frozen gobhi"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-spinach",
      name: "Frozen Spinach",
      name_hi: "फ्रोजन पालक",
      aliases: ["frozen palak"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-methi",
      name: "Frozen Fenugreek Leaves",
      name_hi: "फ्रोजन मेथी",
      aliases: ["frozen methi"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-edamame",
      name: "Frozen Edamame",
      name_hi: "फ्रोजन एडामामे",
      aliases: ["edamame beans"],
      unit: "pack",
      type: "frozen_vegetable"
    },
    {
      id: "frozen-vegetable-mix",
      name: "Frozen Stir Fry Vegetable Mix",
      name_hi: "फ्रोजन स्टिर फ्राई सब्जी मिक्स",
      aliases: ["stir fry mix"],
      unit: "pack",
      type: "frozen_vegetable"
    },

    /* POTATO & FROZEN SNACKS */

    {
      id: "frozen-french-fries",
      name: "Frozen French Fries",
      name_hi: "फ्रोजन फ्रेंच फ्राइज",
      aliases: ["french fries", "फ्राइज"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-crinkle-fries",
      name: "Crinkle Cut Fries",
      name_hi: "क्रिंकल कट फ्राइज",
      aliases: ["crinkle fries"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-potato-wedges",
      name: "Potato Wedges",
      name_hi: "पोटैटो वेजेस",
      aliases: ["potato wedges"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-potato-smiles",
      name: "Potato Smiles",
      name_hi: "पोटैटो स्माइल्स",
      aliases: ["smiley potatoes", "potato smiley"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-hash-brown",
      name: "Hash Browns",
      name_hi: "हैश ब्राउन",
      aliases: ["hashbrown"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-potato-bites",
      name: "Potato Bites",
      name_hi: "पोटैटो बाइट्स",
      aliases: ["potato pops"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-potato-patty",
      name: "Potato Patty",
      name_hi: "आलू पैटी",
      aliases: ["aloo patty"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-veg-burger-patty",
      name: "Vegetable Burger Patty",
      name_hi: "वेज बर्गर पैटी",
      aliases: ["veg patty", "burger patty"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-paneer-patty",
      name: "Paneer Patty",
      name_hi: "पनीर पैटी",
      aliases: ["paneer burger patty"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-veg-nuggets",
      name: "Vegetable Nuggets",
      name_hi: "वेज नगेट्स",
      aliases: ["veg nuggets"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-cheese-balls",
      name: "Cheese Balls",
      name_hi: "चीज बॉल्स",
      aliases: ["cheese bites"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-cheese-corn-nuggets",
      name: "Cheese Corn Nuggets",
      name_hi: "चीज कॉर्न नगेट्स",
      aliases: ["corn cheese nuggets"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-spring-roll",
      name: "Vegetable Spring Roll",
      name_hi: "वेज स्प्रिंग रोल",
      aliases: ["spring roll"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-cheese-spring-roll",
      name: "Cheese Spring Roll",
      name_hi: "चीज स्प्रिंग रोल",
      aliases: ["cheese roll"],
      unit: "pack",
      type: "frozen_snack"
    },

    /* MOMOS & FROZEN INDIAN SNACKS */

    {
      id: "frozen-veg-momos",
      name: "Vegetable Momos",
      name_hi: "वेज मोमोज",
      aliases: ["veg momo", "वेज मोमो"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-paneer-momos",
      name: "Paneer Momos",
      name_hi: "पनीर मोमोज",
      aliases: ["paneer momo"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-chicken-momos",
      name: "Chicken Momos",
      name_hi: "चिकन मोमोज",
      aliases: ["chicken momo"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-fried-momos",
      name: "Fried Momos",
      name_hi: "फ्राइड मोमोज",
      aliases: ["fried momo"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-tandoori-momos",
      name: "Tandoori Momos",
      name_hi: "तंदूरी मोमोज",
      aliases: ["tandoori momo"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-samosa",
      name: "Frozen Samosa",
      name_hi: "फ्रोजन समोसा",
      aliases: ["frozen samosa", "जमा हुआ समोसा"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-kachori",
      name: "Frozen Kachori",
      name_hi: "फ्रोजन कचौड़ी",
      aliases: ["frozen kachori"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-spring-vada",
      name: "Frozen Vada",
      name_hi: "फ्रोजन वडा",
      aliases: ["medu vada frozen", "vada"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-idli",
      name: "Frozen Idli",
      name_hi: "फ्रोजन इडली",
      aliases: ["frozen idly"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-dhokla",
      name: "Frozen Dhokla",
      name_hi: "फ्रोजन ढोकला",
      aliases: ["frozen khaman"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-falafel",
      name: "Frozen Falafel",
      name_hi: "फ्रोजन फलाफल",
      aliases: ["falafel balls"],
      unit: "pack",
      type: "frozen_snack"
    },
    {
      id: "frozen-shami-kebab-veg",
      name: "Vegetarian Shami Kebab",
      name_hi: "वेज शामी कबाब",
      aliases: ["veg shami kebab"],
      unit: "pack",
      type: "frozen_snack"
    },

    /* FROZEN BREADS & DOUGH */

    {
      id: "frozen-plain-paratha",
      name: "Frozen Plain Paratha",
      name_hi: "फ्रोजन सादा पराठा",
      aliases: ["plain frozen paratha"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-aloo-paratha",
      name: "Frozen Aloo Paratha",
      name_hi: "फ्रोजन आलू पराठा",
      aliases: ["aloo frozen paratha"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-gobi-paratha",
      name: "Frozen Gobi Paratha",
      name_hi: "फ्रोजन गोभी पराठा",
      aliases: ["cauliflower paratha"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-paneer-paratha",
      name: "Frozen Paneer Paratha",
      name_hi: "फ्रोजन पनीर पराठा",
      aliases: ["paneer frozen paratha"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-methi-paratha",
      name: "Frozen Methi Paratha",
      name_hi: "फ्रोजन मेथी पराठा",
      aliases: ["methi frozen paratha"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-roti",
      name: "Frozen Roti",
      name_hi: "फ्रोजन रोटी",
      aliases: ["frozen chapati"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-plain-naan",
      name: "Frozen Plain Naan",
      name_hi: "फ्रोजन सादा नान",
      aliases: ["plain naan"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-garlic-naan",
      name: "Frozen Garlic Naan",
      name_hi: "फ्रोजन गार्लिक नान",
      aliases: ["garlic naan"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-tandoori-roti",
      name: "Frozen Tandoori Roti",
      name_hi: "फ्रोजन तंदूरी रोटी",
      aliases: ["tandoori frozen roti"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-pizza-base",
      name: "Frozen Pizza Base",
      name_hi: "फ्रोजन पिज्जा बेस",
      aliases: ["pizza base"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-puff-pastry",
      name: "Frozen Puff Pastry Sheets",
      name_hi: "फ्रोजन पफ पेस्ट्री शीट",
      aliases: ["puff pastry"],
      unit: "pack",
      type: "frozen_bread"
    },
    {
      id: "frozen-spring-roll-sheet",
      name: "Frozen Spring Roll Sheets",
      name_hi: "फ्रोजन स्प्रिंग रोल शीट",
      aliases: ["spring roll wrapper"],
      unit: "pack",
      type: "frozen_bread"
    },

    /* PART 1 CONTINUES IN PART 2 */
 /* FROZEN NON-VEG PRODUCTS */

    {
      id: "frozen-chicken-nuggets",
      name: "Chicken Nuggets",
      name_hi: "चिकन नगेट्स",
      aliases: ["chicken nuggets", "चिकन बाइट्स"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-sausage",
      name: "Chicken Sausages",
      name_hi: "चिकन सॉसेज",
      aliases: ["chicken sausage"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-salami",
      name: "Chicken Salami",
      name_hi: "चिकन सलामी",
      aliases: ["chicken luncheon meat"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-seekh-kebab",
      name: "Chicken Seekh Kebab",
      name_hi: "चिकन सीख कबाब",
      aliases: ["chicken seekh"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-shami-kebab",
      name: "Chicken Shami Kebab",
      name_hi: "चिकन शामी कबाब",
      aliases: ["chicken shami"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-tikka",
      name: "Chicken Tikka",
      name_hi: "चिकन टिक्का",
      aliases: ["frozen chicken tikka"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-wings",
      name: "Chicken Wings",
      name_hi: "चिकन विंग्स",
      aliases: ["frozen wings"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-popcorn",
      name: "Chicken Popcorn",
      name_hi: "चिकन पॉपकॉर्न",
      aliases: ["chicken popcorn bites"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-burger-patty",
      name: "Chicken Burger Patty",
      name_hi: "चिकन बर्गर पैटी",
      aliases: ["chicken patty"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-spring-roll",
      name: "Chicken Spring Roll",
      name_hi: "चिकन स्प्रिंग रोल",
      aliases: ["chicken roll"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-mutton-seekh-kebab",
      name: "Mutton Seekh Kebab",
      name_hi: "मटन सीख कबाब",
      aliases: ["mutton seekh"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-mutton-shami-kebab",
      name: "Mutton Shami Kebab",
      name_hi: "मटन शामी कबाब",
      aliases: ["mutton shami"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-fish-fingers",
      name: "Fish Fingers",
      name_hi: "फिश फिंगर्स",
      aliases: ["fish finger"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-fish-fillet",
      name: "Fish Fillet",
      name_hi: "फिश फिलेट",
      aliases: ["frozen fish fillet"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-fish-cutlet",
      name: "Fish Cutlet",
      name_hi: "फिश कटलेट",
      aliases: ["fish tikki"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-prawn",
      name: "Frozen Prawns",
      name_hi: "फ्रोजन झींगा",
      aliases: ["frozen shrimp", "prawn"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-fish-curry-cut",
      name: "Frozen Fish Curry Cut",
      name_hi: "फ्रोजन मछली करी कट",
      aliases: ["fish curry pieces"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-breast",
      name: "Frozen Chicken Breast",
      name_hi: "फ्रोजन चिकन ब्रेस्ट",
      aliases: ["chicken breast"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-leg",
      name: "Frozen Chicken Leg",
      name_hi: "फ्रोजन चिकन लेग",
      aliases: ["chicken drumstick"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-chicken-mince",
      name: "Frozen Chicken Mince",
      name_hi: "फ्रोजन चिकन कीमा",
      aliases: ["chicken keema"],
      unit: "pack",
      type: "frozen_nonveg"
    },
    {
      id: "frozen-mutton-mince",
      name: "Frozen Mutton Mince",
      name_hi: "फ्रोजन मटन कीमा",
      aliases: ["mutton keema"],
      unit: "pack",
      type: "frozen_nonveg"
    },

    /* READY-TO-COOK INDIAN FOOD */

    {
      id: "rtc-dosa-batter",
      name: "Dosa Batter",
      name_hi: "डोसा बैटर",
      aliases: ["dosa mix batter"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-idli-batter",
      name: "Idli Batter",
      name_hi: "इडली बैटर",
      aliases: ["idly batter"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-uttapam-batter",
      name: "Uttapam Batter",
      name_hi: "उत्तपम बैटर",
      aliases: ["uttapam mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-vada-batter",
      name: "Vada Batter",
      name_hi: "वड़ा बैटर",
      aliases: ["medu vada batter"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-dhokla-mix",
      name: "Dhokla Instant Mix",
      name_hi: "ढोकला इंस्टेंट मिक्स",
      aliases: ["khaman mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-pani-puri",
      name: "Pani Puri Kit",
      name_hi: "पानी पूरी किट",
      aliases: ["golgappa kit", "गोलगप्पा किट"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-pav-bhaji",
      name: "Pav Bhaji Ready Mix",
      name_hi: "पाव भाजी रेडी मिक्स",
      aliases: ["pav bhaji mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-chole",
      name: "Chole Ready Mix",
      name_hi: "छोले रेडी मिक्स",
      aliases: ["chana masala ready mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-rajma",
      name: "Rajma Ready Mix",
      name_hi: "राजमा रेडी मिक्स",
      aliases: ["rajma masala ready mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-dal-makhani",
      name: "Dal Makhani Ready Mix",
      name_hi: "दाल मखनी रेडी मिक्स",
      aliases: ["dal makhani mix"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-khichdi",
      name: "Khichdi Ready Mix",
      name_hi: "खिचड़ी रेडी मिक्स",
      aliases: ["instant khichdi"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-upma",
      name: "Upma Ready Mix",
      name_hi: "उपमा रेडी मिक्स",
      aliases: ["instant upma"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-poha",
      name: "Poha Ready Mix",
      name_hi: "पोहा रेडी मिक्स",
      aliases: ["instant poha"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-pulao",
      name: "Pulao Ready Mix",
      name_hi: "पुलाव रेडी मिक्स",
      aliases: ["instant pulao"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-biryani",
      name: "Biryani Ready Mix",
      name_hi: "बिरयानी रेडी मिक्स",
      aliases: ["instant biryani"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-soup",
      name: "Instant Soup",
      name_hi: "इंस्टेंट सूप",
      aliases: ["soup packet"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-noodles",
      name: "Instant Noodles",
      name_hi: "इंस्टेंट नूडल्स",
      aliases: ["ready noodles"],
      unit: "pack",
      type: "ready_to_cook"
    },
    {
      id: "rtc-pasta",
      name: "Ready-to-Cook Pasta",
      name_hi: "रेडी-टू-कुक पास्ता",
      aliases: ["pasta meal kit"],
      unit: "pack",
      type: "ready_to_cook"
    },

    /* READY-TO-EAT PACKAGED FOOD */

    {
      id: "rte-paneer-butter-masala",
      name: "Paneer Butter Masala Ready Meal",
      name_hi: "पनीर बटर मसाला रेडी मील",
      aliases: ["ready paneer butter masala"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-shahi-paneer",
      name: "Shahi Paneer Ready Meal",
      name_hi: "शाही पनीर रेडी मील",
      aliases: ["ready shahi paneer"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-dal-makhani",
      name: "Dal Makhani Ready Meal",
      name_hi: "दाल मखनी रेडी मील",
      aliases: ["ready dal makhani"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-chole-masala",
      name: "Chole Masala Ready Meal",
      name_hi: "छोले मसाला रेडी मील",
      aliases: ["ready chole"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-rajma-masala",
      name: "Rajma Masala Ready Meal",
      name_hi: "राजमा मसाला रेडी मील",
      aliases: ["ready rajma"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-pav-bhaji",
      name: "Pav Bhaji Ready Meal",
      name_hi: "पाव भाजी रेडी मील",
      aliases: ["ready pav bhaji"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-veg-biryani",
      name: "Vegetable Biryani Ready Meal",
      name_hi: "वेज बिरयानी रेडी मील",
      aliases: ["ready veg biryani"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-chicken-biryani",
      name: "Chicken Biryani Ready Meal",
      name_hi: "चिकन बिरयानी रेडी मील",
      aliases: ["ready chicken biryani"],
      unit: "pack",
      type: "ready_to_eat_nonveg"
    },
    {
      id: "rte-lemon-rice",
      name: "Lemon Rice Ready Meal",
      name_hi: "लेमन राइस रेडी मील",
      aliases: ["ready lemon rice"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-curd-rice",
      name: "Curd Rice Ready Meal",
      name_hi: "दही चावल रेडी मील",
      aliases: ["ready thayir sadam"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-vegetable-pulao",
      name: "Vegetable Pulao Ready Meal",
      name_hi: "वेज पुलाव रेडी मील",
      aliases: ["ready pulao"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-upma",
      name: "Upma Ready Meal",
      name_hi: "उपमा रेडी मील",
      aliases: ["ready upma"],
      unit: "pack",
      type: "ready_to_eat"
    },
    {
      id: "rte-poha",
      name: "Poha Ready Meal",
      name_hi: "पोहा रेडी मील",
      aliases: ["ready poha"],
      unit: "pack",
      type: "ready_to_eat"
    },

    /* LOCAL & UNBRANDED FROZEN PRODUCTS */

    {
      id: "frozen-local-fries",
      name: "Local Frozen French Fries",
      name_hi: "स्थानीय फ्रोजन फ्रेंच फ्राइज",
      aliases: ["loose french fries"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-momos",
      name: "Local Frozen Momos",
      name_hi: "स्थानीय फ्रोजन मोमोज",
      aliases: ["local momo"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-samosa",
      name: "Local Frozen Samosa",
      name_hi: "स्थानीय फ्रोजन समोसा",
      aliases: ["local samosa"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-paratha",
      name: "Local Frozen Paratha",
      name_hi: "स्थानीय फ्रोजन पराठा",
      aliases: ["local paratha"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-nuggets",
      name: "Local Frozen Nuggets",
      name_hi: "स्थानीय फ्रोजन नगेट्स",
      aliases: ["local nuggets"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-vegetables",
      name: "Local Frozen Vegetables",
      name_hi: "स्थानीय फ्रोजन सब्जियाँ",
      aliases: ["local frozen veg"],
      unit: "pack",
      type: "local_frozen"
    },
    {
      id: "frozen-local-chicken",
      name: "Local Frozen Chicken Products",
      name_hi: "स्थानीय फ्रोजन चिकन उत्पाद",
      aliases: ["local frozen chicken"],
      unit: "pack",
      type: "local_frozen_nonveg"
    },
    {
      id: "frozen-local-fish",
      name: "Local Frozen Fish Products",
      name_hi: "स्थानीय फ्रोजन मछली उत्पाद",
      aliases: ["local frozen fish"],
      unit: "pack",
      type: "local_frozen_nonveg"
    },
    {
      id: "frozen-local-ready-food",
      name: "Local Ready-to-Cook Food",
      name_hi: "स्थानीय रेडी-टू-कुक खाना",
      aliases: ["local ready food"],
      unit: "pack",
      type: "local_ready_food"
    },
    {
      id: "frozen-local-ready-meal",
      name: "Local Ready-to-Eat Meal",
      name_hi: "स्थानीय रेडी-टू-ईट खाना",
      aliases: ["local ready meal"],
      unit: "pack",
      type: "local_ready_food"
    }

  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);

})();
 (function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "personal_care_hygiene";

  const brands = [
    "Dove", "Lux", "Lifebuoy", "Liril", "Pears", "Cinthol",
    "Dettol", "Medimix", "Mysore Sandal", "Santoor", "Fiama",
    "Godrej No.1", "Vivel", "Himalaya", "Patanjali", "Khadi",
    "Nivea", "Vaseline", "Pond's", "Lakme", "Garnier",
    "L'Oreal", "Mamaearth", "Biotique", "Joy", "Fair & Lovely",
    "Glow & Lovely", "Vicco", "Boroplus", "Boroline", "Himalaya Baby",
    "Head & Shoulders", "Clinic Plus", "Sunsilk", "Dove Hair",
    "Pantene", "Tresemme", "L'Oreal Paris", "Garnier Fructis",
    "Parachute", "Dabur Amla", "Bajaj Almond Drops", "Indulekha",
    "Kesh King", "Livon", "Streax", "Set Wet", "Wild Stone",
    "Fogg", "Denver", "Park Avenue", "Engage", "Axe",
    "Old Spice", "Gillette", "Veet", "Nair", "Sirona",
    "Whisper", "Stayfree", "Sofy", "Kotex", "Bella",
    "Colgate", "Pepsodent", "Closeup", "Sensodyne", "Oral-B",
    "Patanjali Dant Kanti", "Dabur Red", "Meswak", "Vicco Vajradanti",
    "Listerine", "Sensodyne", "Himalaya Oral Care",
    "Johnson's", "Nivea Men", "Garnier Men", "Local Cosmetics Shop",
    "Local Soap Maker", "Local Hair Oil Maker", "Loose / Unbranded"
  ];

  const products = [
    /* BATHING SOAPS */

    { id: "pc-soap-bathing", name: "Bathing Soap", name_hi: "नहाने का साबुन", aliases: ["soap", "साबुन"], unit: "piece", type: "soap" },
    { id: "pc-soap-beauty", name: "Beauty Soap", name_hi: "ब्यूटी साबुन", aliases: ["beauty bar"], unit: "piece", type: "soap" },
    { id: "pc-soap-moisturizing", name: "Moisturizing Soap", name_hi: "मॉइस्चराइजिंग साबुन", aliases: ["moisture soap"], unit: "piece", type: "soap" },
    { id: "pc-soap-glycerin", name: "Glycerin Soap", name_hi: "ग्लिसरीन साबुन", aliases: ["glycerine bar"], unit: "piece", type: "soap" },
    { id: "pc-soap-herbal", name: "Herbal Soap", name_hi: "हर्बल साबुन", aliases: ["neem soap", "नीम साबुन"], unit: "piece", type: "soap" },
    { id: "pc-soap-medicated", name: "Medicated Soap", name_hi: "मेडिकेटेड साबुन", aliases: ["antibacterial soap"], unit: "piece", type: "soap" },
    { id: "pc-soap-liquid", name: "Liquid Bath Soap", name_hi: "लिक्विड नहाने का साबुन", aliases: ["body wash soap"], unit: "bottle", type: "soap" },
    { id: "pc-body-wash", name: "Body Wash", name_hi: "बॉडी वॉश", aliases: ["shower gel"], unit: "bottle", type: "body_wash" },
    { id: "pc-loofah", name: "Bath Loofah", name_hi: "नहाने का लूफा", aliases: ["bath sponge"], unit: "piece", type: "bath_accessory" },

    /* SHAMPOO & HAIR CARE */

    { id: "pc-shampoo", name: "Hair Shampoo", name_hi: "बालों का शैम्पू", aliases: ["shampoo", "सैंपू"], unit: "bottle", type: "hair_care" },
    { id: "pc-shampoo-anti-dandruff", name: "Anti Dandruff Shampoo", name_hi: "डैंड्रफ शैम्पू", aliases: ["dandruff shampoo"], unit: "bottle", type: "hair_care" },
    { id: "pc-shampoo-hair-fall", name: "Hair Fall Control Shampoo", name_hi: "हेयर फॉल शैम्पू", aliases: ["hair fall shampoo"], unit: "bottle", type: "hair_care" },
    { id: "pc-shampoo-herbal", name: "Herbal Shampoo", name_hi: "हर्बल शैम्पू", aliases: ["natural shampoo"], unit: "bottle", type: "hair_care" },
    { id: "pc-conditioner", name: "Hair Conditioner", name_hi: "हेयर कंडीशनर", aliases: ["conditioner"], unit: "bottle", type: "hair_care" },
    { id: "pc-hair-oil-coconut", name: "Coconut Hair Oil", name_hi: "नारियल हेयर ऑयल", aliases: ["coconut oil for hair"], unit: "bottle", type: "hair_oil" },
    { id: "pc-hair-oil-amla", name: "Amla Hair Oil", name_hi: "आंवला तेल", aliases: ["amla oil"], unit: "bottle", type: "hair_oil" },
    { id: "pc-hair-oil-almond", name: "Almond Hair Oil", name_hi: "बादाम हेयर ऑयल", aliases: ["badam oil"], unit: "bottle", type: "hair_oil" },
    { id: "pc-hair-oil-herbal", name: "Herbal Hair Oil", name_hi: "हर्बल हेयर ऑयल", aliases: ["herbal oil"], unit: "bottle", type: "hair_oil" },
    { id: "pc-hair-serum", name: "Hair Serum", name_hi: "हेयर सीरम", aliases: ["hair serum"], unit: "bottle", type: "hair_care" },
    { id: "pc-hair-gel", name: "Hair Gel", name_hi: "हेयर जेल", aliases: ["styling gel"], unit: "pack", type: "hair_styling" },
    { id: "pc-hair-wax", name: "Hair Wax", name_hi: "हेयर वैक्स", aliases: ["styling wax"], unit: "pack", type: "hair_styling" },
    { id: "pc-hair-colour", name: "Hair Colour", name_hi: "हेयर कलर", aliases: ["hair dye", "बालों का रंग"], unit: "pack", type: "hair_colour" },
    { id: "pc-hair-dye-black", name: "Black Hair Dye", name_hi: "काला हेयर डाई", aliases: ["black hair colour"], unit: "pack", type: "hair_colour" },
    { id: "pc-henna", name: "Henna Powder", name_hi: "मेहंदी पाउडर", aliases: ["mehndi powder"], unit: "pack", type: "hair_colour" },

    /* FACE & SKIN CARE */

    { id: "pc-face-wash", name: "Face Wash", name_hi: "फेस वॉश", aliases: ["facewash"], unit: "tube", type: "skin_care" },
    { id: "pc-face-cream", name: "Face Cream", name_hi: "फेस क्रीम", aliases: ["चेहरे की क्रीम"], unit: "pack", type: "skin_care" },
    { id: "pc-cold-cream", name: "Cold Cream", name_hi: "कोल्ड क्रीम", aliases: ["winter cream"], unit: "pack", type: "skin_care" },
    { id: "pc-moisturizer", name: "Body Moisturizer", name_hi: "बॉडी मॉइस्चराइजर", aliases: ["body lotion"], unit: "bottle", type: "skin_care" },
    { id: "pc-sunscreen", name: "Sunscreen Lotion", name_hi: "सनस्क्रीन लोशन", aliases: ["sun cream"], unit: "tube", type: "skin_care" },
    { id: "pc-petroleum-jelly", name: "Petroleum Jelly", name_hi: "पेट्रोलियम जेली", aliases: ["vaseline jelly"], unit: "pack", type: "skin_care" },
    { id: "pc-talcum-powder", name: "Talcum Powder", name_hi: "टैल्कम पाउडर", aliases: ["body powder"], unit: "bottle", type: "skin_care" },
    { id: "pc-face-powder", name: "Face Powder", name_hi: "फेस पाउडर", aliases: ["compact powder"], unit: "pack", type: "cosmetics" },
    { id: "pc-lip-balm", name: "Lip Balm", name_hi: "लिप बाम", aliases: ["lip care"], unit: "piece", type: "skin_care" },
    { id: "pc-lipstick", name: "Lipstick", name_hi: "लिपस्टिक", aliases: ["lip colour"], unit: "piece", type: "cosmetics" },
    { id: "pc-kajal", name: "Kajal", name_hi: "काजल", aliases: ["kohl"], unit: "piece", type: "cosmetics" },
    { id: "pc-nail-polish", name: "Nail Polish", name_hi: "नेल पॉलिश", aliases: ["nail paint"], unit: "bottle", type: "cosmetics" },
    { id: "pc-nail-polish-remover", name: "Nail Polish Remover", name_hi: "नेल पॉलिश रिमूवर", aliases: ["nail remover"], unit: "bottle", type: "cosmetics" },
    { id: "pc-bindi", name: "Bindi", name_hi: "बिंदी", aliases: ["sticker bindi"], unit: "pack", type: "cosmetics" },
    { id: "pc-sindoor", name: "Sindoor", name_hi: "सिंदूर", aliases: ["kumkum sindoor"], unit: "pack", type: "cosmetics" },

    /* DEODORANTS & PERFUMES */

    { id: "pc-deodorant", name: "Deodorant Spray", name_hi: "डियोडरेंट स्प्रे", aliases: ["deo spray", "डियो"], unit: "piece", type: "fragrance" },
    { id: "pc-roll-on", name: "Roll On Deodorant", name_hi: "रोल ऑन डियो", aliases: ["rollon"], unit: "piece", type: "fragrance" },
    { id: "pc-perfume", name: "Perfume", name_hi: "परफ्यूम", aliases: ["इत्र", "fragrance"], unit: "bottle", type: "fragrance" },
    { id: "pc-attar", name: "Attar", name_hi: "अत्तर", aliases: ["itra"], unit: "bottle", type: "fragrance" },
    { id: "pc-body-spray", name: "Body Spray", name_hi: "बॉडी स्प्रे", aliases: ["body mist"], unit: "piece", type: "fragrance" },
    { id: "pc-after-shave", name: "After Shave Lotion", name_hi: "आफ्टर शेव लोशन", aliases: ["aftershave"], unit: "bottle", type: "men_grooming" },
    { id: "pc-shaving-cream", name: "Shaving Cream", name_hi: "शेविंग क्रीम", aliases: ["shave cream"], unit: "tube", type: "men_grooming" },
    { id: "pc-shaving-foam", name: "Shaving Foam", name_hi: "शेविंग फोम", aliases: ["shave foam"], unit: "can", type: "men_grooming" },
    { id: "pc-razor", name: "Disposable Razor", name_hi: "डिस्पोजेबल रेजर", aliases: ["shaving razor"], unit: "piece", type: "men_grooming" },
    { id: "pc-blade", name: "Shaving Blade", name_hi: "शेविंग ब्लेड", aliases: ["razor blade"], unit: "pack", type: "men_grooming" },

    /* ORAL CARE */

    { id: "pc-toothpaste", name: "Toothpaste", name_hi: "टूथपेस्ट", aliases: ["दांत का पेस्ट"], unit: "tube", type: "oral_care" },
    { id: "pc-toothbrush", name: "Toothbrush", name_hi: "टूथब्रश", aliases: ["दांत साफ करने का ब्रश"], unit: "piece", type: "oral_care" },
    { id: "pc-toothpowder", name: "Tooth Powder", name_hi: "दंत मंजन", aliases: ["दांत का पाउडर"], unit: "pack", type: "oral_care" },
    { id: "pc-mouthwash", name: "Mouthwash", name_hi: "माउथवॉश", aliases: ["mouth rinse"], unit: "bottle", type: "oral_care" },
    { id: "pc-tongue-cleaner", name: "Tongue Cleaner", name_hi: "जीभ साफ करने का स्क्रेपर", aliases: ["tongue scraper"], unit: "piece", type: "oral_care" },
    { id: "pc-dental-floss", name: "Dental Floss", name_hi: "डेंटल फ्लॉस", aliases: ["teeth floss"], unit: "pack", type: "oral_care" },

    /* FEMININE HYGIENE */

    { id: "pc-sanitary-pad", name: "Sanitary Pads", name_hi: "सेनेटरी पैड", aliases: ["period pad", "मासिक धर्म पैड"], unit: "pack", type: "feminine_hygiene" },
    { id: "pc-panty-liner", name: "Panty Liners", name_hi: "पैंटी लाइनर", aliases: ["pantyliner"], unit: "pack", type: "feminine_hygiene" },
    { id: "pc-tampon", name: "Tampons", name_hi: "टैम्पोन", aliases: ["tampon pack"], unit: "pack", type: "feminine_hygiene" },
    { id: "pc-menstrual-cup", name: "Menstrual Cup", name_hi: "मेंस्ट्रुअल कप", aliases: ["period cup"], unit: "piece", type: "feminine_hygiene" },
    { id: "pc-intimate-wash", name: "Intimate Wash", name_hi: "इंटीमेट वॉश", aliases: ["feminine wash"], unit: "bottle", type: "feminine_hygiene" },

    /* PERSONAL HYGIENE & ACCESSORIES */

    { id: "pc-handwash", name: "Hand Wash", name_hi: "हैंड वॉश", aliases: ["liquid handwash"], unit: "bottle", type: "hygiene" },
    { id: "pc-hand-sanitizer", name: "Hand Sanitizer", name_hi: "हैंड सैनिटाइजर", aliases: ["sanitizer"], unit: "bottle", type: "hygiene" },
    { id: "pc-wet-wipes", name: "Wet Wipes", name_hi: "वेट वाइप्स", aliases: ["moist wipes"], unit: "pack", type: "hygiene" },
    { id: "pc-cotton", name: "Cotton Wool", name_hi: "रूई", aliases: ["cotton"], unit: "pack", type: "hygiene" },
    { id: "pc-cotton-buds", name: "Cotton Buds", name_hi: "कॉटन बड्स", aliases: ["ear buds"], unit: "pack", type: "hygiene" },
    { id: "pc-tissue", name: "Facial Tissue", name_hi: "फेशियल टिश्यू", aliases: ["tissue paper"], unit: "pack", type: "hygiene" },
    { id: "pc-toilet-roll", name: "Toilet Paper Roll", name_hi: "टॉयलेट पेपर रोल", aliases: ["toilet tissue"], unit: "roll", type: "hygiene" },
    { id: "pc-comb", name: "Hair Comb", name_hi: "कंघी", aliases: ["comb"], unit: "piece", type: "accessory" },
    { id: "pc-hair-brush", name: "Hair Brush", name_hi: "हेयर ब्रश", aliases: ["hairbrush"], unit: "piece", type: "accessory" },
    { id: "pc-hair-band", name: "Hair Band", name_hi: "हेयर बैंड", aliases: ["hairband"], unit: "piece", type: "accessory" },
    { id: "pc-hair-clip", name: "Hair Clip", name_hi: "हेयर क्लिप", aliases: ["hair pin"], unit: "piece", type: "accessory" },
    { id: "pc-nail-cutter", name: "Nail Cutter", name_hi: "नेल कटर", aliases: ["nail clipper"], unit: "piece", type: "accessory" },
    { id: "pc-bath-towel", name: "Bath Towel", name_hi: "नहाने का तौलिया", aliases: ["towel"], unit: "piece", type: "accessory" },
    { id: "pc-hand-towel", name: "Hand Towel", name_hi: "हाथ का तौलिया", aliases: ["small towel"], unit: "piece", type: "accessory" },

    /* LOCAL / UNBRANDED */

    { id: "pc-local-soap", name: "Local Bathing Soap", name_hi: "स्थानीय नहाने का साबुन", aliases: ["loose soap"], unit: "piece", type: "local_personal_care" },
    { id: "pc-local-shampoo", name: "Local Shampoo", name_hi: "स्थानीय शैम्पू", aliases: ["unbranded shampoo"], unit: "bottle", type: "local_personal_care" },
    { id: "pc-local-hair-oil", name: "Local Hair Oil", name_hi: "स्थानीय बालों का तेल", aliases: ["loose hair oil"], unit: "bottle", type: "local_personal_care" },
    { id: "pc-local-face-cream", name: "Local Face Cream", name_hi: "स्थानीय फेस क्रीम", aliases: ["unbranded face cream"], unit: "pack", type: "local_personal_care" },
    { id: "pc-local-perfume", name: "Local Perfume", name_hi: "स्थानीय परफ्यूम", aliases: ["local attar"], unit: "bottle", type: "local_personal_care" },
    { id: "pc-local-cosmetics", name: "Local Cosmetics", name_hi: "स्थानीय कॉस्मेटिक सामान", aliases: ["loose cosmetics"], unit: "piece", type: "local_personal_care" }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);
})();
 (function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "household_cleaning_home_care";

  const brands = [
    "Vim", "Exo", "Pril", "Harpic", "Lizol", "Domex",
    "Colin", "Mr. Muscle", "Dettol", "Savlon", "Phenyl",
    "HIT", "Mortein", "Goodknight", "All Out", "Maxo",
    "Odonil", "Ambi Pur", "Godrej Aer", "Air Wick",
    "Surf Excel", "Ariel", "Tide", "Rin", "Wheel",
    "Ghadi", "Nirma", "Henko", "Santoor", "Comfort",
    "Downy", "Ujala", "Genteel", "Ezee", "Vanish",
    "Scotch-Brite", "Gala", "Spotzero", "Presto",
    "Dettol Laundry", "Mr. White", "Pitambari",
    "Johnson's", "3M", "Taski", "Diversey",
    "Local Cleaning Products", "Local Phenyl Maker",
    "Local Detergent Maker", "Loose / Unbranded"
  ];

  const products = [
    /* DISHWASHING */

    { id: "hc-dishwash-bar", name: "Dishwash Bar", name_hi: "बर्तन धोने की टिकिया", aliases: ["bartan bar", "dish bar"], unit: "piece", type: "dishwash" },
    { id: "hc-dishwash-liquid", name: "Dishwash Liquid", name_hi: "बर्तन धोने का लिक्विड", aliases: ["bartan liquid"], unit: "bottle", type: "dishwash" },
    { id: "hc-dishwash-gel", name: "Dishwash Gel", name_hi: "डिशवॉश जेल", aliases: ["dish gel"], unit: "bottle", type: "dishwash" },
    { id: "hc-dishwash-powder", name: "Dishwash Powder", name_hi: "बर्तन धोने का पाउडर", aliases: ["bartan powder"], unit: "pack", type: "dishwash" },
    { id: "hc-steel-scrubber", name: "Steel Scrubber", name_hi: "स्टील का जूना", aliases: ["steel wool"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-plastic-scrubber", name: "Plastic Scrubber", name_hi: "प्लास्टिक स्क्रबर", aliases: ["plastic juna"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-sponge-scrubber", name: "Sponge Scrubber", name_hi: "स्पंज स्क्रबर", aliases: ["dish sponge"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-copper-scrubber", name: "Copper Scrubber", name_hi: "तांबे का स्क्रबर", aliases: ["copper juna"], unit: "piece", type: "cleaning_tool" },

    /* LAUNDRY */

    { id: "hc-detergent-powder", name: "Detergent Powder", name_hi: "कपड़े धोने का पाउडर", aliases: ["washing powder", "surf powder"], unit: "pack", type: "laundry" },
    { id: "hc-detergent-bar", name: "Laundry Detergent Bar", name_hi: "कपड़े धोने की साबुन टिकिया", aliases: ["washing soap"], unit: "piece", type: "laundry" },
    { id: "hc-liquid-detergent", name: "Liquid Detergent", name_hi: "लिक्विड डिटर्जेंट", aliases: ["washing liquid"], unit: "bottle", type: "laundry" },
    { id: "hc-machine-wash", name: "Washing Machine Detergent", name_hi: "वॉशिंग मशीन डिटर्जेंट", aliases: ["machine wash powder"], unit: "pack", type: "laundry" },
    { id: "hc-fabric-softener", name: "Fabric Softener", name_hi: "फैब्रिक सॉफ्टनर", aliases: [" कपड़े नरम करने का लिक्विड"], unit: "bottle", type: "laundry" },
    { id: "hc-fabric-conditioner", name: "Fabric Conditioner", name_hi: "फैब्रिक कंडीशनर", aliases: ["clothes conditioner"], unit: "bottle", type: "laundry" },
    { id: "hc-stain-remover", name: "Stain Remover", name_hi: "दाग हटाने का रिमूवर", aliases: ["spot remover"], unit: "bottle", type: "laundry" },
    { id: "hc-bleaching-powder", name: "Bleaching Powder", name_hi: "ब्लीचिंग पाउडर", aliases: ["bleach powder"], unit: "pack", type: "laundry" },
    { id: "hc-liquid-bleach", name: "Liquid Bleach", name_hi: "लिक्विड ब्लीच", aliases: ["bleach liquid"], unit: "bottle", type: "laundry" },
    { id: "hc-blue", name: "Laundry Blue", name_hi: "कपड़ों की नील", aliases: ["kapde ki neel"], unit: "bottle", type: "laundry" },
    { id: "hc-laundry-starch", name: "Laundry Starch", name_hi: "कपड़ों की कलफ", aliases: ["fabric starch"], unit: "bottle", type: "laundry" },

    /* FLOOR & TOILET CLEANING */

    { id: "hc-floor-cleaner", name: "Floor Cleaner", name_hi: "फर्श साफ करने का लिक्विड", aliases: ["floor liquid"], unit: "bottle", type: "floor_cleaning" },
    { id: "hc-phenyl-white", name: "White Phenyl", name_hi: "सफेद फिनाइल", aliases: ["white phenyl"], unit: "bottle", type: "floor_cleaning" },
    { id: "hc-phenyl-black", name: "Black Phenyl", name_hi: "काला फिनाइल", aliases: ["black phenyl"], unit: "bottle", type: "floor_cleaning" },
    { id: "hc-toilet-cleaner", name: "Toilet Cleaner", name_hi: "टॉयलेट क्लीनर", aliases: ["toilet acid cleaner"], unit: "bottle", type: "toilet_cleaning" },
    { id: "hc-toilet-block", name: "Toilet Cleaning Block", name_hi: "टॉयलेट क्लीनिंग ब्लॉक", aliases: ["toilet freshener block"], unit: "piece", type: "toilet_cleaning" },
    { id: "hc-toilet-brush", name: "Toilet Brush", name_hi: "टॉयलेट ब्रश", aliases: ["commode brush"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-bathroom-cleaner", name: "Bathroom Cleaner", name_hi: "बाथरूम क्लीनर", aliases: ["bath cleaner"], unit: "bottle", type: "bathroom_cleaning" },
    { id: "hc-tile-cleaner", name: "Tile Cleaner", name_hi: "टाइल क्लीनर", aliases: ["floor tile cleaner"], unit: "bottle", type: "bathroom_cleaning" },
    { id: "hc-glass-cleaner", name: "Glass Cleaner", name_hi: "कांच साफ करने का लिक्विड", aliases: ["window cleaner"], unit: "bottle", type: "surface_cleaning" },
    { id: "hc-kitchen-cleaner", name: "Kitchen Cleaner", name_hi: "किचन क्लीनर", aliases: ["stove cleaner"], unit: "bottle", type: "kitchen_cleaning" },
    { id: "hc-degreaser", name: "Kitchen Degreaser", name_hi: "किचन ग्रीस रिमूवर", aliases: ["oil stain cleaner"], unit: "bottle", type: "kitchen_cleaning" },
    { id: "hc-drain-cleaner", name: "Drain Cleaner", name_hi: "नाली साफ करने का क्लीनर", aliases: ["drain opener"], unit: "pack", type: "drain_cleaning" },

    /* HOME FRESHENERS & INSECT CONTROL */

    { id: "hc-room-freshener", name: "Room Freshener", name_hi: "रूम फ्रेशनर", aliases: ["air freshener"], unit: "piece", type: "air_care" },
    { id: "hc-room-spray", name: "Room Freshener Spray", name_hi: "रूम फ्रेशनर स्प्रे", aliases: ["room spray"], unit: "can", type: "air_care" },
    { id: "hc-toilet-freshener", name: "Toilet Freshener", name_hi: "टॉयलेट फ्रेशनर", aliases: ["bathroom freshener"], unit: "piece", type: "air_care" },
    { id: "hc-mosquito-liquid", name: "Mosquito Repellent Liquid", name_hi: "मच्छर भगाने का लिक्विड", aliases: ["mosquito machine refill"], unit: "bottle", type: "insect_control" },
    { id: "hc-mosquito-coil", name: "Mosquito Coil", name_hi: "मच्छर अगरबत्ती", aliases: ["mosquito agarbatti"], unit: "pack", type: "insect_control" },
    { id: "hc-mosquito-mat", name: "Mosquito Repellent Mat", name_hi: "मच्छर भगाने की मैट", aliases: ["mosquito mat"], unit: "pack", type: "insect_control" },
    { id: "hc-mosquito-spray", name: "Mosquito Spray", name_hi: "मच्छर मारने का स्प्रे", aliases: ["insect spray"], unit: "can", type: "insect_control" },
    { id: "hc-cockroach-gel", name: "Cockroach Control Gel", name_hi: "कॉकरोच कंट्रोल जेल", aliases: ["cockroach gel"], unit: "pack", type: "insect_control" },
    { id: "hc-rat-trap", name: "Rat Trap", name_hi: "चूहा पकड़ने का पिंजरा", aliases: ["mouse trap"], unit: "piece", type: "pest_control" },
    { id: "hc-rat-glue-board", name: "Rat Glue Board", name_hi: "चूहा पकड़ने का गोंद बोर्ड", aliases: ["rat glue pad"], unit: "piece", type: "pest_control" },

    /* CLEANING TOOLS */

    { id: "hc-broom", name: "Broom", name_hi: "झाड़ू", aliases: ["jhadu"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-coconut-broom", name: "Coconut Broom", name_hi: "नारियल की झाड़ू", aliases: ["coconut jhadu"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-grass-broom", name: "Grass Broom", name_hi: "घास की झाड़ू", aliases: ["phool jhadu"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-floor-mop", name: "Floor Mop", name_hi: "फर्श का पोछा", aliases: ["pocha"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-mop-refill", name: "Mop Refill", name_hi: "पोछे का रिफिल", aliases: ["mop head"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-floor-wiper", name: "Floor Wiper", name_hi: "फर्श वाइपर", aliases: ["floor squeegee"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-cleaning-cloth", name: "Cleaning Cloth", name_hi: "सफाई का कपड़ा", aliases: ["pocha kapda"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-microfiber-cloth", name: "Microfiber Cloth", name_hi: "माइक्रोफाइबर कपड़ा", aliases: ["microfiber towel"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-duster", name: "Dusting Duster", name_hi: "डस्टर", aliases: ["dust cloth"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-floor-brush", name: "Floor Scrubbing Brush", name_hi: "फर्श रगड़ने का ब्रश", aliases: ["floor brush"], unit: "piece", type: "cleaning_tool" },
    { id: "hc-bucket", name: "Cleaning Bucket", name_hi: "सफाई की बाल्टी", aliases: ["bucket"], unit: "piece", type: "home_utility" },
    { id: "hc-mug", name: "Bathroom Mug", name_hi: "बाथरूम मग", aliases: ["bath mug"], unit: "piece", type: "home_utility" },
    { id: "hc-garbage-bag", name: "Garbage Bags", name_hi: "कचरा बैग", aliases: ["dustbin bags"], unit: "pack", type: "waste_management" },
    { id: "hc-dustbin", name: "Dustbin", name_hi: "कूड़ादान", aliases: ["garbage bin"], unit: "piece", type: "waste_management" },
    { id: "hc-rubber-gloves", name: "Cleaning Gloves", name_hi: "सफाई के दस्ताने", aliases: ["rubber gloves"], unit: "pair", type: "cleaning_tool" },

    /* LOCAL & UNBRANDED */

    { id: "hc-local-detergent", name: "Local Detergent Powder", name_hi: "स्थानीय कपड़ा धोने का पाउडर", aliases: ["loose washing powder"], unit: "kg", type: "local_cleaning" },
    { id: "hc-local-dishwash", name: "Local Dishwash Powder", name_hi: "स्थानीय बर्तन धोने का पाउडर", aliases: ["loose dishwash"], unit: "kg", type: "local_cleaning" },
    { id: "hc-local-phenyl", name: "Local Phenyl", name_hi: "स्थानीय फिनाइल", aliases: ["loose phenyl"], unit: "litre", type: "local_cleaning" },
    { id: "hc-local-floor-cleaner", name: "Local Floor Cleaner", name_hi: "स्थानीय फर्श क्लीनर", aliases: ["loose floor cleaner"], unit: "litre", type: "local_cleaning" },
    { id: "hc-local-broom", name: "Local Broom", name_hi: "स्थानीय झाड़ू", aliases: ["local jhadu"], unit: "piece", type: "local_cleaning" }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);
})();
 (function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "puja_religious_items";

  const brands = [
    "Mangaldeep", "Cycle Pure", "Zed Black", "Hem", "Mysore Deep Perfumery",
    "Patanjali", "Gulab", "Hari Darshan", "Bikaji", "Puja Lotus",
    "Puja Ghee", "Puja Oil", "Ganga", "Panchgavya",
    "Local Agarbatti Maker", "Local Pooja Shop", "Local Flower Seller",
    "Local Diya Maker", "Loose / Unbranded"
  ];

  const products = [
    /* INCENSE & FRAGRANCE */

    { id: "puja-agarbatti", name: "Agarbatti", name_hi: "अगरबत्ती", aliases: ["incense sticks", "धूपबत्ती"], unit: "pack", type: "incense" },
    { id: "puja-chandan-agarbatti", name: "Chandan Agarbatti", name_hi: "चंदन अगरबत्ती", aliases: ["sandal incense"], unit: "pack", type: "incense" },
    { id: "puja-gulab-agarbatti", name: "Rose Agarbatti", name_hi: "गुलाब अगरबत्ती", aliases: ["rose incense"], unit: "pack", type: "incense" },
    { id: "puja-mogra-agarbatti", name: "Mogra Agarbatti", name_hi: "मोगरा अगरबत्ती", aliases: ["jasmine incense"], unit: "pack", type: "incense" },
    { id: "puja-dhoop-stick", name: "Dhoop Sticks", name_hi: "धूप स्टिक", aliases: ["dhoop batti"], unit: "pack", type: "incense" },
    { id: "puja-dhoop-cone", name: "Dhoop Cones", name_hi: "धूप कोन", aliases: ["dhoop cup"], unit: "pack", type: "incense" },
    { id: "puja-dhoop-cup", name: "Dhoop Cups", name_hi: "धूप कप", aliases: ["sambrani cup"], unit: "pack", type: "incense" },
    { id: "puja-sambrani", name: "Sambrani", name_hi: "सम्ब्रानी", aliases: ["loban sambrani"], unit: "pack", type: "incense" },
    { id: "puja-loban", name: "Loban", name_hi: "लोबान", aliases: ["benzoin resin"], unit: "pack", type: "incense" },
    { id: "puja-camphor", name: "Camphor", name_hi: "कपूर", aliases: ["kapoor"], unit: "pack", type: "puja_essential" },
    { id: "puja-camphor-tablet", name: "Camphor Tablets", name_hi: "कपूर की टिकिया", aliases: ["kapoor tablets"], unit: "pack", type: "puja_essential" },

    /* OIL, WICKS & DIYAS */

    { id: "puja-oil", name: "Puja Oil", name_hi: "पूजा का तेल", aliases: ["diya oil"], unit: "bottle", type: "puja_essential" },
    { id: "puja-sesame-oil", name: "Sesame Puja Oil", name_hi: "तिल का पूजा तेल", aliases: ["til diya oil"], unit: "bottle", type: "puja_essential" },
    { id: "puja-ghee", name: "Puja Ghee", name_hi: "पूजा घी", aliases: ["diya ghee"], unit: "pack", type: "puja_essential" },
    { id: "puja-cotton-wicks", name: "Cotton Wicks", name_hi: "रुई की बत्ती", aliases: ["baati", "diya batti"], unit: "pack", type: "puja_essential" },
    { id: "puja-long-wicks", name: "Long Cotton Wicks", name_hi: "लंबी रुई की बत्ती", aliases: ["long baati"], unit: "pack", type: "puja_essential" },
    { id: "puja-ready-wicks", name: "Ready Diya Wicks", name_hi: "तैयार दीया बत्ती", aliases: ["ready baati"], unit: "pack", type: "puja_essential" },
    { id: "puja-clay-diya", name: "Clay Diya", name_hi: "मिट्टी का दीया", aliases: ["mitti diya"], unit: "piece", type: "diya" },
    { id: "puja-decorative-diya", name: "Decorative Diya", name_hi: "सजावटी दीया", aliases: ["decoration diya"], unit: "piece", type: "diya" },
    { id: "puja-brass-diya", name: "Brass Diya", name_hi: "पीतल का दीया", aliases: ["brass lamp"], unit: "piece", type: "diya" },
    { id: "puja-earthen-lamp", name: "Earthen Lamp Set", name_hi: "मिट्टी के दीपक का सेट", aliases: ["diya set"], unit: "pack", type: "diya" },

    /* POWDERS, COLOURS & OFFERINGS */

    { id: "puja-kumkum", name: "Kumkum", name_hi: "कुमकुम", aliases: ["roli"], unit: "pack", type: "puja_powder" },
    { id: "puja-roli", name: "Roli", name_hi: "रोली", aliases: ["tilak roli"], unit: "pack", type: "puja_powder" },
    { id: "puja-chandan-powder", name: "Chandan Powder", name_hi: "चंदन पाउडर", aliases: ["sandal powder"], unit: "pack", type: "puja_powder" },
    { id: "puja-chandan-paste", name: "Chandan Paste", name_hi: "चंदन पेस्ट", aliases: ["sandal paste"], unit: "pack", type: "puja_powder" },
    { id: "puja-haldi", name: "Puja Haldi", name_hi: "पूजा हल्दी", aliases: ["turmeric for puja"], unit: "pack", type: "puja_powder" },
    { id: "puja-abir", name: "Abir", name_hi: "अबीर", aliases: ["gulal abir"], unit: "pack", type: "puja_powder" },
    { id: "puja-gulal", name: "Gulal", name_hi: "गुलाल", aliases: ["colour powder"], unit: "pack", type: "puja_powder" },
    { id: "puja-akshat", name: "Akshat Rice", name_hi: "अक्षत चावल", aliases: ["puja rice"], unit: "pack", type: "puja_essential" },
    { id: "puja-janeu", name: "Janeu", name_hi: "जनेऊ", aliases: ["sacred thread"], unit: "piece", type: "puja_essential" },
    { id: "puja-kalawa", name: "Kalawa", name_hi: "कलावा", aliases: ["mouli", "मौली"], unit: "roll", type: "puja_essential" },
    { id: "puja-roli-chawal", name: "Roli Chawal Pack", name_hi: "रोली चावल पैकेट", aliases: ["tilak pack"], unit: "pack", type: "puja_essential" },
    { id: "puja-panchmeva", name: "Panchmeva", name_hi: "पंचमेवा", aliases: ["panch mewa"], unit: "pack", type: "puja_offering" },
    { id: "puja-mishri", name: "Puja Mishri", name_hi: "पूजा मिश्री", aliases: ["rock sugar"], unit: "pack", type: "puja_offering" },
    { id: "puja-batasha", name: "Batasha", name_hi: "बताशा", aliases: ["sugar drops"], unit: "pack", type: "puja_offering" },
    { id: "puja-gud", name: "Puja Jaggery", name_hi: "पूजा गुड़", aliases: ["gud for puja"], unit: "pack", type: "puja_offering" },

    /* PUJA ACCESSORIES */

    { id: "puja-thali", name: "Puja Thali", name_hi: "पूजा थाली", aliases: ["aarti thali"], unit: "piece", type: "puja_accessory" },
    { id: "puja-bell", name: "Puja Bell", name_hi: "पूजा घंटी", aliases: ["temple bell"], unit: "piece", type: "puja_accessory" },
    { id: "puja-aarti-diya", name: "Aarti Diya", name_hi: "आरती दीया", aliases: ["aarti lamp"], unit: "piece", type: "puja_accessory" },
    { id: "puja-incense-holder", name: "Incense Holder", name_hi: "अगरबत्ती स्टैंड", aliases: ["agarbatti stand"], unit: "piece", type: "puja_accessory" },
    { id: "puja-matchbox", name: "Puja Matchbox", name_hi: "पूजा माचिस", aliases: ["match box"], unit: "piece", type: "puja_accessory" },
    { id: "puja-coconut", name: "Puja Coconut", name_hi: "पूजा नारियल", aliases: ["nariyal"], unit: "piece", type: "puja_offering" },
    { id: "puja-supari", name: "Puja Supari", name_hi: "पूजा सुपारी", aliases: ["betel nut"], unit: "pack", type: "puja_offering" },
    { id: "puja-betel-leaf", name: "Betel Leaves", name_hi: "पान के पत्ते", aliases: ["paan patta"], unit: "bundle", type: "puja_offering" },
    { id: "puja-lotus-seed", name: "Lotus Seeds for Puja", name_hi: "पूजा कमलगट्टा", aliases: ["kamal gatta"], unit: "pack", type: "puja_offering" },
    { id: "puja-durva", name: "Durva Grass", name_hi: "दूर्वा घास", aliases: ["doob grass"], unit: "bundle", type: "puja_offering" },
    { id: "puja-flower-garland", name: "Flower Garland", name_hi: "फूलों की माला", aliases: ["phool mala"], unit: "piece", type: "puja_offering" },
    { id: "puja-flowers", name: "Loose Puja Flowers", name_hi: "पूजा के फूल", aliases: ["loose flowers"], unit: "pack", type: "puja_offering" },
    { id: "puja-tulsi-mala", name: "Tulsi Mala", name_hi: "तुलसी माला", aliases: ["tulsi beads"], unit: "piece", type: "religious_accessory" },
    { id: "puja-rudraksha-mala", name: "Rudraksha Mala", name_hi: "रुद्राक्ष माला", aliases: ["rudraksh mala"], unit: "piece", type: "religious_accessory" },
    { id: "puja-prasad-box", name: "Prasad Box", name_hi: "प्रसाद डिब्बा", aliases: ["prasad container"], unit: "piece", type: "puja_accessory" },

    /* FESTIVAL & LOCAL ITEMS */

    { id: "puja-raksha-sutra", name: "Raksha Sutra", name_hi: "रक्षा सूत्र", aliases: ["mauli thread"], unit: "roll", type: "religious_accessory" },
    { id: "puja-navgraha-samagri", name: "Navgraha Puja Samagri", name_hi: "नवग्रह पूजा सामग्री", aliases: ["navgrah kit"], unit: "pack", type: "puja_kit" },
    { id: "puja-havan-samagri", name: "Havan Samagri", name_hi: "हवन सामग्री", aliases: ["havan mix"], unit: "pack", type: "puja_kit" },
    { id: "puja-havan-kund", name: "Havan Kund", name_hi: "हवन कुंड", aliases: ["havan bowl"], unit: "piece", type: "puja_accessory" },
    { id: "puja-kapoor-dani", name: "Camphor Burner", name_hi: "कपूरदानी", aliases: ["kapoor dani"], unit: "piece", type: "puja_accessory" },
    { id: "puja-rangoli-powder", name: "Rangoli Powder", name_hi: "रंगोली पाउडर", aliases: ["rangoli colours"], unit: "pack", type: "festival" },
    { id: "puja-rangoli-stencil", name: "Rangoli Stencil", name_hi: "रंगोली स्टेंसिल", aliases: ["rangoli design"], unit: "piece", type: "festival" },
    { id: "puja-diya-decoration", name: "Diya Decoration Material", name_hi: "दीया सजावट सामग्री", aliases: ["diya decor"], unit: "pack", type: "festival" },
    { id: "puja-local-agarbatti", name: "Local Agarbatti", name_hi: "स्थानीय अगरबत्ती", aliases: ["loose incense"], unit: "pack", type: "local_puja" },
    { id: "puja-local-diya", name: "Local Clay Diya", name_hi: "स्थानीय मिट्टी का दीया", aliases: ["local mitti diya"], unit: "piece", type: "local_puja" },
    { id: "puja-local-flowers", name: "Local Puja Flowers", name_hi: "स्थानीय पूजा फूल", aliases: ["loose local flowers"], unit: "pack", type: "local_puja" },
    { id: "puja-local-samagri", name: "Local Puja Samagri", name_hi: "स्थानीय पूजा सामग्री", aliases: ["loose puja items"], unit: "pack", type: "local_puja" }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);
})();
 (function () {
  "use strict";

  const DB = global.NexusFoodMasterDatabase;
  if (!DB) throw new Error("NexusFoodMasterDatabase engine not found");

  const CATEGORY = "baby_care_pet_care";

  const brands = [
    "Pampers", "Huggies", "MamyPoko Pants", "Little's", "Supples",
    "Mee Mee", "Chicco", "Johnson's Baby", "Himalaya Baby",
    "Mamaearth Baby", "Sebamed Baby", "Dabur Baby",
    "Cetaphil Baby", "Mother Sparsh", "Pigeon", "LuvLap",
    "Philips Avent", "Nestle Lactogen", "Nestle NAN",
    "Similac", "Aptamil", "Dexolac", "Farex", "Cerelac",
    "Slurrp Farm", "Timios", "Early Foods", "Gerber",
    "Pedigree", "Drools", "Royal Canin", "Whiskas",
    "Me-O", "Purepet", "SmartHeart", "Farmina",
    "Kennel Kitchen", "Bark Out Loud", "Heads Up For Tails",
    "Sheba", "Felix", "JerHigh", "Chip Chops",
    "Local Baby Products", "Local Pet Food Supplier",
    "Local Pet Shop", "Loose / Unbranded"
  ];

  const products = [
    /* BABY DIAPERS & HYGIENE */

    { id: "baby-diaper-newborn", name: "Newborn Baby Diapers", name_hi: "नवजात बच्चे के डायपर", aliases: ["newborn diaper", "nb diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-diaper-small", name: "Small Baby Diapers", name_hi: "छोटे बच्चे के डायपर", aliases: ["small diaper", "s diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-diaper-medium", name: "Medium Baby Diapers", name_hi: "मीडियम बेबी डायपर", aliases: ["medium diaper", "m diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-diaper-large", name: "Large Baby Diapers", name_hi: "बड़े बच्चे के डायपर", aliases: ["large diaper", "l diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-diaper-xl", name: "Extra Large Baby Diapers", name_hi: "एक्स्ट्रा लार्ज बेबी डायपर", aliases: ["xl diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-diaper-xxl", name: "XXL Baby Diapers", name_hi: "डबल एक्स्ट्रा लार्ज डायपर", aliases: ["xxl diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-pants-diaper", name: "Baby Pants Diapers", name_hi: "बेबी पैंट डायपर", aliases: ["pant style diaper"], unit: "pack", type: "baby_diaper" },
    { id: "baby-cloth-diaper", name: "Reusable Cloth Diaper", name_hi: "कपड़े का दोबारा इस्तेमाल होने वाला डायपर", aliases: ["washable diaper"], unit: "piece", type: "baby_diaper" },
    { id: "baby-diaper-pants", name: "Training Pants", name_hi: "ट्रेनिंग पैंट", aliases: ["baby training pants"], unit: "pack", type: "baby_diaper" },
    { id: "baby-wipes", name: "Baby Wet Wipes", name_hi: "बेबी वेट वाइप्स", aliases: ["baby wipes"], unit: "pack", type: "baby_hygiene" },
    { id: "baby-dry-wipes", name: "Baby Dry Wipes", name_hi: "बेबी ड्राई वाइप्स", aliases: ["dry baby wipes"], unit: "pack", type: "baby_hygiene" },
    { id: "baby-cotton-buds", name: "Baby Cotton Buds", name_hi: "बेबी कॉटन बड्स", aliases: ["baby ear buds"], unit: "pack", type: "baby_hygiene" },
    { id: "baby-cotton", name: "Baby Cotton", name_hi: "बेबी रूई", aliases: ["cotton for baby"], unit: "pack", type: "baby_hygiene" },

    /* BABY BATH & SKIN CARE */

    { id: "baby-soap", name: "Baby Bath Soap", name_hi: "बेबी नहाने का साबुन", aliases: ["baby soap"], unit: "piece", type: "baby_bath" },
    { id: "baby-body-wash", name: "Baby Body Wash", name_hi: "बेबी बॉडी वॉश", aliases: ["baby shower gel"], unit: "bottle", type: "baby_bath" },
    { id: "baby-shampoo", name: "Baby Shampoo", name_hi: "बेबी शैम्पू", aliases: ["baby hair shampoo"], unit: "bottle", type: "baby_bath" },
    { id: "baby-oil", name: "Baby Massage Oil", name_hi: "बेबी मसाज ऑयल", aliases: ["baby massage tel"], unit: "bottle", type: "baby_skin_care" },
    { id: "baby-lotion", name: "Baby Lotion", name_hi: "बेबी लोशन", aliases: ["baby body lotion"], unit: "bottle", type: "baby_skin_care" },
    { id: "baby-cream", name: "Baby Cream", name_hi: "बेबी क्रीम", aliases: ["baby face cream"], unit: "pack", type: "baby_skin_care" },
    { id: "baby-powder", name: "Baby Powder", name_hi: "बेबी पाउडर", aliases: ["baby talcum"], unit: "bottle", type: "baby_skin_care" },
    { id: "baby-diaper-rash-cream", name: "Diaper Rash Cream", name_hi: "डायपर रैश क्रीम", aliases: ["rash cream"], unit: "tube", type: "baby_skin_care" },
    { id: "baby-petroleum-jelly", name: "Baby Petroleum Jelly", name_hi: "बेबी पेट्रोलियम जेली", aliases: ["baby vaseline"], unit: "pack", type: "baby_skin_care" },
    { id: "baby-sunscreen", name: "Baby Sunscreen", name_hi: "बेबी सनस्क्रीन", aliases: ["baby sun lotion"], unit: "tube", type: "baby_skin_care" },

    /* BABY FOOD & FEEDING */

    { id: "baby-infant-formula-stage1", name: "Infant Formula Stage 1", name_hi: "इन्फेंट फॉर्मूला स्टेज 1", aliases: ["baby formula 1"], unit: "tin", type: "baby_food" },
    { id: "baby-infant-formula-stage2", name: "Follow-up Formula Stage 2", name_hi: "फॉलो अप फॉर्मूला स्टेज 2", aliases: ["baby formula 2"], unit: "tin", type: "baby_food" },
    { id: "baby-infant-formula-stage3", name: "Growing-up Formula Stage 3", name_hi: "ग्रोइंग अप फॉर्मूला स्टेज 3", aliases: ["baby formula 3"], unit: "tin", type: "baby_food" },
    { id: "baby-cereal", name: "Baby Cereal", name_hi: "बेबी सीरियल", aliases: ["infant cereal"], unit: "pack", type: "baby_food" },
    { id: "baby-rice-cereal", name: "Baby Rice Cereal", name_hi: "बेबी राइस सीरियल", aliases: ["rice baby cereal"], unit: "pack", type: "baby_food" },
    { id: "baby-wheat-cereal", name: "Baby Wheat Cereal", name_hi: "बेबी व्हीट सीरियल", aliases: ["wheat baby cereal"], unit: "pack", type: "baby_food" },
    { id: "baby-fruit-puree", name: "Baby Fruit Puree", name_hi: "बेबी फ्रूट प्यूरी", aliases: ["fruit baby food"], unit: "pack", type: "baby_food" },
    { id: "baby-vegetable-puree", name: "Baby Vegetable Puree", name_hi: "बेबी वेजिटेबल प्यूरी", aliases: ["vegetable baby food"], unit: "pack", type: "baby_food" },
    { id: "baby-snacks", name: "Baby Snacks", name_hi: "बेबी स्नैक्स", aliases: ["baby puffs"], unit: "pack", type: "baby_food" },
    { id: "baby-teething-biscuit", name: "Baby Teething Biscuit", name_hi: "बेबी टीथिंग बिस्किट", aliases: ["teething rusk"], unit: "pack", type: "baby_food" },
    { id: "baby-feeding-bottle", name: "Baby Feeding Bottle", name_hi: "बेबी फीडिंग बोतल", aliases: ["milk feeding bottle"], unit: "piece", type: "baby_accessory" },
    { id: "baby-bottle-nipple", name: "Feeding Bottle Nipple", name_hi: "फीडिंग बोतल निप्पल", aliases: ["bottle teat"], unit: "piece", type: "baby_accessory" },
    { id: "baby-bottle-brush", name: "Feeding Bottle Brush", name_hi: "बोतल साफ करने का ब्रश", aliases: ["baby bottle cleaner brush"], unit: "piece", type: "baby_accessory" },
    { id: "baby-sipper", name: "Baby Sipper Cup", name_hi: "बेबी सिपर कप", aliases: ["sipper"], unit: "piece", type: "baby_accessory" },
    { id: "baby-spoon", name: "Baby Feeding Spoon", name_hi: "बेबी फीडिंग चम्मच", aliases: ["baby spoon"], unit: "piece", type: "baby_accessory" },
    { id: "baby-bowl", name: "Baby Feeding Bowl", name_hi: "बेबी फीडिंग कटोरी", aliases: ["baby bowl"], unit: "piece", type: "baby_accessory" },
    { id: "baby-bib", name: "Baby Bib", name_hi: "बेबी बिब", aliases: ["feeding bib"], unit: "piece", type: "baby_accessory" },

    /* BABY CLOTHING & ACCESSORIES */

    { id: "baby-nappy", name: "Baby Cloth Nappy", name_hi: "बच्चे की कपड़े की लंगोट", aliases: ["langot"], unit: "piece", type: "baby_clothing" },
    { id: "baby-wrapper", name: "Baby Wrapper", name_hi: "बेबी रैपर", aliases: ["baby wrapping cloth"], unit: "piece", type: "baby_clothing" },
    { id: "baby-vest", name: "Baby Vest", name_hi: "बच्चे की बनियान", aliases: ["baby baniyan"], unit: "piece", type: "baby_clothing" },
    { id: "baby-cap", name: "Baby Cap", name_hi: "बेबी टोपी", aliases: ["baby hat"], unit: "piece", type: "baby_clothing" },
    { id: "baby-socks", name: "Baby Socks", name_hi: "बेबी मोजे", aliases: ["baby moze"], unit: "pair", type: "baby_clothing" },
    { id: "baby-blanket", name: "Baby Blanket", name_hi: "बेबी कंबल", aliases: ["baby kambal"], unit: "piece", type: "baby_clothing" },
    { id: "baby-towel", name: "Baby Towel", name_hi: "बेबी तौलिया", aliases: ["baby towel"], unit: "piece", type: "baby_clothing" },
    { id: "baby-mosquito-net", name: "Baby Mosquito Net", name_hi: "बेबी मच्छरदानी", aliases: ["baby net"], unit: "piece", type: "baby_accessory" },
    { id: "baby-pacifier", name: "Baby Pacifier", name_hi: "बेबी पैसिफायर", aliases: ["baby soother"], unit: "piece", type: "baby_accessory" },
    { id: "baby-teether", name: "Baby Teether", name_hi: "बेबी टीथर", aliases: ["teething toy"], unit: "piece", type: "baby_accessory" },
    { id: "baby-rattle", name: "Baby Rattle", name_hi: "बेबी झुनझुना", aliases: ["baby toy rattle"], unit: "piece", type: "baby_toy" },
    { id: "baby-soft-toy", name: "Baby Soft Toy", name_hi: "बेबी सॉफ्ट टॉय", aliases: ["baby plush toy"], unit: "piece", type: "baby_toy" },

    /* PET FOOD - DOG */

    { id: "pet-dog-dry-food", name: "Dog Dry Food", name_hi: "कुत्ते का ड्राई फूड", aliases: ["dog kibble"], unit: "pack", type: "dog_food" },
    { id: "pet-dog-wet-food", name: "Dog Wet Food", name_hi: "कुत्ते का वेट फूड", aliases: ["dog gravy food"], unit: "pack", type: "dog_food" },
    { id: "pet-dog-puppy-food", name: "Puppy Food", name_hi: "पपी फूड", aliases: ["puppy kibble"], unit: "pack", type: "dog_food" },
    { id: "pet-dog-adult-food", name: "Adult Dog Food", name_hi: "बड़े कुत्ते का खाना", aliases: ["adult dog kibble"], unit: "pack", type: "dog_food" },
    { id: "pet-dog-senior-food", name: "Senior Dog Food", name_hi: "बुजुर्ग कुत्ते का खाना", aliases: ["senior dog diet"], unit: "pack", type: "dog_food" },
    { id: "pet-dog-biscuits", name: "Dog Biscuits", name_hi: "कुत्ते के बिस्किट", aliases: ["dog treats"], unit: "pack", type: "dog_treat" },
    { id: "pet-dog-chews", name: "Dog Chew Treats", name_hi: "कुत्ते के चबाने वाले ट्रीट", aliases: ["dog chew"], unit: "pack", type: "dog_treat" },
    { id: "pet-dog-dental-chew", name: "Dog Dental Chews", name_hi: "कुत्ते के डेंटल च्यू", aliases: ["dog dental stick"], unit: "pack", type: "dog_treat" },
    { id: "pet-dog-meat-treat", name: "Dog Meat Treat", name_hi: "कुत्ते का मीट ट्रीट", aliases: ["chicken dog treat"], unit: "pack", type: "dog_treat" },

    /* PET FOOD - CAT */

    { id: "pet-cat-dry-food", name: "Cat Dry Food", name_hi: "बिल्ली का ड्राई फूड", aliases: ["cat kibble"], unit: "pack", type: "cat_food" },
    { id: "pet-cat-wet-food", name: "Cat Wet Food", name_hi: "बिल्ली का वेट फूड", aliases: ["cat gravy food"], unit: "pack", type: "cat_food" },
    { id: "pet-cat-kitten-food", name: "Kitten Food", name_hi: "छोटी बिल्ली का खाना", aliases: ["kitten kibble"], unit: "pack", type: "cat_food" },
    { id: "pet-cat-adult-food", name: "Adult Cat Food", name_hi: "बड़ी बिल्ली का खाना", aliases: ["adult cat kibble"], unit: "pack", type: "cat_food" },
    { id: "pet-cat-treats", name: "Cat Treats", name_hi: "बिल्ली के ट्रीट", aliases: ["cat snacks"], unit: "pack", type: "cat_treat" },
    { id: "pet-cat-milk", name: "Cat Milk", name_hi: "बिल्ली का दूध", aliases: ["pet cat milk"], unit: "pack", type: "cat_food" },

    /* OTHER PET FOOD */

    { id: "pet-bird-seed", name: "Bird Seeds", name_hi: "पक्षियों के दाने", aliases: ["bird food"], unit: "pack", type: "bird_food" },
    { id: "pet-parrot-food", name: "Parrot Food", name_hi: "तोते का खाना", aliases: ["parrot seed mix"], unit: "pack", type: "bird_food" },
    { id: "pet-fish-food", name: "Fish Food", name_hi: "मछली का खाना", aliases: ["aquarium fish food"], unit: "pack", type: "fish_food" },
    { id: "pet-rabbit-food", name: "Rabbit Food", name_hi: "खरगोश का खाना", aliases: ["rabbit pellets"], unit: "pack", type: "small_pet_food" },
    { id: "pet-hamster-food", name: "Hamster Food", name_hi: "हैम्स्टर का खाना", aliases: ["hamster mix"], unit: "pack", type: "small_pet_food" },

    /* PET ACCESSORIES & HYGIENE */

    { id: "pet-dog-shampoo", name: "Dog Shampoo", name_hi: "कुत्ते का शैम्पू", aliases: ["pet shampoo"], unit: "bottle", type: "pet_hygiene" },
    { id: "pet-cat-shampoo", name: "Cat Shampoo", name_hi: "बिल्ली का शैम्पू", aliases: ["cat bath shampoo"], unit: "bottle", type: "pet_hygiene" },
    { id: "pet-flea-comb", name: "Pet Flea Comb", name_hi: "पालतू जानवरों की जूं वाली कंघी", aliases: ["flea comb"], unit: "piece", type: "pet_grooming" },
    { id: "pet-grooming-brush", name: "Pet Grooming Brush", name_hi: "पेट ग्रूमिंग ब्रश", aliases: ["dog brush"], unit: "piece", type: "pet_grooming" },
    { id: "pet-nail-cutter", name: "Pet Nail Cutter", name_hi: "पेट नेल कटर", aliases: ["dog nail clipper"], unit: "piece", type: "pet_grooming" },
    { id: "pet-waste-bags", name: "Pet Waste Bags", name_hi: "पेट वेस्ट बैग", aliases: ["dog poop bags"], unit: "pack", type: "pet_hygiene" },
    { id: "pet-cat-litter", name: "Cat Litter", name_hi: "कैट लिटर", aliases: ["cat toilet sand"], unit: "pack", type: "cat_hygiene" },
    { id: "pet-litter-tray", name: "Cat Litter Tray", name_hi: "कैट लिटर ट्रे", aliases: ["cat toilet tray"], unit: "piece", type: "cat_accessory" },
    { id: "pet-dog-bowl", name: "Dog Feeding Bowl", name_hi: "कुत्ते का खाना रखने का बर्तन", aliases: ["pet bowl"], unit: "piece", type: "pet_accessory" },
    { id: "pet-cat-bowl", name: "Cat Feeding Bowl", name_hi: "बिल्ली का खाना रखने का बर्तन", aliases: ["cat bowl"], unit: "piece", type: "pet_accessory" },
    { id: "pet-water-bottle", name: "Pet Water Bottle", name_hi: "पेट पानी की बोतल", aliases: ["dog water bottle"], unit: "piece", type: "pet_accessory" },
    { id: "pet-dog-leash", name: "Dog Leash", name_hi: "कुत्ते का पट्टा", aliases: ["dog belt"], unit: "piece", type: "pet_accessory" },
    { id: "pet-dog-collar", name: "Dog Collar", name_hi: "कुत्ते का कॉलर", aliases: ["dog neck belt"], unit: "piece", type: "pet_accessory" },
    { id: "pet-dog-rope-toy", name: "Dog Rope Toy", name_hi: "कुत्ते का रस्सी वाला खिलौना", aliases: ["pet rope toy"], unit: "piece", type: "pet_toy" },
    { id: "pet-cat-toy", name: "Cat Toy", name_hi: "बिल्ली का खिलौना", aliases: ["cat play toy"], unit: "piece", type: "pet_toy" },
    { id: "pet-bird-cage", name: "Bird Cage", name_hi: "पक्षियों का पिंजरा", aliases: ["parrot cage"], unit: "piece", type: "pet_accessory" },
    { id: "pet-fish-aquarium", name: "Fish Aquarium", name_hi: "मछली का एक्वेरियम", aliases: ["fish tank"], unit: "piece", type: "pet_accessory" },
    { id: "pet-aquarium-gravel", name: "Aquarium Gravel", name_hi: "एक्वेरियम की बजरी", aliases: ["fish tank stones"], unit: "pack", type: "pet_accessory" },
    { id: "pet-aquarium-filter", name: "Aquarium Filter", name_hi: "एक्वेरियम फिल्टर", aliases: ["fish tank filter"], unit: "piece", type: "pet_accessory" },

    /* LOCAL & UNBRANDED */

    { id: "baby-local-diaper", name: "Local Baby Diapers", name_hi: "स्थानीय बेबी डायपर", aliases: ["unbranded diaper"], unit: "pack", type: "local_baby_care" },
    { id: "baby-local-wipes", name: "Local Baby Wipes", name_hi: "स्थानीय बेबी वाइप्स", aliases: ["unbranded baby wipes"], unit: "pack", type: "local_baby_care" },
    { id: "baby-local-oil", name: "Local Baby Oil", name_hi: "स्थानीय बेबी तेल", aliases: ["loose baby oil"], unit: "bottle", type: "local_baby_care" },
    { id: "baby-local-soap", name: "Local Baby Soap", name_hi: "स्थानीय बेबी साबुन", aliases: ["unbranded baby soap"], unit: "piece", type: "local_baby_care" },
    { id: "pet-local-dog-food", name: "Local Dog Food", name_hi: "स्थानीय कुत्ते का खाना", aliases: ["loose dog food"], unit: "kg", type: "local_pet_food" },
    { id: "pet-local-cat-food", name: "Local Cat Food", name_hi: "स्थानीय बिल्ली का खाना", aliases: ["loose cat food"], unit: "kg", type: "local_pet_food" },
    { id: "pet-local-bird-food", name: "Local Bird Feed", name_hi: "स्थानीय पक्षियों का दाना", aliases: ["loose bird seed"], unit: "kg", type: "local_pet_food" },
    { id: "pet-local-fish-food", name: "Local Fish Feed", name_hi: "स्थानीय मछली का दाना", aliases: ["loose fish food"], unit: "pack", type: "local_pet_food" }
  ];

  DB.registerBrands(CATEGORY, brands);
  DB.registerProducts(CATEGORY, products);
})();
 /* =========================================================
   NEXUS POS — CATEGORY 21
   TOBACCO, GUTKHA, PAN MASALA & PAAN PRODUCTS
   ========================================================= */

(function (global) {
"use strict";

const DB = global.NexusFoodMasterDatabase;

if (!DB) {
    throw new Error("NexusFoodMasterDatabase engine not found");
}

const CATEGORY = "tobacco_paan_masala";

const brands = [
    "Vimal",
    "Rajnigandha",
    "Shikhar",
    "Pan Parag",
    "Manikchand",
    "Kamla Pasand",
    "RMD",
    "Goa",
    "Dilbagh",
    "Baba",
    "Tulsi",
    "Chaini Khaini",
    "Jai",
    "Mawa",
    "Bharat",
    "Jarda Brand",
    "Gold Flake",
    "Classic",
    "Wills",
    "Navy Cut",
    "Bristol",
    "Four Square",
    "Red & White",
    "Cavanders",
    "Marlboro",
    "Benson & Hedges",
    "Davidoff",
    "Capstan",
    "Charminar",
    "Local Beedi Brand",
    "Local Tobacco Manufacturer",
    "Local Paan Masala Manufacturer",
    "Local Paan Shop",
    "Local Supari Supplier",
    "Loose / Unbranded"
];

const products = [];

function add(id, hi, en, sub, unit, aliases, variant, brand) {
    products.push({
        id: id,
        name_hi: hi,
        name_en: en,
        brand: brand || "Loose / Unbranded",
        variant: variant || "",
        category: CATEGORY,
        subcategory: sub,
        base_unit: unit,
        aliases: aliases || [],
        pack_options: [
            "खुला",
            "छोटा पैकेट",
            "बड़ा पैकेट",
            "डिब्बा"
        ],
        sector_tags: ["kirana", "paan_shop", "retail"],
        source: "NEXUS_MASTER_CATEGORY_21"
    });
}

/* ---------- PAN MASALA ---------- */

add("TPM-001","पान मसाला","Pan Masala","pan_masala","packet",
["pan masala","पान मसाला","सादा पान मसाला","plain pan masala"]);
add("TPM-002","इलायची पान मसाला","Cardamom Pan Masala","pan_masala","packet",
["elaichi pan masala","इलायची वाला पान मसाला"]);
add("TPM-003","मीठा पान मसाला","Sweet Pan Masala","pan_masala","packet",
["meetha pan masala","मीठा मसाला"]);
add("TPM-004","सादा सुपारी पान मसाला","Plain Supari Pan Masala","pan_masala","packet",
["supari pan masala","सुपारी मसाला"]);
add("TPM-005","तंबाकू वाला पान मसाला","Tobacco Pan Masala","pan_masala","packet",
["tobacco pan masala","तंबाकू पान मसाला"]);
add("TPM-006","केसर पान मसाला","Kesar Pan Masala","pan_masala","packet",
["kesar pan masala","केसर वाला मसाला"]);
add("TPM-007","सौंफ पान मसाला","Fennel Pan Masala","pan_masala","packet",
["saunf pan masala","सौंफ वाला पान मसाला"]);

/* ---------- GUTKHA ---------- */

add("TPM-008","गुटखा","Gutkha","gutkha","packet",
["gutka","गुटखा","तंबाकू गुटखा"]);
add("TPM-009","सादा गुटखा","Plain Gutkha","gutkha","packet",
["plain gutka","सादा gutkha"]);
add("TPM-010","मीठा गुटखा","Sweet Gutkha","gutkha","packet",
["meetha gutka","मीठा gutkha"]);
add("TPM-011","सुपारी वाला गुटखा","Supari Gutkha","gutkha","packet",
["supari gutka","सुपारी गुटखा"]);

/* ---------- CHEWING TOBACCO ---------- */

add("TPM-012","चबाने वाला तंबाकू","Chewing Tobacco","chewing_tobacco","packet",
["chewing tobacco","चबाने का तंबाकू"]);
add("TPM-013","खैनी","Khaini","chewing_tobacco","packet",
["khaini","खैनी","तंबाकू खैनी"]);
add("TPM-014","जर्दा","Zarda Tobacco","chewing_tobacco","packet",
["zarda","जर्दा","जर्दा तंबाकू"]);
add("TPM-015","मीठा जर्दा","Sweet Zarda","chewing_tobacco","packet",
["meetha zarda","मीठा जर्दा तंबाकू"]);
add("TPM-016","सादा जर्दा","Plain Zarda","chewing_tobacco","packet",
["plain zarda","सादा जर्दा"]);
add("TPM-017","पत्ती तंबाकू","Tobacco Leaf","chewing_tobacco","kg",
["patti tambaku","तंबाकू पत्ती","खुला तंबाकू"]);
add("TPM-018","ढीला तंबाकू","Loose Tobacco","chewing_tobacco","kg",
["loose tambaku","खुला तंबाकू","ढीला tobacco"]);
add("TPM-019","सुरती तंबाकू","Surti Tobacco","chewing_tobacco","packet",
["surti","सुरती","सुरती तंबाकू"]);
add("TPM-020","सूंघने वाला तंबाकू","Snuff Tobacco","chewing_tobacco","packet",
["snuff","नसवार","सूंघनी तंबाकू"]);

/* ---------- BEEDI & CIGARETTES ---------- */

add("TPM-021","बीड़ी","Beedi","smoking_tobacco","bundle",
["bidi","बीड़ी","देशी बीड़ी"]);
add("TPM-022","सादा बीड़ी","Plain Beedi","smoking_tobacco","bundle",
["plain bidi","सादी बीड़ी"]);
add("TPM-023","फिल्टर सिगरेट","Filter Cigarette","smoking_tobacco","packet",
["filter cigarette","फिल्टर वाली सिगरेट"]);
add("TPM-024","नॉन फिल्टर सिगरेट","Non Filter Cigarette","smoking_tobacco","packet",
["non filter cigarette","बिना फिल्टर सिगरेट"]);
add("TPM-025","छोटी सिगरेट","Small Cigarette","smoking_tobacco","packet",
["small cigarette","छोटी cigarette"]);
add("TPM-026","लंबी सिगरेट","Long Cigarette","smoking_tobacco","packet",
["long cigarette","लंबी cigarette"]);
add("TPM-027","सिगार","Cigar","smoking_tobacco","piece",
["cigar","सिगार"]);
add("TPM-028","सिगारिलो","Cigarillo","smoking_tobacco","packet",
["cigarillo","छोटा सिगार"]);

/* ---------- PAAN SUPARI & INGREDIENTS ---------- */

add("TPM-029","सुपारी","Areca Nut","paan_ingredients","kg",
["supari","सुपारी","अरेका नट"]);
add("TPM-030","कटी सुपारी","Cut Supari","paan_ingredients","kg",
["cut supari","कटी हुई सुपारी"]);
add("TPM-031","लाल सुपारी","Red Supari","paan_ingredients","kg",
["red supari","लाल सुपारी"]);
add("TPM-032","सफेद सुपारी","White Supari","paan_ingredients","kg",
["white supari","सफेद सुपारी"]);
add("TPM-033","मीठी सुपारी","Sweet Supari","paan_ingredients","kg",
["sweet supari","मीठी सुपारी"]);
add("TPM-034","इलायची दाना","Cardamom Seeds","paan_ingredients","kg",
["elaichi dana","इलायची दाना"]);
add("TPM-035","सौंफ","Fennel Seeds","paan_ingredients","kg",
["saunf","सौंफ"]);
add("TPM-036","मीठी सौंफ","Sweet Fennel","paan_ingredients","kg",
["meethi saunf","मीठी सौंफ"]);
add("TPM-037","कत्था","Catechu","paan_ingredients","kg",
["kattha","कत्था","पान कत्था"]);
add("TPM-038","चूना","Paan Lime","paan_ingredients","kg",
["chuna","चूना","पान का चूना"]);
add("TPM-039","पान पत्ता","Betel Leaf","paan_ingredients","piece",
["paan leaf","पान","नागवेली पत्ता"]);
add("TPM-040","गुलकंद","Gulkand","paan_ingredients","kg",
["gulkand","गुलकंद"]);
add("TPM-041","लौंग","Clove","paan_ingredients","kg",
["laung","लौंग"]);
add("TPM-042","मीठा नारियल","Sweet Coconut","paan_ingredients","kg",
["meetha nariyal","मीठा गोला","sweet coconut"]);
add("TPM-043","सूखा नारियल बुरादा","Dry Coconut Flakes","paan_ingredients","kg",
["dry coconut","नारियल बुरादा"]);
add("TPM-044","पान मसाला मिक्स","Paan Mix","paan_ingredients","kg",
["paan mix","पान मिक्स"]);
add("TPM-045","पान बनाने का तैयार मसाला","Ready Paan Filling","paan_ingredients","packet",
["paan filling","पान की भराई"]);
add("TPM-046","पान रैपर","Paan Wrapper","paan_accessories","packet",
["paan wrapper","पान रैपर"]);
add("TPM-047","पान फॉइल","Paan Foil","paan_accessories","packet",
["paan foil","चांदी वर्क","पान की चांदी"]);
add("TPM-048","पान पैकिंग डिब्बी","Paan Packing Box","paan_accessories","piece",
["paan box","पान डिब्बी"]);

/* ---------- TOBACCO-FREE MOUTH FRESHENERS ---------- */

add("TPM-049","तंबाकू रहित माउथ फ्रेशनर","Tobacco Free Mouth Freshener","mouth_freshener","packet",
["mouth freshener","माउथ फ्रेशनर","बिना तंबाकू का मसाला"]);
add("TPM-050","मीठा माउथ फ्रेशनर","Sweet Mouth Freshener","mouth_freshener","packet",
["sweet mouth freshener","मीठा मुखवास"]);
add("TPM-051","सौंफ मिक्स","Fennel Mix","mouth_freshener","packet",
["saunf mix","सौंफ मिक्स"]);
add("TPM-052","रंगीन सौंफ","Colored Fennel","mouth_freshener","kg",
["rangin saunf","रंगीन सौंफ"]);
add("TPM-053","इलायची मिक्स","Cardamom Mix","mouth_freshener","packet",
["elaichi mix","इलायची मिक्स"]);
add("TPM-054","ड्राई पान","Dry Paan","mouth_freshener","packet",
["dry paan","सूखा पान"]);
add("TPM-055","मीठा पान","Sweet Paan","mouth_freshener","piece",
["meetha paan","मीठा पान"]);
add("TPM-056","मुखवास","Mukhwas","mouth_freshener","kg",
["mukhwas","मुखवास","मुखवास मिक्स"]);
add("TPM-057","नारियल मुखवास","Coconut Mukhwas","mouth_freshener","kg",
["nariyal mukhwas","नारियल मुखवास"]);
add("TPM-058","खजूर मुखवास","Date Mukhwas","mouth_freshener","kg",
["khajoor mukhwas","खजूर मुखवास"]);

/* ---------- LOCAL / LOOSE PRODUCTS ---------- */

add("TPM-059","लोकल पान मसाला","Local Pan Masala","local_products","packet",
["local pan masala","स्थानीय पान मसाला"]);
add("TPM-060","लोकल गुटखा","Local Gutkha","local_products","packet",
["local gutka","स्थानीय गुटखा"]);
add("TPM-061","लोकल खैनी","Local Khaini","local_products","packet",
["local khaini","स्थानीय खैनी"]);
add("TPM-062","लोकल जर्दा","Local Zarda","local_products","packet",
["local zarda","स्थानीय जर्दा"]);
add("TPM-063","लोकल सुपारी","Local Supari","local_products","kg",
["local supari","स्थानीय सुपारी"]);
add("TPM-064","लोकल मुखवास","Local Mukhwas","local_products","kg",
["local mukhwas","स्थानीय मुखवास"]);
add("TPM-065","लोकल बीड़ी","Local Beedi","local_products","bundle",
["local bidi","स्थानीय बीड़ी"]);
add("TPM-066","अन्य पान सामग्री","Other Paan Items","local_products","piece",
["other paan items","अन्य पान सामान"]);

DB.registerBrands(CATEGORY, brands);
DB.registerProducts(CATEGORY, products);

})(window);
