const mongoose = require('mongoose')
mongoose.connect('mongodb://AhmadNizar:I66ZGyBvjhwMHt1R@ahmadnizardb-shard-00-00-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-01-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-02-scdlc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=AhmadNizarDB-shard-0&authSource=admin')
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