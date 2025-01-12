function suma(a , b){
    return a + b;
}

function resta(a , b){
    return a - b;
}


describe('Testing a las funciones de suma y resta', () =>{
    test('suma de 20 y 30', () =>{
        //20 y 30 tiene que ser 50
        expect(suma(20, 30)).toBe(50)
    });

    test('resta de 10 y 5', () =>{
        //Es carlos esteban?
        expect(resta(10, 5)).toBe(5)
    })
})