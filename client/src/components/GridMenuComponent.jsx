import Wrapper from '../styles/components/GridMenuContainer'
import { Link } from 'react-router-dom'
const GridMenuComponent = () => {
  return (
    <Wrapper>
      <div className='grid'>
        <UtilityCard
          name={'Vault'}
          icon={'/box-package-shipping-svgrepo-com.svg'}
          description={'Setup the vault'}
          location={'/vault'}
        />
        <UtilityCard
          name={'Settings'}
          icon={'/setting-configuration-gear-svgrepo-com.svg'}
          description={'Account,security and preferences'}
          location={'/settings'}
        />
        <UtilityCard
          name={'Password'}
          icon={'/script-coding-programming-svgrepo-com.svg'}
          description={'Generate secure passwords'}
          location={'/gen'}
        />
        <UtilityCard
          name={'Search'}
          icon={'/find-data-find-file-find-information-svgrepo-com.svg'}
          description={'Search the list of vaults'}
          location={'/vaultItems'}
        />
      </div>
    </Wrapper>
  )
}

function UtilityCard({ name, icon, description, location }) {
  return (
    <Link className='utility-card' to={location}>
      <div className='icon-container'>
        <img src={icon} alt='' className='icon' />
      </div>
      <div className='description'>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </Link>
  )
}
export default GridMenuComponent
