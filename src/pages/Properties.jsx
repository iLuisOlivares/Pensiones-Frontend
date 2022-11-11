import React from 'react'
import { Grid } from '../components/Grid';
import { Property } from '../components/Property';
import useFetch from '../hooks/useFetch';
import {Loading} from '../components/Loading'

export const Properties = () => {

  const ruta = "https://pensiones-backend-production.up.railway.app/propiedades";
  const {isLoading, data} = useFetch(ruta);


  return (
<div className='container'>
  <h2 className='text-light p-3'>Pensiones</h2>
   <Grid md={3} sm={2}>
    
      {

              isLoading ?
            <Loading/>
              :
        data.map(({Id,Titulo,Barrio,Imagen,Descripcion,Precio,Direccion,Nombre,Celular}, index) => (
       <Property key={index} id={Id} user={Nombre} phone={Celular} name={Titulo} price={Precio} img={Imagen} hood={Barrio} adress = {Direccion} description={Descripcion}></Property>

        ))
      }

    </Grid>
    </div>
  )
}
