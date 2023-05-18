const express = require('express')
const { updateVault, getVault } = require('../controllers/vaultController')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').get(authMiddleware, getVault).put(authMiddleware, updateVault)

module.exports = router
