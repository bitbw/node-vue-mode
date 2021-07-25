const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Category = new Schema({
    name: { type: String },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
},{
    autoIndex:true,
    id:true
})

module.exports = mongoose.model('Category', Category)