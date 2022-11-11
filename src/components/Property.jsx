import React, {useState} from 'react'
import { InformationModal } from './InformationModal'

export const Property = ({id, user,name,price,img, hood,adress,description, phone}) => {

    const [idModal, setidModal] = useState( `Modal-${id}`);
    
  return (
    <div className="col"> 
        <div className="card m-2" >
          <div className='img-container'>
          <img src={img} className="card-img-top card-img-style" alt="..."/>
          </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
                Mas informacion
                </button>
                <InformationModal  id={id} idModal={idModal} user={user} phone={phone} name={name} price={price} img={img} hood={hood} adress = {adress} description={description}></InformationModal>

            </div>
        </div>
    </div>
  )
}
