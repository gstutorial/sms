const CACHE_NAME = 'no-cache-v1';

// Install without caching files
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Activate and take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Always fetch directly from the network (Never Cache)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
