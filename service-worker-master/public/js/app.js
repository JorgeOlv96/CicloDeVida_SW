if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            setTimeout(() => {
                reg.sync.register('enviar-fotos');
                console.log('Se enviaron fotos', reg);
            }, 3000);
        }).catch(err => {
            console.error('Service Worker not registered', err)
        });
    // .then(reg => {
    //     console.log('Service Worker registered', reg)
    // }).catch(err => {
    //     console.error('Service Worker not registered', err)
    // });
}
// fetch('https://fakestoreapi.com/products/1')
//     .then(resp => resp.json())
//     .then(console.log);