import { useParams, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { useEffect, useState } from 'react'

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
  }

  useEffect(() => {
    if (!vaultItem) {
      navigate('/vaultItems')
    }
  }, [vaultItem])
  return (
    <div>
      <button onClick={() => setIsReadOnly((prev) => !prev)}>
        {isReadOnly ? 'Edit' : 'Done'}
      </button>
      <h1>VaultItem :{id} </h1>
      <h1>Username : {vaultItem?.username}</h1>
      <input
        type='text'
        value={vaultItemForm.username}
        name='username'
        onChange={handleChange}
        readOnly={isReadOnly}
      />
      <h1>Password : {vaultItem?.password}</h1>
      <input
        type='text'
        value={vaultItemForm.password}
        name='password'
        onChange={handleChange}
        readOnly={isReadOnly}
      />
      <h1>Website : {vaultItem?.website}</h1>
      <input
        type='text'
        value={vaultItemForm.website}
        name='website'
        onChange={handleChange}
        readOnly={isReadOnly}
      />
      <br />
      <button onClick={handleDelete}>Remove Record</button>
      <button onClick={handleFieldUpdate}>Save Changes</button>
      {isLoading && <div>Loading...</div>}
    </div>
  )
}
export default VaultItem
