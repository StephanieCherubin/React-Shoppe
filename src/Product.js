/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Products.css';

const Product = ({
  id, title, desc, price,
}) => {
  console.log(id)
  return (
  <div>
    <img
      alt="product_image"
      className="productImage"
      src={`https://picsum.photos/70?random=${id}`}
    />
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>
        $
      {price}
    </p>
  </div>
)};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
