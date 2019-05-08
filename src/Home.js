/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Home.css';

const Home = id => (
  <div>
    <img
      alt="background_image"
      className="backgroundImage"
      src={`https://picsum.photos/1200/580?random=${id}`}
    />
  </div>
);

export default Home;
