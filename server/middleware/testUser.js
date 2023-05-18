const BadRequestAPIError = require('../errors/badRequest')

const testUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestAPIError('Test User. Read Only')
  next()
}

module.exports = testUser
