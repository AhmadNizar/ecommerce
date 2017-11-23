const mongoose = require('mongoose')
mongoose.connect('mongodb://AhmadNizar:I66ZGyBvjhwMHt1R@ahmadnizardb-shard-00-00-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-01-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-02-scdlc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=AhmadNizarDB-shard-0&authSource=admin')
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