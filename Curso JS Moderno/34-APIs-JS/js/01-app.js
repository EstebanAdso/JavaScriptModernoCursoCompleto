//Notificacion
const notificarBtn = document.querySelector('#notificar');

//Preguntar al usuario si quiere recibir notificaciones.
notificarBtn.addEventListener('click', () => {
    Notification.
        requestPermission()
        .then(resultado =>{
            console.log('El resultado es ', resultado);
        })
});

//Si el usuario acepta, entonces mostrar la notificación.
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{
    if(Notification.permission === 'granted'){ //cuando el usuario acepta las notificaciones
        //creamos la notificación
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, aprende con proyectos reales'
        });

        notificacion.onclick = function(){
            window.open('https://www.codigoconjuan.com');
        }
    }
})