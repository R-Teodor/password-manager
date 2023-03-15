import { createContext, useContext } from 'react'
import { handleErrorVault } from '../crypto'

export const AppContext = createContext(null)

export const useAppContext = () => {
  return useContext(AppContext)
}

export const initialState = {
  username: null,
  userLoading: true,
  email: '',
  isLoading: false,
  alertText: '',
  alertType: '',
  showAlert: false,
  //
  vault: handleErrorVault(),
  vaultKey: '',
  salt: '',
}
