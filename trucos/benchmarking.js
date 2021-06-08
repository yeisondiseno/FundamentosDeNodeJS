let sum = 0

console.time('bucle')
for (let i = 0; i < 10000000; i++) {
    sum += 1
}
console.timeEnd('bucle')

console.time('Asincrono')
const asincrona = () => {
    return new Promise( (resolve) => {
        setTimeout(( ) => {
            console.log('Termina el proceso')
            resolve()
        })
    } )
}
asincrona()
    .then(() =>{
        console.timeEnd('Asincrono')
    } )