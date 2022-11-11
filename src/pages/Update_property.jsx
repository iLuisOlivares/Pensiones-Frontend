import React, { useState } from 'react'
import  Axios  from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { UpdloadComponent } from '../components/UpdloadComponent';

export const Update_property = () => {

  
  const params = useParams();


  const ruta = `https://pensiones-backend-production.up.railway.app/propiedad/${params.id}`;
  const [ titulo, setTitulo ] = useState("");
  const [ precio, setPrecio ] = useState();
  const [ barrio, setBarrio ] = useState("");
  const [ direccion, setDireccion] = useState("");
  const [ descripcion, setDescripcion] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const loadData = async () => {
        const result = await fetch(ruta)
            .then(response => response.json())
            .then(datos => datos)
        setTitulo(result[0].Titulo);
        setPrecio(result[0].Precio);
        setBarrio(result[0].Barrio);
        setDescripcion(result[0].Descripcion);
        setDireccion(result[0].Direccion);
        setImages(result[0].Imagen);
            }
    loadData();

}, []);

  const Update_property = () =>{
    if(loading ===  true){

      Swal.fire({
        position: 'top-end',
        icon: "error",
        title: "Espere a que se suba la imagen",
        showConfirmButton: false,
        timer: 1500
      })

  
  }else{
    Axios.put("https://pensiones-backend-production.up.railway.app/actualizar/propiedad",{
      titulo: titulo,
      precio: precio,
      barrio: barrio,
      direccion: direccion,
      descripcion: descripcion,
      imagen: images,
      id: params.id
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
          <input type="text" defaultValue={titulo} className="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{setTitulo(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="number" defaultValue={precio} className="form-control" id="price" aria-describedby="priceHelp" onChange={(e)=>{setPrecio(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Barrio" className="form-label">Barrio</label>
          <input type="text" defaultValue={barrio} className="form-control" id="Barrio" aria-describedby="BarrioHelp" onChange={(e)=>{setBarrio(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Direccion</label>
          <input type="text" defaultValue={direccion} className="form-control" id="direccion" aria-describedby="direccionHelp" onChange={(e)=>{setDireccion(e.target.value)}}/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripcion</label>
          <input type="text" defaultValue={descripcion} className="form-control" id="description" onChange={(e)=>{setDescripcion(e.target.value)}}/>
        </div>

        <UpdloadComponent titulo={"Subir imagen"} images={images} setImages={setImages} loading={loading} setLoading={setLoading} ></UpdloadComponent>
      
        <div className='d-flex flex-column text-center'>
        <button onClick={Update_property} className="btn btn-primary">Publicar</button>
        </div>

        
  </div>
  )
}
