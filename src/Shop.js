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
      wishlist: [],
    };
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat });
  }

  addToWishList(id) {
    inventory.forEach((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
        this.setState({ wishlist: [...this.state.wishlist, 1] });
      }
    });
  }

  render() {
    const { currentCategory } = this.state;

    const products = inventory.filter(
      item => item.category === currentCategory || currentCategory === 'All Categories',
    ).map((item, index) => {
      const {
        name, description, price, id, isSelected,
      } = item;
      return (
        <Product
          key={`${name} - ${index}`}
          title={name}
          desc={description}
          price={price}
          id={id}
          isSelected={isSelected}
          addToWishList={() => {
            console.log(name, description, price, id, isSelected);
            this.addToWishList(id);
          }}
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
