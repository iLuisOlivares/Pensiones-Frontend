import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
  <footer className="py-3 mt-4 footer bg-light">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><NavLink to="/home" className="nav-link px-2 text-muted">Inmuebles</NavLink></li>
      <li className="nav-item"><NavLink to="/favorites" className="nav-link px-2 text-muted">Favoritos</NavLink></li>
      <li className="nav-item"><NavLink to="/profile" className="nav-link px-2 text-muted">Perfil </NavLink></li>
      <li className="nav-item"><NavLink to="/notifications" className="nav-link px-2 text-muted">Notificaciones </NavLink></li>
    </ul>
    
    <p className="text-center text-muted">© 2022 BR Agency</p>
  </footer>
  )
}
