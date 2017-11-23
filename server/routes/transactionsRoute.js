const router = require('express').Router()
const Trans   = require('../controllers/transactionsController')

router.get('/', Trans.findAll)
router.get('/:id', Trans.findById)
router.post('/', Trans.createOne)
// router.put('/:id', Item.updateOne)
// router.delete('/:id', Item.deleteOne)

module.exports = router