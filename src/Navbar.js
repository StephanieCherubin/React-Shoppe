/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="logo">Wonder Emporium</Link>
    <Link to="/shop" className="logo">Shop</Link>
  </div>
);

export default Navbar;
