import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/styles.css'

export const Header = () => {
  return (
  <div to="/" className=' bg-light'>
  <div className="d-flex justify-content-center">
    <NavLink to="/home" className=' text-decoration-none d-flex  align-items-center flex-column'>
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/house-apartment-logo-blue-png-transparent.png" alt="Logo" width="50" height="54" className="d-inline-block align-text-top"/>
    <a className="navbar-brand "> 
      BR Agency
    </a>
    
    </NavLink>
   
   
  </div>
  <div className='mt-3 mb-5 p-3 d-flex justify-content-around secondary-color text-light'>
    <Link to="/properties" className='nav-link select-h' href=''>Pensiones </Link>
    <Link to="/favorites" className='nav-link select-h' href=''>Favoritos </Link>
    <Link to="/profile" className='nav-link select-h' href=''>Mi perfil </Link>
    <NavLink to="/notifications" className='nav-link select-h' href=''>Notificaciones </NavLink>
    </div>
  </div>
  

  )
}
