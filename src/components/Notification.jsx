import React from 'react'


export const Notification = ({message, message2, link}) => {



  return (
    <div className="alert alert-info" role="alert">
   {message} - <a href={link} className="alert-link">{message2}</a> 
    </div>
  )
}
