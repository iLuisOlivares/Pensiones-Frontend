import  Axios  from 'axios';
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const Register = () => {

  const [ usernameReg, setUsernameReg ] = useState("");
  const [ emailReg, setEmailReg ] = useState("");
  const [ phoneReg, setPhoneReg ] = useState("");
  const [ passwordReg, setPasswordReg ] = useState("");

  const register = () =>{
    Axios.post("https://pensiones-backend-production.up.railway.app/register",{
      nombre: usernameReg,
      correo: emailReg,
      celular: phoneReg,
      contra: passwordReg,
    }).then((response) =>{
      if(response.data.message){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.message,
        })
      }else if(response.data.err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.err.message,
        })
      }
      else{
        Swal.fire(
          'Bien!',
          'Usuario creado!',
          'success'
        )
      }
    });
  };


  return (
    <div className='container-sm contenedor-login'>
        <NavLink to="/">
        <button type="button" class="btn-close" aria-label="Close"/>
        </NavLink>

    <h2 className='text-primary'>Registrarse</h2>

  <div className="mb-3">
      <label htmlFor="name" className="form-label">Nombre</label>
      <input required type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input required type="email" className="form-control" id="email" aria-describedby="emailHelp"  onChange={(e)=>{setEmailReg(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Celular</label>
      <input required type="phone" className="form-control" id="phone" aria-describedby="phoneHelp"  onChange={(e)=>{setPhoneReg(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Contraseña</label>
      <input required type="password" className="form-control" id="password" autoComplete="on"  onChange={(e)=>{setPasswordReg(e.target.value)}}/>
    </div>
  
    <div className='d-flex flex-column text-center'>
    <button onClick={register}  className="btn btn-primary">Registrarse</button>
    </div>

    <div className='text-center pt-5'>
    <NavLink to="/login" className='text-decoration-none'>Ya tienes cuenta? Inicia sesión</NavLink>
    </div>
    
  </div>
  
  )
}
