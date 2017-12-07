const app        = require('express')()
const bodyParser = require('body-parser')
const cors       = require('cors')
const mongoose   = require('mongoose')
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://AhmadNizar:cBnmgEXaknFbpUNN@ahmadnizardb-shard-00-00-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-01-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-02-scdlc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=AhmadNizarDB-shard-0&authSource=admin', (err) => {
  if(!err) {
    console.log('DATABASE TERHUBUNG');
  } else {
    console.log('TIDAK TERHUBUNG DATABASE');
  }
})

const item = require('./routes/itemsRoute')
const customer = require('./routes/customersRoute')
const trans = require('./routes/transactionsRoute')

app.use('/item', item)
app.use('/customer', customer)
app.use('/transaction', trans)

app.listen((process.env.PORT || '3000'), () => {
	console.log('jalan port 3000 tong');
})