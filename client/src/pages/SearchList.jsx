import { useNavigate, Link } from 'react-router-dom'

import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/components/SearchList'

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
    <Wrapper>
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
    </Wrapper>
  )
}

const VaultItem = ({ username, website, password, _id }) => {
  return (
    <div className='container'>
      <Link to={`/vaultItems/${_id}`}>
        <div className='item-icon'>L</div>
        <div>
          <h1>{websiteParse(website)} </h1>
          <p>{username} </p>
          {/* <p>PASSWORD: {password} </p> */}
          {/* <p>ID: {_id}</p> */}
        </div>

        {/* <hr /> */}
      </Link>
    </div>
  )
}
export default SearchList
