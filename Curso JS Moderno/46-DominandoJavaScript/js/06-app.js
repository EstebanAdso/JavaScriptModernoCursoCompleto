//New Binding
// es cuando se crea un nuevo objeto y se le asigna el this a ese objeto

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro')
console.log(auto)

//Window Binding
window.color = 'negro'; // Agregamos un color a la ventana global
function hola(){
    console.log(color)
}

hola()