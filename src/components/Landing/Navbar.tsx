import { useNavigate } from 'react-router-dom'
// import { useTheme } from '../ThemeProvider'
// import ThemeSelector from '../ThemeSelector'
// import logo from '../../assets/gt-logo.svg'

function Navbar() {
  const navigate = useNavigate()
  // const { theme } = useTheme()
  
  return (
    <div className='flex bg-surface-800 items-center justify-between p-[15px_20px] lg:p-[15px_40px] border-b border-surface-700'>
        <div className="flex items-center space-x-4">
          {/* <img src={logo} className='h-[50px]' alt="Hospital Logo" /> */}
          <div className="hidden lg:block">
            <h1 className="text-white text-lg font-semibold">Rapha Medical</h1>
            <p className="text-surface-300 text-sm">Healthcare Management System</p>
          </div>
        </div>
        <div className='flex items-center space-x-[15px]'>
          {/* <ThemeSelector /> */}
          <button 
            onClick={()=> navigate('/login')} 
            className='border border-primary text-white hover:bg-primary hover:border-primary p-[8px_30px] text-[14px] rounded-[10px] transition-colors'
          >
            Log In
          </button>
          <button 
            onClick={()=> navigate('/register')} 
            className='bg-primary hover:bg-primary-700 text-white shadow p-[9px_25px] text-[14px] rounded-[10px] transition-colors'
          >
            Get Started
          </button>
        </div>
    </div>
  )
}

export default Navbar