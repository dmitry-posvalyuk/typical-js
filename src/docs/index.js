const { version } = require('../../package')

const config = {
  routePrefix: '/',
  openapi: {
    info: {
      title: 'typicalJS',
      description: 'Generic NodeJS boilerplate app',
      version
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  exposeRoute: true
}

module.exports = config
