const UnauthorizedAPIError = require('../errors/unauthorized')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  if (!token) throw new UnauthorizedAPIError('Unauthorized')

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userId === process.env.TEST_USER_ID
    req.user = { userId: payload.userId, testUser }
    next()
  } catch (error) {
    throw new UnauthorizedAPIError('Unauthorized')
  }
}

module.exports = authMiddleware
