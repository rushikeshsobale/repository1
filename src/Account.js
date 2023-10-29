// LoginForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
   // e.preventDefault();
    
  };

  return (
    <div className=" container-fluid bg-dark formdiv ">
      <form onSubmit={handleSubmit}>
        <div className="formContent text-white my-5">
        <div className="mb-3 " >
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
        </div>
       
        <div className="mb-3">
          <label htmlFor="phone number" className="form-label">
            Phone No
          </label>
          <input
            type="number"
            className="form-control"
            id="ph-no"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> 
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
