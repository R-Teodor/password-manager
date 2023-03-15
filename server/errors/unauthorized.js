const CustomAPIError = require('./customError')

class UnauthorizedAPIError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = 401
  }
}

module.exports = UnauthorizedAPIError
