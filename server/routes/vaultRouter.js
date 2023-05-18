const express = require('express')
const { updateVault, getVault } = require('../controllers/vaultController')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()
const testUser = require('../middleware/testUser')

router
  .route('/')
  .get(authMiddleware, getVault)
  .put(authMiddleware, testUser, updateVault)

module.exports = router
