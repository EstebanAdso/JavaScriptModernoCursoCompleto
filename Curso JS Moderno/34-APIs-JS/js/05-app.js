//Detener si no se esta mirando el video
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Reproducir el video');
    } else {
        console.log('Pausar el video');
    }
});