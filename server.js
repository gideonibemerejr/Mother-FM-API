// const subdomain = require('express-subdomain')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const mixesRouter = require('./routes/api/mixes')
const usersRouter = require('./routes/api/users')

const app = express()

require('dotenv').config()
require('./config/db')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

/*-------------------------
    # Routes for the API
--------------------------*/

//app.use(subdomain('api'))
app.use('/api/mixes', mixesRouter)
app.use('/api/users', usersRouter)

module.exports = app
