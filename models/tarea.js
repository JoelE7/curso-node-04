//requerimos el paquete de uudiv4
const { v4: uudiv4 } = require('uuid');

class Tarea {
    
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {
        //uudiv4 lo que hace es crear un id aleatorio 
        //para usarlo necesitamos instalar el paquete de uuid =  npm i uuid
        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;

    }

}



module.exports = Tarea;
