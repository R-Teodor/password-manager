import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const ProtectedLayout = ({ children }) => {
  // const user = sessionStorage.getItem('username')
  // const cookie = document.cookie
  // const isLoggedIn = Boolean(cookie.split('=')[1])

  const { username, userLoading } = useAppContext()

  if (userLoading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  if (!username) {
    return <Navigate to={'/register'} />
  }
  return children
}
export default ProtectedLayout
