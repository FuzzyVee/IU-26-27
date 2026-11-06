/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
    }

    data_test_class() {
        const result = super.data_test_class();
        this.entidad.dom.mostrarVentanaResultadosTests();
        return result;
    }

}