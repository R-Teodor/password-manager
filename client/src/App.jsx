import './App.css'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import GridMenuComponent from './components/GridMenuComponent'
import Vault from './pages/Vault'
import PasswordGeneratorPage from './pages/PasswordGeneratorPage'
import SettingsPage from './pages/SettingsPage'
import ProtectedLayout from './components/ProtectedLayout'
import SearchList from './pages/SearchList'
import VaultItem from './components/VaultItem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedLayout>
              <DashboardLayout />
            </ProtectedLayout>
          }
        >
          <Route index element={<GridMenuComponent />} />
          <Route path='/vault' element={<Vault />} />
          <Route path='/gen' element={<PasswordGeneratorPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/vaultItems' element={<SearchList />} />
          <Route path='/vaultItems/:id' element={<VaultItem />} />
        </Route>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
