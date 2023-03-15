import { SHA256, PBKDF2, AES, enc } from 'crypto-js'

export const hashPassword = (pass) => {
  const hashedPass = SHA256(pass).toString()
  return hashedPass
}

export const generateVaultKey = (email, salt, hashedPassword) => {
  const pass = `${email}:${hashedPassword}`
  return PBKDF2(pass, salt, { keySize: 32 }).toString()
}

export const encryptVault = (data, key) => {
  const encrypted = AES.encrypt(data, key)
  return encrypted
}
export const decryptVault = (chiper, key) => {
  const bytes = AES.decrypt(chiper, key)
  const decrypted = bytes.toString(enc.Utf8)

  try {
    return JSON.parse(decrypted)
  } catch (error) {
    return null
  }
}

export function handleErrorVault() {
  try {
    const vk = sessionStorage.getItem('vk')
    const vault = sessionStorage.getItem('vault')
    const decrypted = decryptVault(vault, vk)
    return decrypted
  } catch (error) {
    return []
  }
}
