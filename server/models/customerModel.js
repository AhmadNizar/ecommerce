const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce');
const Schema   = mongoose.Schema

var customerSchema = new Schema({
	name     : String,
  email    : String,
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