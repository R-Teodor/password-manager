import Wrapper from '../styles/components/DashboardLayout'
import { CiVault, CiSettings } from 'react-icons/ci'
import { MdOutlinePassword } from 'react-icons/md'
import { FaBuffer, FaSignOutAlt } from 'react-icons/fa'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const DashboardLayout = () => {
  const location = useLocation()

  let hidden = location.pathname === '/'
  const { logout } = useAppContext()

  // useEffect(() => {
  //   const onClickOutside = (e) => {
  //     //   console.log(e.target)
  //     if (e.target.closest('#dropdown-menu') !== dropdownRef.current) {
  //       setDisplayDropdown(false)
  //     }
  //   }
  //   window.addEventListener('click', onClickOutside)

  //   return () => {
  //     window.removeEventListener('click', onClickOutside)
  //   }
  // }, [])
  return (
    <Wrapper isDisplayed={hidden}>
      <div className='header'>
        <Link to={'/'}>
          <div className='logo-container'>
            <div className='logo'>
              <img src='/security-svgrepo-com.svg' alt='' />
            </div>
            <p>KeyVault</p>
          </div>
        </Link>
      </div>

      <aside>
        <ul>
          <li>
            <Link to={'/vault'}>
              <CiVault className='icon' /> Vault
            </Link>
          </li>
          <li>
            <Link to={'/gen'}>
              <MdOutlinePassword className='icon' /> PassGenerator
            </Link>
          </li>
          <li>
            <Link to={'/settings'}>
              <CiSettings className='icon' /> Settings
            </Link>
          </li>
          <li>
            <Link to={'/vaultItems'}>
              <FaBuffer className='icon' /> Vault Items
            </Link>
          </li>
          <li>
            <Link onClick={logout}>
              <FaSignOutAlt className='icon' />
              Logout
            </Link>
          </li>
        </ul>
      </aside>

      <div className='content-window'>
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default DashboardLayout
