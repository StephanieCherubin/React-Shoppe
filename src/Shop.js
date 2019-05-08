/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Sidebar from './Sidebar';
import Product from './Product';
import inventory from './Inventory';

class Shop extends React.Component {
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
      <div className="body">
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

export default Shop;
