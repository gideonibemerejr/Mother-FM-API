const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

// * Public Routes
router.get('/', postsCtrl.getPosts)
// router.get('/:id', postsCtrl.getOne)

// ! Protected Routes
// Process the token for only the protected routes
router.use(require('../../config/auth'))
router.post('/', checkAuth, postsCtrl.create)
//router.delete('/', checkAuth, postsCtrl.deleteMix)
//router.put('/', checkAuth, postsCtrl.update)

// ? Helper Function

function checkAuth(req, res, next) {
  if (req.user) return next()
  return res.status(401).json({ msg: 'Not Authorized' })
}
module.exports = router
