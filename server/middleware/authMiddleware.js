const UnauthorizedAPIError = require('../errors/unauthorized')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  if (!token) throw new UnauthorizedAPIError('Unauthorized')

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnauthorizedAPIError('Unauthorized')
  }
}

module.exports = authMiddleware
