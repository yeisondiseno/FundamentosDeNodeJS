const sharp = require('sharp')

sharp('original.jpg')
    .resize(160)
    .grayscale()
    .toFile('resized.png')