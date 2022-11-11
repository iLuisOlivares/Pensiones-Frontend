import React from 'react'
import { NavLink } from 'react-router-dom';

const style = {
    height: '45vh',
    
  };

export const NotFound = () => {
  return (
    <div   className="container text-center p-5">
      <div style={style}>
      <h2 className='text-light'>404 NotFound</h2>    
        <NavLink to="/home" className="btn btn-light m-3">Regresar al inicio</NavLink>
        
      </div>
        
    </div>
  )
}
