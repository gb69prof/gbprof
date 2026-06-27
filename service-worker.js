const CACHE = 'gbprof-laboratorio-v1';
const ASSETS = [
  './','./index.html','./filosofia.html','./letteratura.html','./storia.html','./pwa.html','./mappe.html','./3d-vr.html','./collaborazione.html','./archivio-github.html','./progetti.html','./contatti.html',
  './assets/css/style.css','./assets/js/main.js','./assets/img/favicon.svg',
  './assets/img/home-cover.png','./assets/img/filosofia-cover.png','./assets/img/letteratura-cover.png','./assets/img/storia-cover.png','./assets/img/pwa-cover.png','./assets/img/mappe-cover.png','./assets/img/3d-vr-cover.png','./assets/img/collaborazione-cover.png','./assets/img/gbprof-portrait.jpeg'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',event=>{event.respondWith(caches.match(event.request).then(resp=>resp || fetch(event.request)));});
