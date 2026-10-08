// CerveLab · service worker
// Al publicar una versión nueva de index.html, cambia CACHE_NAME (por ejemplo, de -F1 a -F2) y VERSION en index.html.
const CACHE_NAME = 'cervelab-2026.10.08-F3';
const ASSETS = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/environments/RoomEnvironment.js',
  'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/RoundedBoxGeometry.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleusercontent.com')) return; // registro central: siempre en línea
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    // la página: primero la red (para recibir versiones nuevas), si no hay conexión, la copia guardada
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE_NAME).then(k => k.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => {
    if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE_NAME).then(k => k.put(req, c)); }
    return r;
  })));
});
