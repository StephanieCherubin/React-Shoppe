/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import brand from './A_Mr_Magoriums_Wonder_Emporium_logo.png';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="brand">
      <img
        alt="brandName"
        className="brand"
        src={brand}
      />
    </Link>
    <Link to="/shop" className="list">
      <i className="fas fa-shopping-cart" />
        Cart
    </Link>
    <Link to="/shop" className="list">Shop</Link>
    <Link to="/shop" className="list">
      <i className="fas fa-bookmark" />
        Wish List
    </Link>
    <Link to="/shop" className="list">
      <i className="fas fa-user-alt" />
        Account
    </Link>
  </div>
);

export default Navbar;
