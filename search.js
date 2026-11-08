// यूजर के टाइप करते ही या बारकोड स्कैन करते ही स्क्रीन पर रिजल्ट दिखाने का फंक्शन
function handleUniversalSearch(event) {
    const query = event.target.value.trim();
    const resultsContainer = document.getElementById('search-results-box');
    
    if- (!resultsContainer) return;
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }

    // posSearch क्लास से मैचिंग आइटम ढूंढना
    const matchedItems = posSearch.searchProduct(query);

    if (typeof matchedItems === 'string') {
        resultsContainer.innerHTML = `<div class="p-2 text-yellow-400">${matchedItems}</div>`;
        return;
    }

    if (matchedItems.length === 0) {
        resultsContainer.innerHTML = `<div class="p-2 text-red-400">कोई आइटम नहीं मिला!</div>`;
        return;
    }

    // मिलने वाले आइटम्स की लिस्ट स्क्रीन पर दिखाना
    let html = '<ul class="bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">';
    matchedItems.forEach(item => {
        html += `
            <li class="p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer flex justify-between items-center" 
                onclick="selectProductFromSearch('${item.name}', ${item.price})">
                <div>
                    <span class="font-bold text-white">${item.name}</span>
                    <span class="text-xs text-gray-400 block">श्रेणी: ${item.category} | बारकोड: ${item.barcode || 'N/A'}</span>
                </div>
                <span class="text-green-400 font-bold">₹${item.price}</span>
            </li>
        `;
    });
    html += '</ul>';
    resultsContainer.innerHTML = html;
}

// जब यूजर किसी आइटम पर क्लिक करे तो बिल में जुड़ जाए
function selectProductFromSearch(name, price) {
    console.log("चुना गया आइटम:", name, "कीमत:", price);
    // यहाँ तू अपने बिलिंग एरे (Cart) में इस आइटम को जोड़ सकता है
    document.getElementById('search-input-box').value = name;
    document.getElementById('search-results-box').innerHTML = '';
}