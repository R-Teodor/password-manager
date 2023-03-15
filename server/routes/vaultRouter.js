const express = require('express')
const { updateVault, getVault } = require('../controllers/vaultController')
const router = express.Router()

router.route('/').get(getVault).put(updateVault)

module.exports = router
