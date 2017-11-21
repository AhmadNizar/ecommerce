const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce');
const Schema   = mongoose.Schema

var transactionSchema = new Schema({
	member : {
		type: Schema.Types.ObjectId,
		ref : 'Customer'
	},
	list : [{
    itemDetail : {
      type: Schema.Types.ObjectId, 
      ref: 'Book'
    },
    itemqty : Integer,
    subTotal   : Integer
  }],
  total : Integer
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction