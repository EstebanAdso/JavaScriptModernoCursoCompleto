//Probando Arrays
const carrito = ['Producto1','Producto2','Producto3']

describe('Testing al carrito de compras', () =>{
    test('probar que el array tenga 3 elementos', () =>{
        //probar que el array tenga 3 elementos
        expect(carrito).toHaveLength(3)
    });

    test('Que el carrito no este vacio', () =>{
        //Que el carrito no este vacio
        expect(carrito).not.toHaveLength(0);
    })
})