const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const usersCtrl = require('../../controllers/api/users')

// * Public Routes

router.post('/signup', usersCtrl.signup)
router.post('/signup', usersCtrl.login)

module.exports = router
