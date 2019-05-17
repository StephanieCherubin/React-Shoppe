/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import inventory from './Inventory';

const ProductDetail = ({ match }) => {
  const { id } = match.params;

  function exact(product) {
    return product.id === Number(id);
  }

  const index = inventory.findIndex(exact);

  const item = inventory[index];
  return (
    <div className="productDetail">
      <img
        alt="product_image"
        className="productImg"
        src={`https://picsum.photos/200?random=${id}`}
      />
      <h3>{item.name}</h3>
      <p className="description">{item.description}</p>
      <p className="price">
        $
        {item.price}
      </p>
    </div>
  );
};

ProductDetail.propTypes = {
  match: PropTypes.number.isRequired,
};

export default ProductDetail;
