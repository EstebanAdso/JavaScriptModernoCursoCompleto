//Patrones de diseño

//1. CLASS PATTERN
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com')

console.log(persona)