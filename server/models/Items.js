const {Schema, model} = require('mongoose')

const Items = new Schema({
    name: {type: String, required:true},
    itemDescription: {type: String, required:true},
    itemPrice: {type: Number, required:true},
    itemCategory: {type: Number, required:true},
    itemImgId: {type: Number, required:true},
    itemSize: [
        {size : {type: String} }
    ]
})

module.exports = model('Items', Items)