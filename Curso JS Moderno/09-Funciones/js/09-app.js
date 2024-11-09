//Metodos de propiedad.
const reproductor = {
    reproducir:  function(id){
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    }
}

reproductor.reproducir(30)
reproductor.pausar();

reproductor.borrar = function(id){
    console.log('Borrando cancion con el id numero ' + id)
}

reproductor.borrar(30)