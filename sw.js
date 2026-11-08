const CACHE_NAME = 'nexus-pos-v3';

const assetsToCache = [
  './index.html',
  './calculator_lock.html',
  './business-setup.html',
  './feed_biz.html',
  './manifest.json',
  './zxing-library.min.js',
  './zxing-browser.min.js'
];

// जरूरी फाइलें इंस्टॉल के समय कैश करें
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );

  self.skipWaiting();
});

// पुराने कैश हटाएँ
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

// पहले कैश से फाइल दें, फिर नेटवर्क से
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).catch(() => {
        const accept = event.request.headers.get('accept') || '';

        if (accept.includes('text/html')) {
          return caches.match('./index.html');
        }

        return Response.error();
      });
    })
  );
});
