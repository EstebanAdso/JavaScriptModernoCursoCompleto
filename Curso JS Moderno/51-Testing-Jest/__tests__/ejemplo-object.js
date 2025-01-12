const cliente = {
    nombre: 'Carlos Esteban',
    balance: 500
}

describe('Testing al cliente', () =>{
    test('Si el cliente tiene mas de 400 es premium', () =>{
        //Si es mayor a 400
        expect(cliente.balance).toBeGreaterThan(400)
    });

    test('Es carlos esteban?', () =>{
        //Es carlos esteban?
        expect(cliente.nombre).toBe('Carlos Esteban')
    })

    test('No tiene 600', () =>{
        //No tiene 600
        expect(cliente.nombre).not.toBe(600)
    })
})