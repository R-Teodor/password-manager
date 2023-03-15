const oneDay = 1000 * 60 * 60
// const oneDay = 1000 * 60
const attachCookies = ({ res, token }) => {
  res.cookie('token', token, {
    expires: new Date(Date.now() + oneDay),
    httpOnly: true,
  })
}

module.exports = attachCookies
