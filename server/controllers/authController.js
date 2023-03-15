const BadRequestAPIError = require('../errors/badRequest')
const UnauthorizedAPIError = require('../errors/unauthorized')
const { genSalt, randomPasswordGen } = require('../crypto')
const User = require('../models/user')
const Vault = require('../models/vault')
const attachCookies = require('../utils/attachCookies')

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestAPIError('Please provide all fields')
  }
  const user = await User.findOne({ email })

  if (!user) {
    throw new UnauthorizedAPIError('Invalid credentials')
  }

  const isMatch = await user.comparePassword(password)

  if (!isMatch) {
    throw new UnauthorizedAPIError('Invalid credentials')
  }

  const token = user.createJWT()

  const vault = await Vault.findOne({ user: user._id })

  attachCookies({ res, token })

  const oneDay = 1000 * 60 * 60
  res.cookie('isLogged', true, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: false,
  })

  res.status(200).json({
    username: user.username,
    token,
    vault: vault.data,
    salt: vault.salt,
  })
}

const register = async (req, res) => {
  const { email, password, username } = req.body
  if (!email || !password || !username) {
    throw new BadRequestAPIError('Please provide all fields')
  }
  const user = await User.create({ email, password, username })

  const salt = genSalt()

  const vault = await Vault.create({ user: user._id, salt })
  const accessToken = user.createJWT()

  attachCookies({ res, token: accessToken })
  const oneDay = 1000 * 60 * 60
  res.cookie('isLogged', true, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: false,
  })

  res.status(201).json({
    username: user.username,
    accessToken,
    vault: vault.data,
    salt,
  })
}

const logout = async (req, res) => {
  res.clearCookie('token')
  res.clearCookie('isLogged')
  res.end()
}

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId }).select('-password')
  if (!user) throw new UnauthorizedAPIError('unaothorized')
  res.status(200).json({ user })
}

const genPassword = (req, res) => {
  const { length, config } = req.body
  // if (!length || !config) {
  //   throw new BadRequestAPIError('Missing fields')
  // }
  const pass = randomPasswordGen(length, config)
  res.status(200).json({ password: pass })
}

module.exports = {
  login,
  register,
  getCurrentUser,
  logout,
  genPassword,
}
