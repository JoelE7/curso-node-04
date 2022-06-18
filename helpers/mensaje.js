const colors = require("colors");

//Esto es una prueba de lo que sería la app, sin usar inquirer u otros paquetes
//Seria demasiado quilombo hacer una app de consola así de compleja
//cuando ya hay paquetes que nos ayudan a crear estás de manera mucho más sencilla
//es una prueba para que te hagas idea de lo complejo que puede ser hacer una app así
//en resumen, no inventes la rueda otra vez
const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log(colors.green("========================="));
    console.log(colors.green("  Seleccione una opción  "));
    console.log(colors.green("=========================\n"));

    console.log(`${`1`.green}. Crear una tarea`);
    console.log(`${`2`.green}. Listar tareas`);
    console.log(`${`3`.green}. Listar tareas completadas`);
    console.log(`${`4`.green}. Listar tareas pendientes`);
    console.log(`${`5`.green}. Completar tarea(s)`);
    console.log(`${`6`.green}. Borrar tarea`);
    console.log(`${`0`.green}. Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin, // este pausa la interface y le pide al usuario que ingrese un dato
      //(es obligatorio el input)
      output: process.stdout, // este le muestra un mensaje al usuario informativo que pongamos
    });

    //el primer parametro es la pregunta o información que le daremos al usuario
    //y el 2do parametro es un callback que se ejecutara cuando termine la funcion
    //el callback recibe como parametro lo que el usuario ingreso(no es obligatorio que sea opt)
    readLine.question("Seleccione una opción: ", (opt) => {
      // console.log(opt); //esto es lo que ingreso el usuario
      //readline.close() cierra la espera del usuario una vez que ingreso el dato
      //si no estuviera este entraria en un ciclo infinito esperando respuesta
      //del usuario sin importar cuantas veces ingresemos un dato
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
    return new Promise(resolve =>{
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          readLine.question(`\nPresione ${`ENTER`.green} para continuar\n`, () => {
            readLine.close();
            resolve();
          });
    })


};

module.exports = {
  mostrarMenu: mostrarMenu,
  pausa: pausa,
};
