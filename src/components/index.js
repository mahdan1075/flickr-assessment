import React, { PropTypes } from 'react';

const Gallery = ({ images, onHandleSelectImage, selectedImage }) => (
  <div>
    <h2> Images </h2>
    <div>
      <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>
    <div>
      {images.map((image, i) => (
        <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
);

// Define PropTypes
Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default Gallery;
