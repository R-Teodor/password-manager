import { useParams, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { useEffect, useState } from 'react'
import { websiteParse } from '../utils/websiteStringParser'
import { FaRegEdit } from 'react-icons/fa'

const VaultItem = () => {
  const [isReadOnly, setIsReadOnly] = useState(true)
  const navigate = useNavigate()
  let { id } = useParams()
  const { vault, handleUpdateVault, isLoading } = useAppContext()
  const vaultItem = vault.find((item) => item._id === id)
  const [vaultItemForm, setVaultItemForm] = useState({
    username: vaultItem?.username || '',
    password: vaultItem?.password || '',
    website: vaultItem?.website || '',
  })

  const url = websiteParse(vaultItem?.website) || 'PlaceHolder'

  const handleDelete = async () => {
    const newVault = vault.filter((item) => item._id != vaultItem._id)
    handleUpdateVault(newVault)
  }

  const handleChange = (e) => {
    setVaultItemForm({
      ...vaultItemForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleFieldUpdate = async () => {
    const updatedVault = [...vault]
    let itemIndex = updatedVault.findIndex((item) => item._id === id)
    const updatedItem = {
      ...updatedVault[itemIndex],
      ...vaultItemForm,
    }
    updatedVault[itemIndex] = updatedItem

    handleUpdateVault(updatedVault)
    setTimeout(() => navigate('/vaultItems'), 2000)
  }

  useEffect(() => {
    if (!vaultItem) {
      navigate('/vaultItems')
    }
  }, [vaultItem])

  return (
    <section className='form-container'>
      <div className='form-box'>
        <form>
          <h1>{url}</h1>
          <button
            onClick={() => setIsReadOnly((prev) => !prev)}
            type='button'
            className='form__button-edit'
          >
            <div>
              {isReadOnly ? 'Edit' : 'Done'}

              <FaRegEdit size={18} />
            </div>
          </button>

          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={vaultItemForm.username}
              name='username'
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Password</label>
            <input
              type='text'
              value={vaultItemForm.password}
              name='password'
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Website</label>
            <input
              type='text'
              value={vaultItemForm.website}
              name='website'
              onChange={handleChange}
              readOnly={isReadOnly}
            />
          </div>

          <button
            onClick={handleFieldUpdate}
            className='form__button'
            type='button'
          >
            Save Changes
          </button>
          <button onClick={handleDelete} className='form__button' type='button'>
            Remove Record
          </button>
          {isLoading && <div>Loading...</div>}
        </form>
      </div>
    </section>
  )
}
export default VaultItem
