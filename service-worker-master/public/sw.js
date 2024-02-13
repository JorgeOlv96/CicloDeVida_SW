// ciclo de vida del sw
//1.- install
self.addEventListener('install', event => {
    console.log('Service Worker installed', event);
    const instalation = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finished pre-caching static assets.');
            self.skipWaiting();
            resolve();
        }, 1);
    });
    event.waitUntil(instalation);
});
//2.- activate
self.addEventListener('activate', event => {
    console.log('Service Worker activated', event);
});

//Fetch: Manejo de peticiones HTTP
// self.addEventListener('fetch', function(event) {
//     console.log('SW: ', event.request.url);
//     // Aplicar estrategias del cache
//     if (event.request.url.includes('fakestoreapi')) {
//         const resp = new Response(`{"ok": false, "mensaje": "interceptado por el SW"}`);
//         event.respondWith(resp);
//     }
// });

//Sync: Recuperamos la conexión a internet
// self.addEventListener('sync', event => {
//     console.log('Tenemos conexión');
//     console.log(event);
//     console.log(event.tag); // identifica conexiones con o sin internet
// });

//Push: Manejar las push notifications
self.addEventListener('push', event => {
    console.log('Notificación recibida');
});