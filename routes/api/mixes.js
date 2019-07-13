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
router.post('/', checkAuth, mixesCtrl.create)
//router.delete('/', checkAuth, mixesCtrl.deleteMix)
//router.put('/', checkAuth, mixesCtrl.update)

// ? Helper Function

function checkAuth(req, res, next) {
  if (req.user) return next()
  return res.status(401).json({ msg: 'Not Authorized' })
}
module.exports = router
