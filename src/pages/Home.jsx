import React from 'react';
import { NavLink } from 'react-router-dom'
import { CardOverlay } from '../components/CardOverlay'
import { Carousel } from '../components/Carousel'
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';


export const Home = () => {

  const navigate = useNavigate();
  const {handleAuth} = useContext(AuthContext);
  
  Axios.defaults.withCredentials = true;


  return (
    <div className='container'>



      <Carousel></Carousel>

      <h3 className='m-3 pt-5 text-light text-center'>¿Que tipo de inmueble estas buscando?</h3>
      
    

       <div className='col'>
        <NavLink to="/properties">
        <CardOverlay img={"https://www.hotelcasasanagustin.com/img/cartagena_4.png"} title={"Las mejores pensiones"}  link={"/properties"} text={"Las mejores pensiones de Cartagena con todos los servicios incluidos"} cantidad={4}></CardOverlay>
        </NavLink>
      
        </div> 
       <div className='col'>
       <NavLink to="/properties">
        <CardOverlay img={"https://colombiarents.com/wp-content/uploads/2015/08/apartamentos-venta-cartagena-1.jpg"} link={"/properties"}  title={"Contactalos facilmente"} text={"Comunicacion directa con los dueños, contactalos desde whatsapp o llamalos directamente!!"} cantidad={3}></CardOverlay>
        </NavLink>
        </div> 
       <div className='col'>
       <NavLink to="/properties">
        <CardOverlay img={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/335990803.jpg?k=ee5e675bd47930242909fd39431a1f79aa1a044a74c5af3fbe09eb62456516e8&o=&hp=1"} link={"/new/property"}  title={"Publica tus pensiones"} text={"Compartenos tus pensiones para llegar a toda Cartagena"} cantidad={2}></CardOverlay>
        </NavLink>
        </div> 
       <div className='col'>
        <NavLink to="/properties">
        <CardOverlay img={"https://lp-cms-production.imgix.net/features/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg"} link={"/my/properties"}  title={"Tus pensiones"} text={"Edita o elimina tus pensiones en esta seccion"} cantidad={2}></CardOverlay>
        </NavLink>
        </div> 



    </div>
  )
}
