const Transaction   = require('../models/transactionModel')

const findAll = (req, res) => {
	Transaction.find()
	.populate('list._id')
	// .exec()
	.then(transactions => {
		res.send(transactions)
	})
	.catch(err => {
		res.send(err)
	})
}

const createOne = (req, res) => {
	console.log(req.body)
	Transaction.create({
		member : req.body.userId,
    list : req.body.list,
    total : req.body.total
	})
	.then(transaction =>{
		console.log(transaction)
		res.send(transaction)
	})
	.catch(err => {
		console.log(err)
		res.send(err)
	})
}

const findById = (req, res) => {
	console.log(req.params)
	Transaction.find({
		member : req.params.id
	})
	.populate('list._id')
	.then(transaction => res.send(transaction))
	.catch(err => res.status(500).send(err))
}

// const updateOne = (req, res) => {
// 	Transaction.findById(req.params.id)
// 	.then(transaction => {
// 		transaction.days = parseInt(req.body.days),
// 		transaction.in_date = new Date(req.body.in_date)
// 		transaction.due_date.setDate(transaction.due_date.getDate() + transaction.days);
// 		let fine = Math.floor(( transaction.in_date - transaction.due_date ) / 86400000)
// 		transaction.fine = fine*2000

// 		transaction.save()
// 		.then(resultUpdateTransaction => {
// 			res.send(resultUpdateTransaction)
// 		})
// 		.catch(err => {
// 			res.send(err)
// 		})
// 	})
// }

// const deleteOne = (req, res) => {
// 	Transaction.deleteOne({_id : req.params.id})
// 	.then(transaction => {
// 		res.send(transaction)
// 	})
// 	.catch(err => {
// 		res.send(err)
// 	})
// }

module.exports = {
	findAll,
	createOne,
	findById
}