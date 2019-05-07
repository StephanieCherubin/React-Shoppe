/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './Category-Button.css';

const CategoryButton = ({ isSelected, label, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(label)}
    className={`category-button ${isSelected ? 'selected' : ''}`}
  >
    { label }
  </button>
);

CategoryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default CategoryButton;
