const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')
readableStream.on('data', (chunk) => {
    data += chunk
})

readableStream.on('end', () => {
    // console.log('Data', data)
})

process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')


const Transform = stream.Transform
const Uppercase = () => {
    Transform.call(this)
}
util.inherits(Uppercase, Transform)

Uppercase.prototype._transform = (chunk, codif, callBack) => {
    chunkUpper = chunk.toString().toUpperCase()
    this.push(chunkUpper)
    callBack()
}

let upper = new Uppercase()
readableStream
    .pipe(upper)
    .pipe(process.stdout)