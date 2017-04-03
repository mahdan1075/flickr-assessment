import React, { PropTypes } from 'react';
import './style.css';

const MainImage = ({ selectedImage }) => (
  <div key={selectedImage.id} className="selected-image">
    <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
    <h2 className="h2">{selectedImage.title}</h2>
  </div>
);

// Define PropTypes
MainImage.propTypes = {
  selectedImage: PropTypes.object
};

export default MainImage;
