// About.js
import React from 'react';

function About({ logoImage, aboutText }) {
  const defaultImage = 'https://via.placeholder.com/215';
  return (
    <aside>
      <img src={logoImage || defaultImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
