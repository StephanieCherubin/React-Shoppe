/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import HeartCheckbox from 'react-heart-checkbox';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.css';


class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }

  render() {
  
    const { checked } = this.state;
    const { id, title, desc, price, isSelected, addToWishList } = this.props;
    
    return (

      <div className="product">
        <Link to={`product/${this.props.id}`}>
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
          className="red-heart-checkbox"
          onClick={(e) => {
            // console.log(`${id} was clicked`)
            addToWishList();
          }}
        />
        <br />
        <FontAwesomeIcon icon={faHeart} />
      </div>
    )
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isSelected: PropTypes.string.isRequired,
  addToWishList: PropTypes.string.isRequired,
};

export default Product;
