//Mixin pattern
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona ={
    mostrarInformacion(){
       console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`)
    }
}

//Añadir funciones persona a la clase persona
Object.assign(Persona.prototype, funcionesPersona)

const cliente = new Persona('Juan','juan@correo.com')

console.log(cliente)
cliente.mostrarInformacion()