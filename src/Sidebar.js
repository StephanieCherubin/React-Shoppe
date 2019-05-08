/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryButton from './Category-Button';
import { categories } from './Inventory';
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
            id="product-search-field"
            className="search-field"
            placeholder="Search Products"
            name="s"
            title="Search for:"
          />
        </div>
        <br />
        <div className="widget">
          <h3 className="widget-title">Product Categories</h3>
          <div className="Categories">
            {cats}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

Sidebar.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Sidebar;
