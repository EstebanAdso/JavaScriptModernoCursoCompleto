//Se utiliza self
//cachear archivos
const nombreCache ='apv-v1'
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

//Cuando se instala el service Worker
self.addEventListener('install', e =>{
    console.log('Instalado el service Worker')

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache =>{
                console.log('Cacheando');
                cache.addAll(archivos)
            })
    )
})

//Activar el service worker
self.addEventListener('activate', e =>{
    console.log('Service Worker activado');

    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys) //versiones del serviceWorker
                keys.filter(key => key !== nombreCache)
                    .map(key => caches.delete(key))//borra los demas cache
            })
    )
})

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e)

    //experiencia offline
    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache =>{
                return respuestaCache 
            })//Si hay un error ira a la pagina de error
            .catch( () => caches.match('/error.html'))
    )
})