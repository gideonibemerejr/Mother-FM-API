const express = require('express')
const router = express.Router()
const mixesCtrl = require('../../controllers/api/mixes')

// * Public Routes
router.get('/', mixesCtrl.getMixes)

// ! Protected Routes
// Process the token for only the protected routs

router.use(require('../../config/auth'))
router.get('/:id', mixesCtrl.getOne)
router.get('/archive', mixesCtrl.getAllMixes)
router.post('/', mixesCtrl.create)
router.delete('/', mixesCtrl.deleteMix)
router.put('/', mixesCtrl.update)

module.exports = router
