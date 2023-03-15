const CustomAPIError = require('./customError')

class NotFoundAPIError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 404
  }
}

module.exports = NotFoundAPIError
