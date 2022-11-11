import React from 'react'

export const UpdloadComponent = ({titulo, images, setImages, loading, setLoading}) => {
  
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
  return (
    <div className="mb-3 ">
    <label htmlFor="image" className="form-label">{titulo}</label>
    <input onChange={updloadImage} type="file"   accept="image/png, image/jpeg" className="form-control" id="image" aria-describedby="phoneHelp"/>
    {loading  ? (<h3>Cargando imagen...</h3>) : (<div className='d-flex flex-column align-items-center'> <img src={images} className="p-2 img-fluid" style={{width: "300px"}} ></img> </div>)}
     </div>
  )
}
