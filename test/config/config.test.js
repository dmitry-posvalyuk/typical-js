const tap = require('tap')

const { loggerLevel, prod, dev, test, prodLogLevel, devLogLevel, getEnv } = require('../../src/config/config')

tap.test('get logger level for different environments', async t => {
  t.test('for production', t => {
    process.env.NODE_ENV = prod

    t.strictSame(loggerLevel(), prodLogLevel, 'returns production logger config')
    t.end()
  })

  t.test('for testing', t => {
    process.env.NODE_ENV = test

    const logLevel = loggerLevel()

    t.equal(logLevel, false, 'returns testing logger config')
    t.type(logLevel, 'boolean', 'should be boolean')
    t.end()
  })

  t.test('for undefined', t => {
    delete process.env.NODE_ENV

    t.equal(loggerLevel(), devLogLevel, 'returns testing logger config')
    t.end()
  })

  t.test('for development', t => {
    process.env.NODE_ENV = dev

    t.strictSame(loggerLevel(), devLogLevel, 'returns development logger config')
    t.end()
  })
})

tap.test('get current environment variable', async t => {
  t.test('for production', t => {
    process.env.NODE_ENV = prod

    t.strictSame(getEnv(), prod, 'returns production variable')
    t.end()
  })

  t.test('for undefined', t => {
    delete process.env.NODE_ENV

    t.equal(getEnv(), dev, 'returns development variable')
    t.end()
  })
})
