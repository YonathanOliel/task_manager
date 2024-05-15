const mongoose = require('mongoose')

const startConnection = (url) => {
    return mongoose.connect(url)
}

module.exports = startConnection