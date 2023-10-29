import React from 'react'
import Aside from './Aside'
//import Navbar from './Navbar'
import ImageSlider from './Mycarousel'
//import ImageSlider from 'react-simple-image-slider'
import pic from './einstein.jpeg'

export default function 
() {
  return (
    <div className="container-flex  ">
         <Aside/>
        <ImageSlider/>

        
       <div className=" main container text-center">
        <h1 className="">WE PROVIDE BOOKS THAT INSIPIRES THE WORLD</h1>
         <p className=" text-start">“Somebody who only reads newspapers and at best books of contemporary authors looks to me like an extremely near-sighted person who scorns eyeglasses. He is completely dependent on the prejudices and fashions of his times, since he never gets to see or hear anything else.”

        <br></br> &nbsp; &nbsp;&nbsp;&nbsp; <i>_Albert Einstein</i>
        <br></br><br></br>
        "Genius is one percent inspiration and ninety-nine percent perspiration."
        <br></br> &nbsp; &nbsp;&nbsp;&nbsp; <i>_Thomas Eddison</i>
        </p>

        <br>
        </br>
          
       </div>
    </div>
  )
}
