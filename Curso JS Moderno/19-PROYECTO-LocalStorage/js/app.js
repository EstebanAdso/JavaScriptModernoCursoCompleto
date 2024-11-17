//VARIABLES
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

//EVENTOS
eventListeners()

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet)

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [] // si no hay nada en el arreglo lo define como un arreglo vacio
        console.log(tweets)

        crearHtml()
    })
}

//FUNCIONES
function agregarTweet(e){
    e.preventDefault()
    
    //TextArea donde el usuario escribe.
    const tweet = document.querySelector('#tweet').value

    //validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio...')
        return //evita que se ejecuten mas lineas de codigo.
    }
    const tweetObj = {
        id: Date.now(),
        tweet //esto es igual a tweet: tweet al ser iguales no es necesario repetirlo
    }

    //Añadir al arrego de Tweet
    tweets = [...tweets, tweetObj] //Spread Operator, copia del arreglo y copia de cada tweet
   
    //una vez agregado crear el html
    crearHtml()

    //Reiniciar el formulario
    formulario.reset()
}

//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    //Elimina la alerta despues de 3 segundos.
    setTimeout(() => {
        mensajeError.remove()
    }, 3000);
}

//Muestra el listado de tweets
function crearHtml(){
    limpiarHtml()
    if(tweets.length > 0){
        tweets.forEach( tweet =>{
            //Agregar boton de eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X'

            //Añadir la Funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //Crear el html
            const li = document.createElement('li')
            //añadir el texto
            li.innerText = tweet.tweet
            //Añadir el boton
            li.appendChild(btnEliminar)
            //colocar en el listado de tweets
            listaTweets.appendChild(li)
        })
    }

    sincronizarStorage()
}

//Agrega los tweet a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Limpiar el html
function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

//Eliminar un tweet
function borrarTweet(id){
    tweets =  tweets.filter( tweet => tweet.id !== id)

    crearHtml()
}