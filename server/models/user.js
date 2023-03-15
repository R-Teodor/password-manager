const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxLength: 24,
    // required:[true,'Please provide username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 8,
  },
})

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const hashed = await argon2.hash(this.password)
  this.password = hashed
})

userSchema.methods.createJWT = function () {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
  return token
}

userSchema.methods.comparePassword = async function (password) {
  const isMatch = await argon2.verify(this.password, password)
  return isMatch
}

module.exports = mongoose.model('User', userSchema)
