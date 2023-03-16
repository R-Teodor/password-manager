import { useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const websiteParse = (websiteURL) => {
  let url = websiteURL
  if (url.startsWith('http://')) url = url.slice(7)
  if (url.startsWith('https://')) url = url.slice(8)
  if (url.includes('/')) {
    const endOfUrl = url.indexOf('/')
    url = url.slice(0, endOfUrl)
  }
  return url
}

const SearchList = () => {
  const navigate = useNavigate()
  const { vault } = useAppContext()

  return (
    <section className='search-list--container'>
      <div className='search-box'>
        <input type='search' placeholder='Filter Items' />
      </div>
      {vault?.map((item, index) => {
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
  )
}

const VaultItem = ({ username, website, password, _id }) => {
  return (
    <Link to={`/vaultItems/${_id}`} className='vault-link'>
      <div className='item-icon'>L</div>
      <div>
        <h1>{websiteParse(website)} </h1>
        <p>{username} </p>
        {/* <p>PASSWORD: {password} </p> */}
        {/* <p>ID: {_id}</p> */}
      </div>

      {/* <hr /> */}
    </Link>
  )
}
export default SearchList
