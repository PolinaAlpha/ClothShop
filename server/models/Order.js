const {Schema, model} = require('mongoose')

const Order = new Schema({
    itemsList: [],
    userAdress: {type: String, required: true},
    itemSummary: {type: Number, required: true},
})

module.exports = model('Order', Order)