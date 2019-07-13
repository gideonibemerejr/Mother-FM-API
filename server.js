// const subdomain = require('express-subdomain')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const subdomain = require('express-subdomain')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const mixesRouter = require('./routes/api/mixes')
const usersRouter = require('./routes/api/users')
const indexRouter = require('./routes/index')

const app = express()

require('dotenv').config()
require('./config/db')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

/*-------------------------
    # Routes for the API
--------------------------*/

//app.use(subdomain('api', mixesRouter))
app.use('/api/users', usersRouter)
app.use('/', indexRouter)
// app.use(require('./config/auth'))
app.use('/api/mixes', mixesRouter)

const port = process.env.PORT || 3001

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})
