//WeakSet -> Set debil -> solo se le puede agregar objetos

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakSet.add(cliente)
weakSet.delete(cliente)

console.log(weakSet)