//3. Singleton  
//No permite crear instancias de una misma clase

let instancia = null;

class Persona{
    constructor(nombre,email){
        //Si instancia no tiene nada
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia
        }
    }
}

const persona = new Persona('Juan','juan@gmail.com')
console.log(persona)