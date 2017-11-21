const Item   = require('../models/itemModel')

const findAll = (req, res) => {
	Item.find()
	.then(items => res.send(items))
	.catch(err => res.send(err))
}

const createOne = (req, res) => {
	Item.create({
    item_name : req.body.item_name,
    item_price : parseInt(req.body.item_price),
    category : req.body.category,
    stock : parseInt(req.body.stock),
		createdAt : new Date(),
		updatedAt : new Date()
  })
  .then(item => res.send(item))
  .catch(err => res.status(500).send(err))
}

const updateOne = (req, res) => {
	Item.update({_id : req.params.id}, {
		item_name : req.body.item_name,
    item_price : req.body.item_price,
    category : req.body.category,
		stock : parseInt(req.body.stock),
		updatedAt : new Date()
  })
  .then(item => res.send(item))
  .catch(err => res.status(500).send(err))
}

const deleteOne = (req, res) => {
  Item.deleteOne({_id : req.params.id})
  .then(item => res.send(item))
  .catch(err => res.status(500).send(err))
}

module.exports = {
	findAll,
	createOne,
	updateOne,
	deleteOne
}