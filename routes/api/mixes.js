const express = require('express')
const router = express.Router()
const mixesCtrl = require('../../controllers/api/mixes')

// * Public Routes
router.get('/', mixesCtrl.getMixes)
router.get('/:id', mixesCtrl.getOne)

// ! Protected Routes
// Process the token for only the protected routes

router.use(require('../../config/auth'))
router.get('/archive', mixesCtrl.getAllMixes)
//router.post('/', mixesCtrl.create)
//router.delete('/', mixesCtrl.deleteMix)
//router.put('/', mixesCtrl.update)

module.exports = router
