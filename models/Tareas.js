const Tarea = require('./tarea');

class Tareas {

    _listado = {
        'abc': 123
    };


    get listadoArr() {

        const listado = [];
        //La clase Object en js trae un metodo keys(array) y este devuelve cada key
        //que identifica cada posicion del array pasado
        //con el metodo forEach lo que hacemos es agarrar cada key que se retorna
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }


    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ) {

        //si el id es valido o existe borra el elemento
        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray( tareas = [] ) {
        //recorrer el array y cada objeto que va recorriendo se guarda en la variable
        //tarea y con este jugamos en cada iteraccion, cargamos cada tarea que tenga 
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    crearTarea( desc = '' ) {
        //agregamos una tarea
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        
        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            //con este listamos todas las tareas, validando y poniendo si están completadas
            //o pendientes
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                //si el usuario completa la tarea, se guarda la fecha en la que completo
                //toISOString retorna la fecha en un string
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }

}



module.exports = Tareas;
