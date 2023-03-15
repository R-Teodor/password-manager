const express = require('express')
const router = express.Router()
const {
  login,
  register,
  getCurrentUser,
  logout,
  genPassword,
} = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.route('/').get(authMiddleware, getCurrentUser)
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/gen').post(genPassword)

module.exports = router
