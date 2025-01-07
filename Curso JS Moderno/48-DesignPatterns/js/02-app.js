//2. Constructor Pattern o clases abstractas 
//   Heredar sobre la clase padre

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Miguel', 'Migle@gmail.com','Miguelito')
console.log(cliente)