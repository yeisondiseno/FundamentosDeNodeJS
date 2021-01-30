const fs = require('fs');

const leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString())
    })
} 

// leer(__dirname + '/archivo.txt')

const escribir = (ruta, cont, cb) => {
    fs.writeFile(ruta, cont, (err) => {
        if ( err ) {
            console.error('No pudimos escribirlo, err')
        } else {
            console.log('Se ha escrito correctamente')
        }
    })
} 

// escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log('es un console'))

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log())