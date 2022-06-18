const fs = require('fs');

//esta es la ruta donde guardaremos en nuestro simulador de db que en este caso es un json
const archivo = './database/data.json';

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {
    
    //verificamos que el archivo existe, ya que si no existe lanza un error
    //si no existe retorna un null y termina la funcion
    if( !fs.existsSync(archivo) ){
        return null;
    }
    
    //una vez llegado a este punto si es que lo hizo, quiere decir que existe un data.json
    //en el directorio nuestro, entonces lo que hacemos es leer ese archivo y con un encoding utf 8
    //para luego el contenido de ese json pasarlo a un nivel legible 
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}



module.exports = {
    guardarDB,
    leerDB
}