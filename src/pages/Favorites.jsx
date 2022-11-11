import React from 'react'
import { Favorite } from '../components/Favorite';
import { Grid } from '../components/Grid'
import useFetch from '../hooks/useFetch';
import {Loading} from '../components/Loading';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import  Axios  from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';




export const Favorites = () => {
  
  
  const {id:usuarioId} = useContext(AuthContext);
  console.log(usuarioId);
  const ruta = `https://pensiones-backend-production.up.railway.app/favoritos/${usuarioId}`;
  const {isLoading, data, setData} = useFetch(ruta);

  const [browser, setBrowser] = useState("");

  const deleteItem = (id) =>{
    const newData = data.filter((item) => item.Id !== id);

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
  
    setData(newData);
}


  return (
    <div className='container'>
      <h2 className='text-light p-3'>Mis favoritos</h2>
     {/* <form className="d-flex" role="search">
        <input  onChange={(e)=>{setBrowser(e.target.value)}}  className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-light" type="submit">Buscar</button>
      </form> */}
 <Grid md={2}>
      {
          isLoading ?
          <Loading></Loading>
          :
          data.length === 0 ?
          <p className='text-light'>No tiene favoritos </p>
          :
        data.map(({Id,Titulo,Barrio,Imagen,Descripcion,Precio,Direccion,Celular}, index) => (
          

         <Favorite key={index} id={Id} phone={Celular} name={Titulo} price={Precio} img={Imagen} hood={Barrio} adress = {Direccion} description={Descripcion} deleteItem={deleteItem}></Favorite>
    
        )) 
      }

    </Grid>
    
    </div>

  )
}
