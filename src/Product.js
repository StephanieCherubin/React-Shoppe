/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({
  id, title, desc, price, isSelected, addToWishList,
}) => (
  <div className="product">
    <Link to={`product/${id}`}>
      <img
        alt="product_image"
        className="productImage"
        src={`https://picsum.photos/200?random=${id}`}
      />
    </Link>
    <h3>{title}</h3>
    <p className="description">{desc}</p>
    <p className="price">
      $
      {price}
    </p>
    <input
      type="checkbox"
      checked={isSelected}
      onClick={(e) => {
        // console.log(`${id} was clicked`)
        addToWishList();
      }}
    />
    <br />
  </div>
);

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isSelected: PropTypes.string.isRequired,
  addToWishList: PropTypes.string.isRequired,
};

export default Product;
