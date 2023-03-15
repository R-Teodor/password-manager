const mongoose = require('mongoose')

const vaultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  data: {
    type: String,
    default: '',
  },
  salt: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('Vault', vaultSchema)
