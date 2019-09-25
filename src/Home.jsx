import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ id }) => {
  const styles = {
    backgroundImage: `url(https://picsum.photos/1200/580?random=${id}`,
    backgroundSize: 'cover',
    height: '100vh',
  };
  return (
    <div style={styles} />
  );
};

Home.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Home;
