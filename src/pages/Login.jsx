import  Axios  from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import Swal from 'sweetalert2'

export const Login = () => {

  
  const [ emailLog, setEmailLog ] = useState("");
  const [ passwordLog, setPasswordLog ] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {handleAuth} = useContext(AuthContext);

  const login = (e) =>{
    e.preventDefault();
    setLoading(true)
    Axios.post("https://pensiones-backend-production.up.railway.app/login",{
      correo: emailLog,
      contra: passwordLog,
    }).then((response) =>{
      setLoading(false);
        if(response.data.message){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data.message,
          })
        }else{
          Swal.fire({
            icon: 'success',
            title: 'Has iniciado sesión!',
            text: response.data.message,
          })
          handleAuth(response.data[0].Id);
          navigate("/home");
        }


    });
  };
  

  return (
    <div className='container-sm contenedor-login'>
       
       <NavLink to="/">
        <button type="button" className="btn-close" aria-label="Close"/>
        </NavLink>

      <h2 className='text-primary'>Iniciar sesión</h2>

      <form>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input required type="email" onChange={(e)=>{setEmailLog(e.target.value)}} className="form-control" id="email"  aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input required type="password" onChange={(e)=>{setPasswordLog(e.target.value)}} className="form-control" id="password"/>
      </div>

      <div className='d-flex flex-column text-center'>
      <button onClick={login} className="btn btn-primary">Iniciar sesión</button>
      </div>

      {loading && <p className='text-center m-1 text-primary'>Comprobando tus datos...</p>}

      </form>
    

      <div className='text-center pt-5'>
      <NavLink to="/register" className='text-decoration-none'>No tienes cuenta? Registrate</NavLink>
      </div>
      
      </div>
    
  )
}
