import { AppContext } from './appContext'
import { useReducer, useEffect } from 'react'
import reducer from './reducer'
import axios from 'axios'
import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_ERROR,
  UPDATE_VAULT_BEGIN,
  UPDATE_VAULT_SUCCESS,
  UPDATE_VAULT_ERROR,
  LOGOUT,
  TEST,
} from './actions'
import { GET_CURRENT_USER_URL, LOGIN_URL, REGISTER_URL } from '../api/apiURLs'
import {
  decryptVault,
  generateVaultKey,
  handleErrorVault,
  encryptVault,
} from '../crypto'

const initialState = {
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
  //
  testInput: null,
}

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post(LOGIN_URL, currentUser)
      const { username, vault, salt } = data
      // TODO: refactor duplicating code
      const vaultKey = generateVaultKey(
        currentUser.email,
        salt,
        currentUser.password
      )
      sessionStorage.setItem('vk', vaultKey)
      sessionStorage.setItem('vault', vault)
      // sessionStorage.setItem('username', username)

      const decryptedVault = decryptVault(vault, vaultKey)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { username, vault: decryptedVault, salt, vaultKey },
      })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const { data } = await axios.post(REGISTER_URL, currentUser)
      const { username, vault, salt } = data
      // TODO: refactor duplicating code
      const vaultKey = generateVaultKey(
        currentUser.email,
        salt,
        currentUser.password
      )
      sessionStorage.setItem('vk', vaultKey)
      sessionStorage.setItem('vault', vault)
      // sessionStorage.setItem('username', username)

      const decryptedVault = decryptVault(vault, vaultKey)
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { username, vault: decryptedVault, salt, vaultKey },
      })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN })
    try {
      const { data } = await axios.get(GET_CURRENT_USER_URL)
      const { username, email } = data.user
      dispatch({ type: GET_CURRENT_USER_SUCCES, payload: { username, email } })
    } catch (error) {
      dispatch({ type: GET_CURRENT_USER_ERROR })
      if (error.response.status === 401) return
    }
  }

  const handleUpdateVault = async (vault) => {
    dispatch({ type: UPDATE_VAULT_BEGIN })

    try {
      const vk = sessionStorage.getItem('vk')
      if (!vk) {
        await logout()
      }
      const encrypted = encryptVault(JSON.stringify(vault), vk)
      const { data } = await axios.put('/api/v1/vault', {
        vault: encrypted.toString(),
      })
      sessionStorage.setItem('vault', data.vault)
      const decrypted = decryptVault(data.vault, vk)
      dispatch({ type: UPDATE_VAULT_SUCCESS, payload: { vault: decrypted } })
      // return decrypted
    } catch (error) {
      dispatch({ type: UPDATE_VAULT_ERROR, payload: error.response.data })
      if (error && error.response && error.response.status === 401) {
        logout()
      }
    }
  }

  async function logout() {
    const { data } = await axios.get('/api/v1/auth/logout')
    sessionStorage.clear()
    dispatch({ type: LOGOUT })
  }

  const getRandomPassword = async (config) => {
    const { data } = await axios.post('/api/v1/auth/gen', config)

    return data.password
  }

  const testInputHandler = (testInput) => {
    dispatch({ type: TEST, payload: { testInput } })
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
        testInputHandler,
        handleUpdateVault,
        getRandomPassword,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
