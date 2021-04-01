// const process = require('process') esto ya está en Node




process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    console.log('El proceso acabó')
    setTimeout(()=> {
        console.log('Esto no se va a ejecutar')
    }, 0)
})


process.on('uncaughtException', (err, origin) => {
    console.log('Este es un error no capturado')
    console.error(err, origin)
    setTimeout(()=> {
        console.log('Esto viene de las exepciones')
    }, 0)
})

// process.on('uncaughtRegetion', () => {
    
// })

funcionQueNoExiste()

console.log('Esto si el error no se recoge no sale')