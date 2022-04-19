require('dotenv').config()

const { appConfig } = require('./config')
const docs = require('./docs')

const app = require('fastify')(appConfig)

app.register(require('fastify-cors'))
app.register(require('fastify-swagger'), docs)
app.register(require('./router'))

module.exports = app
