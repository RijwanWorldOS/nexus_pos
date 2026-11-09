
const CACHE_NAME = 'nexus-pos-v4';

const assetsToCache = [
  './index.html',
  './calculator_lock.html',
  './business-setup.html',
  './feed_biz.html',
  './manifest.json',
  './zxing-library.min.js',
  './zxing-browser.min.js'
];

// नई फाइलें Cache करें और नया Worker सक्रिय करें
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(assetsToCache);
    await self.skipWaiting();
  })());
});

// केवल पुराने Nexus POS Cache हटाएँ
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys.map((key) => {
        if (key.startsWith('nexus-pos-') && key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
    );

    await self.clients.claim();
  })());
});

// पहले Network से नई फाइल लें, फिर Cache में अपडेट करें
self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);

  // बाहरी वेबसाइटों या API के अनुरोध में दखल न दें
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const networkResponse = await fetch(request);

      if (networkResponse && networkResponse.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);

      if (cachedResponse) return cachedResponse;

      if (request.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }

      return Response.error();
    }
  })());
});
