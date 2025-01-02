//Composition
//es la capacidad de combinar dos o más funciones para producir un nuevo resultado.
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info =>({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info =>{
    return {
        mostrarEmail(){
            console.log(`Email: ${info.email}`);
        }
    }
}

function Cliente(nombre , email ,empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(info, obtenerNombre(info), guardarEmail(info), obtenerEmail(info));
}

function Empleado (nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(info, obtenerNombre(info), guardarEmail(info),obtenerEmail(info));
}

const cliente = new Cliente('Juan', 'correo@correo.com', 'Codigo con Juan');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
const empleado = new Empleado ('Pedro','empleado@gmail.com', 'Programador');
empleado.mostrarNombre();
cliente.agregarEmail('empleado@empleado.com');