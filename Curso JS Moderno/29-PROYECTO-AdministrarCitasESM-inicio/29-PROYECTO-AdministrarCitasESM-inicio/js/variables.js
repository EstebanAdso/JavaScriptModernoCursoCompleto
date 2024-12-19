import { generarId } from "./Funciones.js"

//se hace esto para que tenga de valor false ya que al importarlo suele fallar y lo toma como const
let editando = {
    value: false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}


export{
    editando,
    citaObj
}
