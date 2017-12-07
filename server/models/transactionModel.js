const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var transactionSchema = new Schema({
	member : {
		type: Schema.Types.ObjectId,
		ref : 'Customer'
	},
	list : [{
    _id : {
      type: Schema.Types.ObjectId, 
      ref: 'Item'
    },
    itemqty : Number,
    subtotal : Number
  }],
  total : Number
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction