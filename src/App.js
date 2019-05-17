/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import ProductDetail from './ProductDetail';
import Footer from './Footer';
import './Footer.css';
import './Categories.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/product/:id" exact component={ProductDetail} />
      <Footer />
    </div>
  </BrowserRouter>
);


export default App;
