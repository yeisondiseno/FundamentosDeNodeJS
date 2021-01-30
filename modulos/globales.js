// esto te pasa las funciones globales
// console.log(global);

// eesto es muy bueno para verificar si los servidores están caidos
let i = 1;
let intervale = setInterval(() => {
    console.log('Hola');
    if ( i === 5 ) {
        clearInterval(intervale);
    }
    i++
}, 1000);

setImmediate( () => {
    console.log('Hola 2')
})