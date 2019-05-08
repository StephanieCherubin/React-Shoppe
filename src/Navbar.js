/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <Navbar className="navbar">
    <Navbar.Brand className="logo">Wonder Emporium</Navbar.Brand>
    <Navbar className="list">
      <Navbar.Link href="#" className="list-item">Women</Navbar.Link>
      <Navbar.Link href="#" className="list-item">Men</Navbar.Link>
      <Navbar.Link href="#" className="list-item">Big & Tall</Navbar.Link>
      <Navbar.Link href="#" className="list-item">Petite</Navbar.Link>
      <Navbar.Link href="#" className="list-item">Boys</Navbar.Link>
      <Navbar.Link href="#" className="list-item">Girls</Navbar.Link>
    </Navbar>
  </Navbar>
);

export default Navbar;
