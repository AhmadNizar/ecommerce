const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var itemSchema = new Schema({
	item_name : String,
	item_price : String,
	category : String,
	stock : Number,
	createdAt : Date,
	updatedAt : Date
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item