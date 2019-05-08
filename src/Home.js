/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Home = id => (
  <div>
    <img
      alt="background_image"
      className="backgroundImage"
      src={`https://picsum.photos/1200/590?random=${id}`}
    />
  </div>
);

export default Home;
