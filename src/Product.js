/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Products.css';

const Product = ({
  id, title, desc, price,
}) => (
  <div className="product">
    <img
      alt="product_image"
      className="productImage"
      src={`https://picsum.photos/200?random=${id}`}
    />
    <h3>{title}</h3>
    <p className="description">{desc}</p>
    <p className="price">
        $
      {price}
    </p>
    <br />
  </div>
);

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
