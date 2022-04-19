const { name } = require('./package.json')

module.exports = {
  apps: [
    {
      name: name,
      script: './src/index.js',
      watch: false,
      instances: 'max',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
