var jwt = require('jsonwebtoken')
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
		// name : req.body.name,
    username : req.body.username,
    password : req.body.password,
		// address  : req.body.address,
		// zipcode  : req.body.zipcode,
		// phone    : req.body.phone,
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

const userLogin = (req, res) => {
	Customer.findOne({
		username : req.body.username
	})
	.then(customer => {
		if(customer === null){
			let resp = null
			res.send({resp})
		}else{
			if(customer.password != req.body.password){
				let resp = null
				res.send({resp})
			}else{
				var token = jwt.sign({ id: customer._id, isLogin : true}, 'ahmadnizar')
				console.log(token)
				res.send({token : token, idUser : customer._id, resp : 1 })
			}
		}
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

// const updateOne = (req, res) => {
// 	Customer.update({_id : req.params.id}, {
// 		name : req.body.name,
//     email : req.body.email,
//     password : req.body.password,
// 		address  : req.body.address,
// 		zipcode  : req.body.zipcode,
// 		phone    : req.body.phone,
// 		updatedAt : new Date()
// 	})
// 	.then(customer => {
// 		res.send(customer)
// 	})
// 	.catch(err => {
// 		res.status(500).send(err)
// 	})
// }

// const deleteOne = (req, res) => {
// 	Customer.deleteOne({_id : req.params.id})
// 	.then(customer => {
// 		res.send(customer)
// 	})
// 	.catch(err => {
// 		res.status(500).send(err)
// 	})
// }

module.exports = {
	findAll,
	createOne,
	userLogin
}