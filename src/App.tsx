
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Login from './pages/login'
import Layout from './layout'
import Overview from './pages/private/overview'
import Appointment from './pages/private/appointment'
import Patient from './pages/private/patient'
import Staff from './pages/private/staff'
import Landing from './pages/landing'
import Register from './pages/register'
import Settings from './pages/private/settings'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Layout/>}>
      <Route path='' element={<Overview/>} />
      <Route path='appointment' element={<Appointment/>} />
      <Route path='patients' element={<Patient/>} />
      <Route path='staff' element={<Staff/>} />
      <Route path='settings' element={<Settings/>} />
      </Route>
    </Routes>
  )
}

export default App
