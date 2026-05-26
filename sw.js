const CACHE_NAME = 'sms-report-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './logo.png',
'./sms.png',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js'
];

// Install the Service Worker and Cache Files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve Cached Files when Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fall back to network
        return response || fetch(event.request);
      })
  );
});
