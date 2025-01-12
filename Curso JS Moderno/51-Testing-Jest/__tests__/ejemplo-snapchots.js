const cliente = {
    nombre: 'Carlos Esteban',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () =>{
    test('Es Esteban?', () =>{
        //creara una carpeta de snapshot con el objeto y probara todo el objeto
        expect(cliente).toMatchSnapshot();
    });

})