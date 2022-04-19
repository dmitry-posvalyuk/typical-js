const schema = {
  description: 'Check if system works',
  tags: ['Health Check'],
  responses: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'OK' },
        env: { type: 'string', example: 'development' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
