import React from 'react'
import { Grid } from '../components/Grid'
import { MyPropertyCard } from '../components/MyPropertyCard';
import useFetch from '../hooks/useFetch';
import {Loading} from '../components/Loading';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import  Axios  from 'axios';
import { NavLink } from 'react-router-dom';


export const My_properties = () => {
  
  
    const {id:usuarioId} = useContext(AuthContext);
    const ruta = `https://pensiones-backend-production.up.railway.app/propiedades/${usuarioId}`
    const {isLoading, data, setData } = useFetch(ruta);

    const deleteItem = (id) =>{
      const newData = data.filter((item) => item.Id !== id);
  
      Axios.post("https://pensiones-backend-production.up.railway.app/eliminar/propiedad",{
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
      <h2 className='text-light px-3 '>Mis propiedades</h2>
      <p className='fst-italic px-3'>Maneja tus propiedades</p>
      <NavLink to="/new/property" className='btn btn-secondary m-3'>Nueva propiedad</NavLink>

    <Grid  md={3}>
        {
            isLoading ?
            <Loading></Loading>
            :
            data.length === 0 ?
            <p>No tiene pensiones </p>
            :
            data.map(({Id,Titulo,Precio,Imagen},index)=>(
           <MyPropertyCard key={index} id={Id} title={Titulo} price={Precio} img={Imagen} deleteItem={deleteItem}></MyPropertyCard>
            ))
        }
    </Grid>
    </div>
  )
}
