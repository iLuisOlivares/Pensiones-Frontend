import React from 'react'
import { Grid } from '../components/Grid'
import { Notification } from '../components/Notification'
import useFetch from '../hooks/useFetch';
import {Loading} from '../components/Loading';

export const Notifications = () => {

  const ruta = "https://pensiones-backend-production.up.railway.app/notificaciones";
  const {isLoading, data} = useFetch(ruta);

  return (
    <div className='container-sm'>
      <h2 className='text-light'>Notificaciones</h2>
    <Grid md={1} sm={1}>
    {

        isLoading ?
        <Loading></Loading>
        :
        data.map(({Id,Contenido,Contenido2,Link}, index) => (
       <Notification key={index} id={Id} message={Contenido} message2={Contenido2} link={Link}></Notification>

        ))
      }

    </Grid>

    </div>
   
  )
}
