const asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    }, 1000)
}

asincrona((err, dato) => {
    if (err) {
        console.error('Tenemos un error', err)
        return false
    }
    console.log('Todo está bien, el dato es:', dato)
})