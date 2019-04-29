/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import inventory, { categories } from './inventory';
import './App.css';
import './Categories.css';
import Product from './Product';
import CategoryButton from './Category-Button';

class App extends Component {
  constructor(props) {
    super(props);

    categories.push('All');

    this.state = {
      currentCategory: !null,
    };
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat });
  }

  render() {
    const { currentCategory } = this.state;
    const cats = categories.map(cat => (
      <CategoryButton
        isSelected={currentCategory === 'cat'}
        key={cat}
        label={cat}
        onClick={currentCategory => this.setCategory(currentCategory)}
      />));

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
        <div className="Categories">
          {cats}
        </div>

        <div className="Products">
          {products}
        </div>

        <div className="inventory" />
      </div>
    );
  }
}

export default App;
