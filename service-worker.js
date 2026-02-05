const CACHE_NAME = 'duoglobal-v1';
const ASSETS = [
    './',
    './index.html',
    './dashboard.html',
    './my-connections.html',
    './chat.html',
    './user-profile.html',
    './login.html',
    './register.html',
    './assets/images/logo.png',
    './assets/images/icon-192.png',
    './assets/images/background.png',
    './assets/images/hero.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;700&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    // Basic Stale-While-Revalidate strategy
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
