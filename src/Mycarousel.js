import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from './wallpaperflare.com_wallpaper (1).jpg';
import pic1 from './wallpaperflare.com_wallpaper (2).jpg';
import './style.css';



const ImageSlider = () => {
  const carouselStyle = {
    maxWidth: '80%',
    margin: 'auto',
    // height: 'auto', // You can remove or adjust this line
  };

  

  
  return (
    <>
          
    <div className="container Myc">
      <div className="container carousel">
        <Carousel>
          <div>
            <img src={pic} alt="Legend 1" />  
            <p className="legend">NOVELS</p>
            <p className=" overlay-text legend">Your Text Overlay</p>
          </div>
          <div>
            <img src={pic1} alt="Legend 2" />
            <p className="legend">REGIONAL</p>
            <p className=" overlay-text legend">Your Text Overlay</p>
          </div>
          <div>
            <img src={pic} alt="Legend 3" />
            <p className="legend">SCIENTIFIC</p>
            <p className="  overlay-text legend">Your Text Overlay</p>
          </div>
          <div>
            <img src={pic} alt="Legend 3" />
            <p className="legend">HISTORY BOOKS</p>
            <p className="overlay-text legend">Your Text Overlay</p>
          </div>
          <div>
            <img src={pic} alt="Legend 3" />
            <p className="legend">FICTIONAL BOOKS</p>
            <p className="overlay-text legend">Your Text Overlay</p>
          </div>
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default ImageSlider;
