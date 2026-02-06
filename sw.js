// Service Worker بسيط عشان يقبل التثبيت
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('wow-store').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/menu.html',
        '/images/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
