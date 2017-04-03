import React, { PropTypes } from 'react';
import './style.css';

const MainImage = ({ selectedImage }) => (
  <div>
    <h2 className="h2">Gallery</h2>
    <div>
      <div key={selectedImage.id} className="selected-image">
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      <h6 className="h6">{selectedImage.title}</h6>
      </div>
    </div>
  </div>
);

// Define PropTypes
MainImage.propTypes = {
  selectedImage: PropTypes.object
};

export default MainImage;
