console.log('Hola')
console.error('error')
console.warn('es un warn')

let tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 4,
        b: 'g'
    }
]
console.table(tabla)

console.group('conver')
console.log('Hola como estas')
console.log('Muy bien y tu?')
console.groupEnd('conver')

