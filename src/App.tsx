
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Login from './pages/login'
// import Layout from './layout'
// import Overview from './pages/private/overview'
// import Appointment from './pages/private/appointment'
// import Patient from './pages/private/patient'
// import Staff from './pages/private/staff'
import Landing from './pages/landing'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      {/* <Route path='/dashboard' element={<Layout/>}>
      <Route path='' element={<Overview/>} />
      <Route path='appointment' element={<Appointment/>} />
      <Route path='patients' element={<Patient/>} />
      <Route path='staff' element={<Staff/>} />
      </Route> */}
    </Routes>
  )
}

export default App
