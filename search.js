/* Universal product search for calculator_lock.html.
 * Requires the page to include this file after its main POS script.
 * If the search controls are absent, they are inserted below the existing
 * custom-item row. Uses Product DNA as a fallback provider when available.
 */
(function () {
    "use strict";

    function getProductProvider() {
        if (window.posSearch && typeof window.posSearch.searchProduct === "function") {
            return window.posSearch;
        }

        if (typeof window.loadProductDNA === "function") {
            window.posSearch = {
                searchProduct(query) {
                    const term = String(query || "").trim().toLocaleLowerCase();
                    if (term.length < 2) return [];

                    const database = window.loadProductDNA();
                    if (!database || typeof database !== "object") return [];

                    return Object.entries(database)
                        .map(([barcode, product]) => ({
                            ...(product || {}),
                            barcode: String(product?.barcode || barcode)
                        }))
                        .filter(product => {
                            if (!product || typeof product.name !== "string") return false;
                            const text = [product.name, product.description, product.barcode]
                                .join(" ")
                                .toLocaleLowerCase();
                            return text.includes(term);
                        })
                        .map(product => ({
                            name: product.name,
                            price: Number(product.salePrice),
                            barcode: product.barcode,
                            description: product.description || "",
                            unit: product.unit || "पीस",
                            category: "Product DNA",
                            stock: Number(product.stock)
                        }))
                        .filter(product => Number.isFinite(product.price) && product.price >= 0);
                }
            };
            return window.posSearch;
        }

        return null;
    }

    function ensureSearchControls() {
        let input = document.getElementById("search-input-box");
        let results = document.getElementById("search-results-box");
        if (input && results) return { input, results };

        const itemNameInput = document.getElementById("newItemNameInput");
        const anchor = itemNameInput?.parentElement;
        if (!anchor || !anchor.parentElement) {
            console.error("Search controls could not be created: custom-item row not found.");
            return null;
        }

        const wrapper = document.createElement("div");
        wrapper.style.cssText = "position:relative;display:flex;flex-direction:column;gap:4px;";

        input = document.createElement("input");
        input.type = "search";
        input.id = "search-input-box";
        input.placeholder = "🔍 सामान खोजें या बारकोड दर्ज करें...";
        input.autocomplete = "off";
        input.setAttribute("aria-label", "सामान खोजें");
        input.style.cssText =
            "width:100%;background:#030712;border:1.5px solid rgba(0,243,255,0.4);" +
            "color:#fff;font-size:10px;padding:6px;border-radius:6px;outline:none;";

        results = document.createElement("div");
        results.id = "search-results-box";
        results.setAttribute("role", "listbox");
        results.setAttribute("aria-label", "खोज परिणाम");
        results.style.cssText = "max-height:180px;overflow-y:auto;";

        input.addEventListener("input", handleUniversalSearch);
        wrapper.append(input, results);
        anchor.parentElement.insertBefore(wrapper, anchor.nextSibling);
        return { input, results };
    }

    function handleUniversalSearch(event) {
        const query = String(event?.target?.value || "").trim();
        const resultsContainer = document.getElementById("search-results-box");
        if (!resultsContainer) return;

        resultsContainer.replaceChildren();
        if (query.length < 2) return;

        const provider = getProductProvider();
        if (!provider) {
            console.error("Product search provider is unavailable (window.posSearch). ");
            resultsContainer.textContent = "खोज सुविधा उपलब्ध नहीं है।";
            return;
        }

        let matchedItems;
        try {
            matchedItems = provider.searchProduct(query);
        } catch (error) {
            console.error("Product search failed:", error);
            resultsContainer.textContent = "खोज के दौरान त्रुटि हुई।";
            return;
        }

        if (typeof matchedItems === "string") {
            resultsContainer.textContent = matchedItems;
            return;
        }
        if (!Array.isArray(matchedItems) || matchedItems.length === 0) {
            resultsContainer.textContent = "कोई आइटम नहीं मिला!";
            return;
        }

        const list = document.createElement("ul");
        list.className =
            "bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto";

        matchedItems.forEach(item => {
            if (!item || typeof item !== "object") return;

            const row = document.createElement("li");
            row.className =
                "p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer " +
                "flex justify-between items-center";
            row.setAttribute("role", "option");
            row.tabIndex = 0;

            const details = document.createElement("div");
            const name = document.createElement("span");
            name.className = "font-bold text-white";
            name.textContent = String(item.name || "");

            const metadata = document.createElement("span");
            metadata.className = "text-xs text-gray-400 block";
            metadata.textContent =
                `श्रेणी: ${item.category || "—"} | बारकोड: ${item.barcode || "N/A"}`;
            details.append(name, metadata);

            const price = document.createElement("span");
            price.className = "text-green-400 font-bold";
            const numericPrice = Number(item.price);
            price.textContent = Number.isFinite(numericPrice)
                ? `₹${numericPrice}`
                : "कीमत उपलब्ध नहीं";

            const select = () => selectProductFromSearch(item);
            row.addEventListener("click", select);
            row.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    select();
                }
            });

            row.append(details, price);
            list.appendChild(row);
        });

        if (list.childElementCount === 0) {
            resultsContainer.textContent = "कोई आइटम नहीं मिला!";
            return;
        }
        resultsContainer.appendChild(list);
    }

    function selectProductFromSearch(item) {
        if (!item || !item.name) return;

        const input = document.getElementById("search-input-box");
        const results = document.getElementById("search-results-box");
        if (input) input.value = String(item.name);
        if (results) results.replaceChildren();

        if (typeof window.addItem !== "function") {
            console.error("Search result cannot be added: window.addItem is unavailable.");
            return;
        }

        const price = Number(item.price);
        if (!Number.isFinite(price) || price < 0) {
            alert("इस आइटम की कीमत सही नहीं है।");
            return;
        }

        window.addItem(
            String(item.name),
            1,
           item.unit || "पीस", 
            "Standard",
            price,
            item.barcode ? {
                barcode: String(item.barcode),
                description: String(item.description || "")
            } : null
        );
    }

    window.handleUniversalSearch = handleUniversalSearch;
    window.selectProductFromSearch = selectProductFromSearch;

    function initializeSearch() {
        ensureSearchControls();
        getProductProvider();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeSearch, { once: true });
    } else {
        initializeSearch();
    }
})();
