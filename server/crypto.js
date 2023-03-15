const crypto = require('crypto')

const charsets = {
  NUMBERS: '0123456789',
  LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
  UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  SYMBOLS: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
}
const internalConfig = {
  numbers: true,
  lower: true,
  upper: true,
  symbols: true,
}
const standardLength = 24

const randomPasswordGen = (
  length = standardLength,
  config = internalConfig
) => {
  let pwsL = length
  const { numbers, lower, upper, symbols } = config

  let password = ''
  let charset = ''

  if (numbers) charset += charsets.NUMBERS
  if (lower) charset += charsets.LOWERCASE
  if (upper) charset += charsets.UPPERCASE
  if (symbols) charset += charsets.SYMBOLS

  while (pwsL > 0) {
    let char = charset[crypto.randomInt(charset.length)]
    password += char
    pwsL--
  }
  return password
}

const genSalt = () => {
  return crypto.randomBytes(64).toString('hex')
}

const genPassword = () => {
  const charset =
    charsets.NUMBERS +
    charsets.LOWERCASE +
    charsets.UPPERCASE +
    charsets.SYMBOLS
  let pwsL = 24
  let password = ''
  while (pwsL > 0) {
    let char = charset[crypto.randomInt(charset.length)]
    password += char
    pwsL--
  }
  return password
}

module.exports = {
  genSalt,
  genPassword,
  randomPasswordGen,
}
