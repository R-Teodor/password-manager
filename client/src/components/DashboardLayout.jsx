import { CiVault, CiSettings } from 'react-icons/ci'
import { MdOutlinePassword } from 'react-icons/md'
import { FaBuffer, FaSignOutAlt } from 'react-icons/fa'
import { BiError } from 'react-icons/bi'
import { GrValidate } from 'react-icons/gr'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import '../styles/dashboard.css'

const DashboardLayout = () => {
  const location = useLocation()

  let hidden = location.pathname === '/'
  const { logout, showAlert, alertType, alertText } = useAppContext()

  return (
    <section className='main-container'>
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

      <aside className={hidden ? 'hidden' : 'block'}>
        <ul>
          <li>
            <NavLink
              to={'/vault'}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#646cff' : '',
                  fontWeight: isActive ? 'bold' : '',
                }
              }}
            >
              <CiVault className='icon' /> Vault
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/gen'}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#646cff' : '',
                  fontWeight: isActive ? 'bold' : '',
                }
              }}
            >
              <MdOutlinePassword className='icon' /> PassGenerator
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/settings'}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#646cff' : '',
                  fontWeight: isActive ? 'bold' : '',
                }
              }}
            >
              <CiSettings className='icon' /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/vaultItems'}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#646cff' : '',
                  fontWeight: isActive ? 'bold' : '',
                }
              }}
            >
              <FaBuffer className='icon' /> Vault Items
            </NavLink>
          </li>
          <li>
            <NavLink onClick={logout}>
              <FaSignOutAlt className='icon' />
              Logout
            </NavLink>
          </li>
        </ul>
      </aside>

      <div className={hidden ? 'm-0' : 'm-25'}>
        <Outlet />
      </div>

      {showAlert && (
        <div className={`alert ${alertType}`}>
          {alertType == 'danger' ? (
            <BiError size={24} />
          ) : (
            <GrValidate size={24} />
          )}
          <div>{alertText}</div>
        </div>
      )}
    </section>
  )
}
export default DashboardLayout
