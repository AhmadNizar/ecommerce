const app        = require('express')()
const bodyParser = require('body-parser')
const cors       = require('cors')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//call cors
app.use(cors())

const item = require('./routes/itemsRoute')
const customer = require('./routes/customersRoute')

app.use('/api/item', item)
app.use('/api/customer', customer)


app.listen(3000, () => {
	console.log('jalan port 3000 tong');
})