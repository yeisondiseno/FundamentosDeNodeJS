const { exec, spawn } = require('child_process');


///  ejecuciones en segundo plano
// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if ( err ) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('dir') 

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function (dato) {
    console.log( 'Está muerto??', proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', function () {
    console.log('El proceso terminó')
    console.log( 'Está muerto??', proceso.killed)
})