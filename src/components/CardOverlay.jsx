import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardOverlay = ({link, title, text, cantidad, img}) => {
  return (
    <NavLink to={link} className="p-2 m-1 card text-bg-dark">
    <img src={img} className="card-img card-img-style oscurecer-img" alt="..."/>
    <div className="card-img-overlay text-light text-start">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
    </NavLink>
  )
}
