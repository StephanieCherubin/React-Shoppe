/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import CategoryButton from './Category-Button';
import { categories } from './inventory';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    categories.unshift('All Categories');
  }

  render() {
    const { currentCategory, setCategory } = this.props;
    const cats = categories.map(cat => (
      <CategoryButton
        isSelected={currentCategory === 'cat'}
        key={cat}
        label={cat}
        onClick={() => setCategory(cat)}
      />));

    return (
      <div className="sidebar">
        <div className="widget">
          <input
            type="search"
            id="woocommerce-product-search-field"
            className="search-field"
            placeholder="Search Products"
            value=""
            name="s"
            title="Search for:"
          />
        </div>
        <div className="widget">
          <h3 className="widget-title">Product Categories</h3>
          <div className="Categories">
            {cats}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
