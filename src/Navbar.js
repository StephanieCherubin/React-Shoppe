/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">Wonder Emporium</div>
    <Link to="/shop" className="list-item">Shop</Link>
  </div>
);

export default Navbar;
