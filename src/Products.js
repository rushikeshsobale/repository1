import React from 'react'
import ImageSlider from './SlideBar.js'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Products() {
  return (
    <div className='container product'>
        <ImageSlider/>
    </div>
  )
}
