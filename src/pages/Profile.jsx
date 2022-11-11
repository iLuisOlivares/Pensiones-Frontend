import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export const Profile = () => {


  const {id} = useContext(AuthContext);
  
  const ruta = `https://pensiones-backend-production.up.railway.app/perfil/${id}`;
  const [isLoading, setIsLoading] = useState(true);
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      const loadData = async () => {
          const result = await fetch(ruta)
              .then(response => response.json())
              .then(datos => datos)
          setIsLoading(false);
          setUsername(result.user.Nombre);
          setEmail(result.user.Correo);
          setPhone(result.user.Celular);
          setImages(result.user.Foto)
              }
      loadData();

  }, []);

  
  const updloadImage = async(e) =>{
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pensionesApp") ;
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/iluiss/image/upload",{
        method: "POST",
        body: data,

    })
    const file = await res.json();
    console.log(res);
    console.log(file);
    setImages(file.secure_url);
    setLoading(false);
}

  
  const updateProfile = () =>{

    Axios.put("https://pensiones-backend-production.up.railway.app/actualizar/perfil",{
      nombre: username,
      correo: email,
      celular: phone,
      foto: images,
      usuarioId: id
      }).then((response) =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      });
  
}

  return (
    <div className='container-sm contenedor-login '>
     { loading  ? (<h6 className='img-profile'>Cargando imagen...</h6>) : ( <img src={images} className="img-profile img-thumbnail" alt="..."></img>)}

    <h2 className='text-primary'>Mi Perfil</h2>

    {
    

      <div>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" defaultValue={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" id="name" aria-describedby="nameHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Celular</label>
          <input type="phone" defaultValue={phone} onChange={(e)=>setPhone(e.target.value)}  className="form-control" id="phone" aria-describedby="phoneHelp"/>
        </div>

        <div className="mb-3 ">
          <label htmlFor="image" className="form-label">Subir foro de perfil</label>
          <input onChange={updloadImage} type="file"   accept="image/png, image/jpeg" className="form-control" id="image" aria-describedby="phoneHelp"/>  
        </div>
    

        <div className='d-flex flex-column text-center'>
        <button type="submit" onClick={updateProfile} className="btn btn-primary">Actualizar</button>
        </div>
        
      </div>

    }
    
  </div>
  
  )
}
