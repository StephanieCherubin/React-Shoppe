/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import ProductDetail from './ProductDetail';
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';
import './Categories.css';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:id" component={ProductDetail} />
      <Footer />
    </div>
  </Router>
);


export default App;
