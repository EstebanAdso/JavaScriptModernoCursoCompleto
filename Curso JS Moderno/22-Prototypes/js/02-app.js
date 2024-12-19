//Object Constructor
//Instancia de Cliente
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const esteban = new Cliente('esteban', 1000)
console.log(esteban)

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y la categoria es ${categoria}`
}

console.log(formatearCliente(esteban))

//Instancia de Empresa
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Linea')

console.log(formatearEmpresa(CCJ))