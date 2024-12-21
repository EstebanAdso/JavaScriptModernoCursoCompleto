//Cuando hable me escuchara y entendera
const salida = document.querySelector('#salida');
const mic = document.querySelector('.mic');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    //aranca el reconocimiento
    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de escuchar...';
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log(e.results[0][0]);

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const confianza = document.createElement('p');
        confianza.innerHTML = `Confianza: ${parseInt(confidence * 100)}%`;

        salida.appendChild(speech);
        salida.appendChild(confianza);
    };
}