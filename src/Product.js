/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Products.css';

const Product = ({ title, description, price }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>
        $
      {price}
    </p>
  </div>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
