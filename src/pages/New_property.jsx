import React, { useState } from 'react'
import  Axios  from 'axios';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { UpdloadComponent } from '../components/UpdloadComponent';

export const New_property = () => {

  const {id:usuarioId} = useContext(AuthContext);
  
  const [ titulo, setTitulo ] = useState("");
  const [ precio, setPrecio ] = useState();
  const [ barrio, setBarrio ] = useState("");
  const [ direccion, setDireccion ] = useState("");
  const [ descripcion, setDescripcion] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  


  const new_property = () =>{

    if(loading ===  true){

      Swal.fire({
        position: 'top-end',
        icon: "error",
        title: "Espere a que se suba la imagen",
        showConfirmButton: false,
        timer: 1500
      })

  
  }else{
  
    Axios.post("https://pensiones-backend-production.up.railway.app/agregar/propiedad",{
      titulo: titulo,
      precio: precio,
      barrio: barrio,
      direccion: direccion,
      descripcion: descripcion,
      usuarioId: usuarioId,
      imagen: images  
    }).then((response) =>{
      Swal.fire({
        position: 'top-end',
        icon: response.data.icon,
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    });

    
  }
  };


  return (
    <div className='container-sm contenedor-login'>
    <h2 className='text-primary'>Publicar inmueble</h2>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Titulo</label>
          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{setTitulo(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="number" className="form-control" id="price" aria-describedby="priceHelp" onChange={(e)=>{setPrecio(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Barrio" className="form-label">Barrio</label>
          <input type="text" className="form-control" id="Barrio" aria-describedby="BarrioHelp" onChange={(e)=>{setBarrio(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="direccion" aria-describedby="direccionHelp" onChange={(e)=>{setDireccion(e.target.value)}}/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripcion</label>
          <input type="text" className="form-control" id="description" onChange={(e)=>{setDescripcion(e.target.value)}}/>
        </div>

        <UpdloadComponent titulo={"Subir imagen"} images={images} setImages={setImages} loading={loading} setLoading={setLoading} ></UpdloadComponent>
      
        <div className='d-flex flex-column text-center'>
        <button onClick={new_property} className="btn btn-primary">Publicar</button>
        </div>

        
  </div>
  )
}
