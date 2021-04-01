const os = require('os')

console.log(os.arch())
console.log(os.platform())
console.log(os.cpus())
console.log(os.cpus().length)
console.log(os.constants)
console.log(os.freemem())

let size = 1024
const kb = (bytes) => bytes / size 
const mb = (bytes) => kb(bytes) / size 
const gb = (bytes) => mb(bytes) / size 

console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))
console.log(gb(os.totalmem()))

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())
