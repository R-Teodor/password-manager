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
  TEST,
  UPDATE_VAULT_BEGIN,
  UPDATE_VAULT_SUCCESS,
  UPDATE_VAULT_ERROR,
  LOGOUT,
} from './actions'
import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      username: action.payload.username,
      vault: action.payload.vault,
      salt: action.payload.salt,
      vaultKey: action.payload.vaultKey,
      alertType: 'success',
      alertText: 'Logged in Succesfully',
      showAlert: true,
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: 'danger',
      alertText: action.payload.msg,
      showAlert: true,
    }
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      username: action.payload.username,
      vault: action.payload.vault,
      vaultKey: action.payload.vaultKey,
      salt: action.payload.salt,
      alertType: 'success',
      alertText: 'Registered Succesfully',
      showAlert: true,
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: 'danger',
      alertText: action.payload.msg,
      showAlert: true,
    }
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return {
      ...state,
      userLoading: true,
    }
  }
  if (action.type === GET_CURRENT_USER_SUCCES) {
    return {
      ...state,
      userLoading: false,
      username: action.payload.username,
      email: action.payload.email,
      alertType: 'success',
      alertText: '',
      showAlert: false,
    }
  }
  if (action.type === GET_CURRENT_USER_ERROR) {
    return {
      ...initialState,
      userLoading: false,
      vault: null,
    }
  }
  if (action.type === UPDATE_VAULT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === UPDATE_VAULT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertType: 'success',
      alertText: 'Good vault',
      vault: action.payload.vault,
    }
  }
  if (action.type === UPDATE_VAULT_ERROR) {
    return {
      ...initialState,
      userLoading: false,
      isLoading: false,
      alertType: 'danger',
      alertText: 'Not good vault',
    }
  }
  if (action.type === LOGOUT) {
    return {
      ...initialState,
      userLoading: false,
      vault: null,
    }
  }

  if (action.type === TEST) {
    return {
      ...state,
      testInput: action.payload.testInput,
    }
  }

  throw new Error('This action type does not exist')
}

export default reducer
