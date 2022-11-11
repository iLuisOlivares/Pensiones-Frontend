import React from 'react'
import { NavLink } from 'react-router-dom'

export const MyPropertyCard = ({id,img, title, deleteItem}) => {
  return (
    <div className='col'>
    <div className="card my-3" >
        <img src={img} className="card-img-top card-img-style" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className='d-flex justify-content-center'>
            <NavLink to={`/update/property/${id}`} className="btn m-2 btn-primary">Editar</NavLink>
            <button onClick={()=>deleteItem(id)} className="btn m-2 btn-danger">Eliminar</button>
            </div>
        </div>
    </div>
    </div>

  )
}
