const Vault = require('../models/vault')

const updateVault = async (req, res) => {
  const vault = await Vault.findOneAndUpdate(
    { user: req.user.userId },
    { data: req.body.vault },
    { new: true }
  )

  res.status(200).json({ vault: vault.data })
}

const getVault = async (req, res) => {
  const vault = await Vault.findOne({
    user: req.user.userId,
  })
  if (!vault) {
    return res.status(404).json({ msg: 'no vault' })
  }
  res.status(200).json({ vault: vault.data })
}

module.exports = { updateVault, getVault }
