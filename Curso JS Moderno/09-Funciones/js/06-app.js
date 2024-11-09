//Parametros por Default
function saludar(nombre = 'Anonimo', apellido = ''){
    console.log(`Hola usuario ${nombre} ${apellido} Como estas?`)
}

saludar('Esteban','Trujillo')
saludar('Esteban')
saludar()