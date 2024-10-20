import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { persistor } from '../app/store/store';
import { persistor } from '../main';
import { setLogin } from "../app/details";



const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const login=useSelector(state=>state.detailsData.login)



  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    dispatch(setLogin(false))
    persistor.purge().then(() => {
      navigate('/'); 
      window.location.reload(false); 
    });
  }


  return (
    <header className="fixed top-0 w-full h-32 bg-custom-hover  z-40">
      <div className="container mx-auto px-4 flex items-center h-full gap-2">
        <Link to='/'>
          <img src={logo} alt="logo" width={120} />
        </Link>
        {login?
        (<button onClick={handleLogout}>LogOut</button>)
        :
        (<Link to={'/login'} className='px-1 text-white hover:text-neutral-100'>Log In</Link>)}
        
      </div>
    </header>
  )

}

export default Header