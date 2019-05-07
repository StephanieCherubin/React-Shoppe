/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import inventory from './inventory';
import './App.css';
import './Categories.css';
import Product from './Product';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: !null,
    };
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat });
  }

  render() {
    const { currentCategory } = this.state;

    const products = inventory.filter(
      item => item.category === currentCategory || currentCategory === 'All',
    ).map((item, index) => {
      const { name, description, price } = item;
      return (
        <Product
          key={`${name} - ${index}`}
          title={name}
          desc={description}
          price={price}
        />
      );
    });

    return (
      <div className="App">
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
