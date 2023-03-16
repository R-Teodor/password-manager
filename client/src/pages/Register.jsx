import { useState, useEffect } from 'react'

import { LOGIN_URL, REGISTER_URL } from '../api/apiURLs'
import { hashPassword } from '../crypto'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const initialValues = {
  username: '',
  email: '',
  password: '',
}

const Register = () => {
  const [formInputs, setFormInputs] = useState(initialValues)
  const [register, setRegister] = useState(false)
  const [togglePassword, setTogglePassword] = useState(false)

  const navigate = useNavigate()
  const { username, email, loginUser, registerUser } = useAppContext()

  const handleFormChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let url = register ? REGISTER_URL : LOGIN_URL
    try {
      const hashedPassword = hashPassword(formInputs.password)
      const formData = {
        ...formInputs,
        password: hashedPassword,
      }
      // const { data } = await axios.post(url, formData)
      if (url === LOGIN_URL) {
        loginUser(formData)
      }
      if (url === REGISTER_URL) {
        registerUser(formData)
      }
      // navigate('/')

      // const vaultKey = generateVaultKey(
      //   formData.email,
      //   data.salt,
      //   formData.password
      // )
      // sessionStorage.setItem('vk', vaultKey)
      // sessionStorage.setItem('vault', data.vault)
      // sessionStorage.setItem('username', data.username)

      // localStorage.setItem('vk', vaultKey)
      // localStorage.setItem('vault', data.vault)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (username) {
      navigate('/')
    }
  }, [username])

  return (
    <section className='register-container'>
      {/* {username && <Navigate to={'/vaultItems'} />} */}

      <form onSubmit={onSubmit}>
        <h1>{register ? 'Register' : 'Login'}</h1>
        {register && (
          <fieldset>
            <input
              type='text'
              id='username'
              name='username'
              value={formInputs.username}
              onChange={handleFormChange}
              required
            />
            <label htmlFor='username'>username</label>
          </fieldset>
        )}
        <fieldset>
          <input
            type='text'
            id='email'
            name='email'
            value={formInputs.email}
            onChange={handleFormChange}
            required
          />
          <label htmlFor='email'>email</label>
        </fieldset>
        <fieldset>
          <input
            type={togglePassword ? 'text' : 'password'}
            id='password'
            name='password'
            value={formInputs.password}
            onChange={handleFormChange}
            required
          />
          <label htmlFor='password'>password</label>
        </fieldset>
        <button type='submit' className='btn'>
          Submit
        </button>

        <a onClick={() => setRegister(!register)}>
          {register ? 'login' : 'register'}
        </a>
      </form>
    </section>
  )
}
export default Register
