const Customer   = require('../models/customerModel')

const findAll = (req, res) => {
	Customer.find()
	.then(customers => {
		res.send(customers)
	})
	.catch(err => {
		res.send(err)
	})
}

const createOne = (req, res) => {
	Customer.create({
		name : req.body.name,
    email : req.body.email,
    password : req.body.password,
		address  : req.body.address,
		zipcode  : req.body.zipcode,
		phone    : req.body.phone,
		createdAt : new Date(),
		updatedAt : new Date()
	})
	.then(customer =>{
		res.send(customer)
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

const updateOne = (req, res) => {
	Customer.update({_id : req.params.id}, {
		name : req.body.name,
    email : req.body.email,
    password : req.body.password,
		address  : req.body.address,
		zipcode  : req.body.zipcode,
		phone    : req.body.phone,
		updatedAt : new Date()
	})
	.then(customer => {
		res.send(customer)
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

const deleteOne = (req, res) => {
	Customer.deleteOne({_id : req.params.id})
	.then(customer => {
		res.send(customer)
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

module.exports = {
	findAll,
	createOne,
	updateOne,
	deleteOne
}