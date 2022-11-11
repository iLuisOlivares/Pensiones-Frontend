import { NavLink } from 'react-router-dom'
import React from 'react'

export const Pre_Login = () => {
  return (
    <div className='p-4 container-sm contenedor-login height d-flex justify-content-center flex-column text-center'>
      <div className='logo '>
        <img src="logo.png" alt="Logo" width="250" height="144" className="d-inline-block align-text-top"/>
        <a className="navbar-brand" href=""> 
         <h3> BR Agency </h3>
        </a>
      </div>

      <div className='p-5'>
        <div className='text-primary'>
          <h5>SI LO BUSCAS, LO ENCUENTRAS</h5>
          <h6>EN EL LUGAR QUE DESEAS</h6>

        </div>
        <div className='p-5 buttons d-flex flex-column'>
        <NavLink to="/login" className='m-2 btn btn-primary'>Iniciar sesión</NavLink>
        <NavLink to="/register" className='m-2 btn btn-outline-secondary'>Crear Cuenta</NavLink>
        </div>


      </div>
     
     </div> 
  )
}
