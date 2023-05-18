import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { websiteParse, websiteStringLogo } from '../utils/websiteStringParser'

const SearchList = () => {
  const [searchInput, setSearchInput] = useState('')
  const { vault, logout } = useAppContext()
  const [vaultState, setVaultState] = useState(vault)

  const handleChange = (args) => {
    const filteredVault = vault.filter((item) => item.website.includes(args))
    setVaultState(filteredVault)
  }
  const debounce = (cb, delay = 500) => {
    let timeout
    return (...args) => {
      setSearchInput(...args)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }
  const optimizedDebounce = useMemo(
    () => debounce((text) => handleChange(text), 500),
    []
  )
  console.log(vault)
  useEffect(() => {
    if (!vault || vault.length == 0) {
      logout()
    }
  }, [vault])

  return (
    <div className='search-container'>
      <div className='search-box'>
        <input
          type='search'
          placeholder='Filter Items'
          value={searchInput}
          onChange={(e) => optimizedDebounce(e.target.value)}
        />
      </div>

      <section className='search-list--container'>
        {vaultState?.map((item, index) => {
          return (
            <VaultItem
              key={index}
              username={item?.username}
              website={item?.website}
              password={item?.password}
              _id={item?._id}
            />
          )
        })}
      </section>
    </div>
  )
}

const VaultItem = ({ username, website, password, _id }) => {
  return (
    <Link to={`/vaultItems/${_id}`} className='vault-link'>
      <div className='item-icon'>{websiteStringLogo(website)}</div>
      <div>
        <h1>{websiteParse(website)} </h1>
        <p>{username} </p>
      </div>
    </Link>
  )
}
export default SearchList
