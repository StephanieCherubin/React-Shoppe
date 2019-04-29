/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Category-Button.css';

const CategoryButton = props => (
  <button
    type="button"
    onClick={() => props.onClick(props.label)}
    className={`category-button ${props.isSelected ? 'selected' : ''}`}
  >
    { props.label }
  </button>
);

CategoryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default CategoryButton;
