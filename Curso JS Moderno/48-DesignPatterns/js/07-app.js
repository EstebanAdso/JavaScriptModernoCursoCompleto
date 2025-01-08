//NameSpaces
const restauranteApp ={};

restauranteApp.platillos =[
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot dog',
        precio: 23
    }
];

restauranteApp.funciones ={
    mostrarMenu: platillos =>{
        console.log(`Bienvenidos a nuestro menú`)

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
        });
    },

    ordenar: id =>{
        console.log(`Tu platillo: ${restauranteApp.platillos[id].platillo} se esta preparando`)
    }
}

const {platillos} = restauranteApp;

restauranteApp.funciones.mostrarMenu(platillos);
restauranteApp.funciones.ordenar(1)