import React, {useState} from 'react'

import { InformationModal } from './InformationModal'

export const Favorite = ({id,name,price,img, hood,adress,description, phone, deleteItem}) => {
    const [idModal, setidModal] = useState( `Modal-${id}`);


  return (
    <div className="col"> 
            <div className="card mb-3 cardstyle" >
        <div className="row g-0">
            <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start img" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <div className='d-flex'>
                    <div className='flex-grow-1'>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Precio: {price}</p>
                    <p className='className="card-text">Precio: {price}'>Barrio: {hood} </p>
                    </div>
                <div className='d-flex flex-column'>
                <button type="button" className="p-2 m-1 btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
                +
                </button>
                <button onClick={()=>deleteItem(id)} className="p-2 m-1  btn btn-danger">
                    Del
                </button>
                </div>
                </div>
                <InformationModal  id={id} idModal={idModal} phone={phone} name={name} price={price} img={img} hood={hood} adress = {adress} description={description} favoriteButton={false}></InformationModal>

            </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}
