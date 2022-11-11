import React,{useState} from 'react';
import  Axios  from 'axios';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Swal from 'sweetalert2';


export const InformationModal = ({id, idModal, user,name,price,img, hood,adress,description, phone,favoriteButton=true}) => {
    
    const {id:usuarioId} = useContext(AuthContext);
    const [whatsappApi, setWhatsappApi] = useState(`https://wa.me/57${phone}`)

    const addFavorites = () =>{
        Axios.post("https://pensiones-backend-production.up.railway.app/agregar/favorito",{
        usuarioId: usuarioId ,
        pensionId: id,
        }).then((response) =>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
        });
      };
    

  return (
    <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className='d-flex'>
            <div className="img-contenedor ">
                <img src={img} className="p-1 rounded img img-fluid" alt="..."/>
            </div>
            <div className='Information p-3 text-start'>
                <h4>Informacion</h4>
                <b>Precio:</b> 
                <h6>${price}</h6>
                <b>Barrio:</b> 
                <h6>{hood}</h6>
                <b>Direccion:</b> 
                <h6>{adress}</h6>
                <b>Descripcion: </b> 
                <p className='min-width'>{description}</p>              
                </div>

                </div>
    

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
               { favoriteButton && <button type="button" onClick={addFavorites} className="btn btn-info text-light">Agregar a favoritos</button>}
                <a  className="btn btn-success" href={whatsappApi} >Contactar en WhatsApp</a>
            </div>
            </div>
        </div>
    </div>
  )
}
