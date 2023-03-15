import axios from 'axios'
import { decryptVault, encryptVault } from '../crypto'

export const updateVault = async (vault) => {
  //   const encryptedVault = sessionStorage.getItem('vault')
  const vk = sessionStorage.getItem('vk')
  const encrypted = encryptVault(JSON.stringify(vault), vk)
  try {
    const { data } = await axios.put('/api/v1/vault', {
      vault: encrypted.toString(),
    })
    console.log('Data object', data)
    console.log('Data.Vault object', data.vault)
    sessionStorage.setItem('vault', data.vault)
    const decrypted = decryptVault(data.vault, vk)
    return decrypted
  } catch (error) {
    if (error.response.status === 401) {
      sessionStorage.clear()
      return null
    }
    console.log(error)
  }
}

export const logout = async () => {
  const { data } = await axios.get('/api/v1/auth/logout')
  console.log(data)
}
