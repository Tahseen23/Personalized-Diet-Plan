import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const location=useLocation()

  return (
    <main>
      {(location.pathname!=='/login' && location.pathname!=='/signup') && <Header/>}
        <Outlet></Outlet>
    </main>
 
  )
}

export default App
