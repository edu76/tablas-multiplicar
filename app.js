const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar.js'); // despues de un const o leg y vienen llaves quiere decir que es una destructuracion

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}




//let argv2 = process.argv;

//console.log('limite', argv.limite); //el argv de yargs
//console.log(argv2); // el argv que recibimos de los procesos 
// let parametro = argv[2]; // y que los arreglos en JS empiezan en base cero 
// let base = parametro.split('=')[1] //con el split separo elemento y convierto de un strin a un arreglo