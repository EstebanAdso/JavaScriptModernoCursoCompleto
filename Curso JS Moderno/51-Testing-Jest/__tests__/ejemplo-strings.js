//Probando strings
const password = "123456"

describe('Valida que el password no este vacio y tenga una extensión de 6 caracteres', () =>{
    test('Que el password tenga 6 caracteres', () =>{
        //que el password tenga 6 caracteres
        expect(password).toHaveLength(6)
    });

    test('Que el password no este vacio', () =>{
        //que el password no este vacio
        expect(password).not.toHaveLength(0);
    })
})