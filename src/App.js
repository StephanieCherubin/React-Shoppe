/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import './Categories.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
    </div>
  </BrowserRouter>
);


export default App;
