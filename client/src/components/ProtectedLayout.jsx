import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import '../styles/loader.css'

const ProtectedLayout = ({ children }) => {
  const { username, userLoading } = useAppContext()

  if (userLoading) return <span class='loader'></span>
  if (!username) {
    sessionStorage.clear()
    return <Navigate to={'/register'} />
  }

  return children
}
export default ProtectedLayout
