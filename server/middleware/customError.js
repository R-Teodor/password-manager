const CustomErrorAPI = require('../errors/customError')

const customError = (err, req, res, next) => {
  let msg = 'You fucked boy'
  let statusCode = 400
  if (err.message) {
    msg = err.message || msg
    statusCode = err.statusCode || statusCode
  }

  res.status(statusCode).json({ msg: msg })
}
module.exports = customError
