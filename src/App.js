/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import inventory from './Inventory';
import Home from './Home';
import Navbar from './Navbar';
import Product from './Product';
import Sidebar from './Sidebar';
import './Categories.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: 'All Categories',
    };
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat });
  }

  render() {
    const { currentCategory } = this.state;

    const products = inventory.filter(
      item => item.category === currentCategory || currentCategory === 'All Categories',
    ).map((item, index) => {
      const {
        name, description, price, id,
      } = item;
      return (
        <Product
          key={`${name} - ${index}`}
          title={name}
          desc={description}
          price={price}
          id={id}
        />
      );
    });

    return (
      <div className="App">
        {/* <Navbar /> */}
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route path="/home" exact component={Home} />
          </div>
        </BrowserRouter>
        <Sidebar
          currentCategory={currentCategory}
          setCategory={this.setCategory.bind(this)}
        />
        <div className="Products">
          {products}
        </div>
      </div>
    );
  }
}

export default App;
