import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Mybtn from './Btn.js'
import pic from './booklogo.jpg';
 // Import a custom CSS file for additional styling
import SearchBox from './SearchBox.js'
import Navigation from './Navigation.js';
const Navbar = () => {
     

  return (
    <>
    <nav className=" navbar navbar-expand-md navbar-dark bg-dark sticky-top h-40" >
      <div className="container navcontent">
        <a className="navbar-brand d-block my-auto" href="#">
          <img src={pic} alt="Logo" width="80" height="30" className="d-inline-block align-text-top mr-2 bg-dark rounded-circle" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <Navigation/>            
        <div className="searchBox">
          <SearchBox/>
        </div>
      </div>
    </nav>
       
    </>
  );
}

export default Navbar;
