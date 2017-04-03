import React, { PropTypes } from 'react';
import './style.css';

const Thumbnails = ({ images, onHandleSelectImage }) => (
  <div className="thumbnail">
    {images.map((image, i) => (
      <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
        <img src={image.mediaUrl} alt={image.title} />
      </div>
    ))}
  </div>
);

// Define PropTypes
Thumbnails.propTypes = {
  images: PropTypes.array.isRequired,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default Thumbnails;
