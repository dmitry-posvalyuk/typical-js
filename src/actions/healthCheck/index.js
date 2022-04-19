const { getEnv } = require('../../config')

const env = getEnv()

const action = (req, res) => {
  res.send({ status: 'OK', env })
}

module.exports = action
