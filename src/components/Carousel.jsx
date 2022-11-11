import React from 'react'
import { Carousel_item } from './Carousel_item'

export const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="mt-5 carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <Carousel_item active='active' img={"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/11141948/ca-times.brightspotcdn.com_.jpg"}></Carousel_item>
      <Carousel_item img={"https://www.nautygo.com/uploads/0000/1/2021/12/24/interjetcartagena.jpg"}></Carousel_item>
      <Carousel_item img={"https://images.alphacoders.com/533/thumb-1920-533590.jpg"}></Carousel_item>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  </div>
  )
}
