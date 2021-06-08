const bcrypt = require('bcrypt')

const password = '124Segura!AA'

bcrypt.hash(password, 5, (err, hash) => {
    console.log('Es el hash', hash) 
    bcrypt.compare(password, hash, (err, res) => {
        console.log(err)
        console.log(res)
    } )
})