const CustomAPIError = require('./customError')

class BadRequestAPIError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 400
  }
}

module.exports = BadRequestAPIError
