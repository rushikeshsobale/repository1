// MyComponent.js

import React from 'react';
import {  faCircleChevronDown, faCoffee, faAddressCard, faEnvelope } from './icons'; // Adjust the path accordingly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Mybtn = (props) => {

 
  return (
    <div className="Mybtn"> library
      <FontAwesomeIcon onClick={props.fun}  icon={faCircleChevronDown}  style={{color: "white"}}/>
    </div>
  );
}

export default Mybtn;
