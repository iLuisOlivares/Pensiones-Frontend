import React from 'react'

export const Carousel_item = ({img, active=""}) => {

  return (
    <div className={`carousel-item ${active}`} data-bs-interval="2000">
        <img src={img} className="d-block w-100 img-h" alt="..."/>
      </div>
  )
}
