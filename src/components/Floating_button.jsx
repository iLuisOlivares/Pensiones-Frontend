import React from 'react'
import { NavLink } from 'react-router-dom'


export const Floating_button = () => {
  return (
    <div className="cont-b">
    <input type="checkbox" id="btn-mas"/>
    <div className="redes">
        <NavLink to="/new/property" className="">+</NavLink>
        <NavLink to="/my/properties" className="">admin</NavLink>
    </div>
    <div className="btn-mas">
        <label htmlFor="btn-mas" className="fa fa-plus"><p>prop</p></label>
    </div>
</div>
  )
}
