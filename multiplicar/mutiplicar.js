//requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => { //ecmas6 nos permite incluir el limite aqui por defecto en los parametros

    console.log('==================='.green);
    console.log(`Tabla de ${ base } `.green);
    console.log('==================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`) // El  contrapleka N (\n) es para salto de linea.

    }
}

//funcion que regreee una promesa creando una funcion llamada crear archivo 
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => { //asi establezco una promesa basica

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`); //ejecuta la funcion y sigue corriendo el codigo por eso un return luego 
            return; // en caso de error se me devuelve y no continua
        }

        let data = ''; // en el cuerpo de lal promesa tengo tod ala logic de la creaciond el archivo, tabla de multiplicar 

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i}\n`); // El  contrapleka N (\n) es para salto de linea.
        }

        fs.writeFile(`tablas/tabla-${ base }-al -${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }-al-${ limite }.txt`); //que espera el nombre del archivo 

        });

    });
}


module.exports = { // aca puedo agregar los elementos que deseo utilzar de forma global
    crearArchivo, //objeto que le voy a añadir mas funciones y que me regresa la promesa 
    listarTabla
}