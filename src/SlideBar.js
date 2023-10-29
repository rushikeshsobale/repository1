import React, { useEffect } from 'react';
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
     
  const [data, setdata] = useState([])
     
         let fun =async()=>{
             let apiData = await fetch("https://fakestoreapi.com/products/");
             let data =  await apiData.json();
             setdata(data)
         }
   useEffect(()=>{
      fun();
      
   },[])
   let stlH1 = {
    "fontSize":"15px",

 }


 let stlLable={
    "fontSize":"15px",
    
 }
  return (
    <>
      <div className="container">
      
            <div className=' d-flex products mx-auto'>
                {
                  data.map((e, index) => (
                   
                     e.category === "jewelery" ? (
                       <div className="mapped mx-3 col-lg-4 border border-2 p-3" key={index}>
                         <img className="mx-auto" src={e.image} style={{ 'width': '100%', 'height': '130px' }}></img>
                         <p><label style={stlLable}>Price :</label> {e.price}</p>
                         <p><label>Category :</label> {e.category}</p>
                         <button type='button' className='bg-warning p-1'>Add to cart</button>
                       </div>
                     ) : null
                     
                   ))
                   
                }
                
             </div>
             <div className=' d-flex products mx-auto'>
                {
                  data.map((e, index) => (
                     e.category === `men's clothing` ? (
                       <div className="mapped mx-3 col-lg-4 border border-2 p-3" key={index}>
                         <img className="mx-auto" src={e.image} style={{ 'width': '100%', 'height': '130px' }}></img>
                         <p><label style={stlLable}>Price :</label> {e.price}</p>
                         <p><label>Category :</label> {e.category}</p>
                         <button type='button' className="bg-warning p-1">Add to cart</button>
                       </div>
                     ) : null
                   ))
                   
                }
                
             </div>
             <div className=' d-flex products '>
                {
                  data.map((e, index) => (
                     e.category === `women's clothing` ? (
                       <div className="mapped mx-3 col-lg-4 border border-2 p-3" key={index}>
                         <img className="mx-auto" src={e.image} style={{ 'width': '100%', 'height': '130px' }}></img>
                         <p><label style={stlLable}>Price :</label> {e.price}</p>
                         <p><label>Category :</label> {e.category}</p>
                         <button type='button' className="bg-warning p-1">Add to cart</button>
                       </div>
                     ) : null
                   ))
                   
                }
                
             </div>
            
             
             <div className=' d-flex products mx-auto'>
                {
                  data.map((e, index) => (
                     e.category === `electronics` ? (
                       <div className="mapped mx-3 col-lg-4 border border-2 p-3" key={index}>
                         <img className="mx-auto" src={e.image} style={{ 'width': '100%', 'height': '130px' }}></img>
                         <p><label style={stlLable}>Price :</label> {e.price}</p>
                         <p><label>Category :</label> {e.category}</p>
                         <button type='button' className="bg-warning p-1">Add to cart</button>
                       </div>
                     ) : null
                   ))
                   
                }
                
             </div>
      
      </div>
    </>
  );
};
            
export default ImageSlider;


