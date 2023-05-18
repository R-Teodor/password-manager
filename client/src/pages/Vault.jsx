import FormRow from '../components/FormRow'
import { useState } from 'react'
import { decryptVault } from '../crypto'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { v4 as uuidv4 } from 'uuid'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const initialValues = {
  username: '',
  password: '',
  website: '',
  _id: '',
}

const Vault = () => {
  const [formInputs, setFormInputs] = useState(initialValues)

  const { handleUpdateVault } = useAppContext()

  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const encrypted = sessionStorage.getItem('vault')
    const vk = sessionStorage.getItem('vk')
    let decrypted = []
    if (encrypted && vk) {
      decrypted = decryptVault(encrypted, vk) || []
    }
    const finalFormat = {
      ...formInputs,
      _id: uuidv4(),
    }

    const vault = [...decrypted, finalFormat]

    handleUpdateVault(vault)

    setFormInputs(initialValues)
  }

  return (
    <section className='form-container'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <h1>Vault Item</h1>
          <FormRow
            type={'text'}
            name={'username'}
            value={formInputs.username}
            handleChange={handleChange}
          />
          <FormRow
            type={'password'}
            name={'password'}
            value={formInputs.password}
            handleChange={handleChange}
          />
          <FormRow
            type={'text'}
            name={'website'}
            value={formInputs.website}
            handleChange={handleChange}
          />
          <button type='submit' className='form__button'>
            Add
          </button>
        </form>
        <Link to={'/vaultItems'} className='link__record'>
          <div className='link__record-container'>
            <BsFillArrowLeftCircleFill /> Go to records
          </div>
        </Link>
      </div>
    </section>
  )
}
export default Vault
