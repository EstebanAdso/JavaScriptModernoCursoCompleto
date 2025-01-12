import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', () =>{

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () =>{
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '32432432',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'solo duerme'
        };
        citas.agregarCita(citaObj);

        //prueba que se guarde en spanshop correctamente el objeto
        expect(citas).toMatchSnapshot();
    });

    test('actualizar cita',  () =>{
        const citaActualizada = {
            id,
            mascota: 'Hook2',
            propietario: 'Juan2',
            telefono: '3343243',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'solo duerme y no come'
        };

        citas.editarCita(citaActualizada)

        //Actualizando cita
        expect(citas).toMatchSnapshot();
    })

    test('eliminar cita', () =>{
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot
    })
})