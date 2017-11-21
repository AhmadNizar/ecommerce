const router = require('express').Router()
const Item   = require('../controllers/itemsController')

router.get('/', Item.findAll)
router.post('/', Item.createOne)
router.put('/:id', Item.updateOne)
router.delete('/:id', Item.deleteOne)

module.exports = router