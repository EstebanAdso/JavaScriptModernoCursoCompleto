//Try catch -> try se ejecuta si no hay errores, catch se ejecuta si hay errores

console.log(1 + 1);

try {
    autenticarUsuario();
} catch (error) {  
    console.log(error);
}

console.log(2 + 2);