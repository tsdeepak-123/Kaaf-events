import React, { useState } from 'react';
import './Gallery.css'; // Import your CSS file

function Gallery() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    '/Images/1.jpg',
    '/Images/2.jpg',
    '/Images/3.jpg',
    '/Images/4.jpg',
    '/Images/4.jpg',
    '/Images/4.jpg',
  ];

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <div className="gallery-container">
        <div className="gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openFullscreen(image)}
            />
          ))}
        </div>
        {fullscreenImage && (
          <div className="fullscreen" onClick={closeFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
