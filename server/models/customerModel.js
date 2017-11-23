const mongoose = require('mongoose')
mongoose.connect('mongodb://AhmadNizar:I66ZGyBvjhwMHt1R@ahmadnizardb-shard-00-00-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-01-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-02-scdlc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=AhmadNizarDB-shard-0&authSource=admin')

const Schema   = mongoose.Schema

var customerSchema = new Schema({
	name     : String,
  username    : String,
  password : String,
	address  : String,
	zipcode  : String,
	phone    : {
		type : String,
		minlength : 6
  },
  role : String,
	createdAt: Date,
	updatedAt: Date
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer