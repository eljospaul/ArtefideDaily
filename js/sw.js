const CACHE_NAME = 'artefide-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/base.css',
  '/css/main.css',
  '/js/main.js',
  '/js/be.js',
  '/images/logosvg.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
