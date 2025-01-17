//Probar dos valores

function suma(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

async function sumaAsync(a,b) {
    return Promise.resolve(suma(a,b))
}

let resultado = suma(1,2)
let esperado = 3;

expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)

test('Suma 10 + 20 y el resultado debe ser 30', async () =>{
    const resultado = await sumaAsync(10,20)
    const esperado = 30;
    expected(esperado).toBe(resultado)
})

async function tes(mensaje,callback) {
    try{
        await callback();
        console.log(`el Test: ${mensaje} se ejecuto correctamente.`)
    }catch(error){
        console.error('ERROR');
        console.error(error)
    }
}

resultado = restar(10,5);
esperado = 5;

expected(esperado).toBe(resultado)

function expected(esperado){
    return{
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`)
            }{
                console.log('la prueba paso correctamente!')
            }  
        },
        toEqual(resultado){
            if(resultado === esperado){
                console.error(`El ${resultado} es igual a lo esperado; la prueba no pasó`)
            }{
                console.log('la prueba no  paso correctamente!')
            }  
        }

    }
}