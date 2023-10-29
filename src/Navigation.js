import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import LoginForm from './Account.js'
import Products from './Products.js';
const Home = () => <div>Home Page</div>;

const Gallery = () => <div>Gallery Page</div>;


const Navigation = () => {
  return (
    <Router>
      <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/account" className="nav-link">Account</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/account" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
