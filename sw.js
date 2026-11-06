const CACHE_NAME = 'nexus-pos-v2';
const assetsToCache = [
  './index.html',
  './calculator_lock.html',
  './business-setup.html',
  './feed_biz.html',
  './manifest.json'
];

// 1. इंस्टॉल करते समय सारी जरूरी फाइलें सेव कर लेना
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
  self.skipWaiting();
});

// 2. पुराना कचरा साफ करना (Activate)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. इंटरनेट न होने पर ऑफलाइन चलाना (Fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // अगर इंटरनेट भी नहीं है और फाइल कैश में भी नहीं है
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});