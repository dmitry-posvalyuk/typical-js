const prod = 'production'
const test = 'testing'
const dev = 'development'
const isProd = process.env.NODE_ENV === prod
const isTest = process.env.NODE_ENV === test

const MAX_BODY_SIZE = 1024 * 1024 * 4

const prodLogLevel = { level: 'warn' }
const devLogLevel = { level: 'info', prettyPrint: true }

const getEnv = () => process.env.NODE_ENV || dev

const loggerLevel = () => {
  switch (getEnv()) {
    case prod:
      return prodLogLevel
    case dev:
      return devLogLevel
    case test:
    default:
      return false
  }
}

const appConfig = {
  logger: loggerLevel(),
  bodyLimit: MAX_BODY_SIZE,
  ajv: {
    customOptions: {
      coerceTypes: 'array'
    }
  }
}

module.exports = {
  prod,
  test,
  dev,
  isProd,
  isTest,
  getEnv,
  appConfig,
  loggerLevel,
  prodLogLevel,
  devLogLevel
}
