import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/styles.css'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export const Header = () => {

  const {handleAuth} = useContext(AuthContext);


  const logout = () =>{
    const options = {method: 'GET'};

  fetch('https://pensiones-backend-production.up.railway.app/logout', options)
  .then(response => response.json())
  .then(response => {
    handleAuth();
  })
  .catch(err => console.error(err));
  }

  return (
  <div to="/" className=' bg-light'>
  <div className="d-flex justify-content-center">
    <div>
      <NavLink to="/home" className=' text-decoration-none d-flex  align-items-center flex-column'>
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/04/house-apartment-logo-blue-png-transparent.png" alt="Logo" width="50" height="54" className="d-inline-block align-text-top"/>
    <a className="navbar-brand "> 
      BR Agency
    </a>
    </NavLink>

    <button onClick={logout} className='btn m-3 text-dark'>
      cerrar sesion
    </button>

    </div>
    
    
 
  </div>
  <div className='mb-5 p-3 d-flex justify-content-around secondary-color text-light'>
    <Link to="/properties" className='nav-link select-h' href=''>Pensiones </Link>
    <Link to="/favorites" className='nav-link select-h' href=''>Favoritos </Link>
    <Link to="/profile" className='nav-link select-h' href=''>Mi perfil </Link>
    <NavLink to="/notifications" className='nav-link select-h' href=''>Notificaciones </NavLink>
    </div>
  </div>
  

  )
}
