//Metodos de propiedad.
const reproductor = {
    reproducir: id =>
        console.log(`Reproduciendo canción con el id ${id}`)
    ,
    pausar: ()=> 
        console.log('pausando...')
    
}

reproductor.reproducir(30)
reproductor.pausar();

reproductor.borrar = id => {
    console.log('Borrando cancion con el id numero ' + id)
}

reproductor.borrar(30)