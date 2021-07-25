module.exports = (app) => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/node-vue-mode-admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}