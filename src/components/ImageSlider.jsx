import React, { useState, useEffect } from 'react';

const images = [
  'https://res.cloudinary.com/ddswsnhim/image/upload/v1676985516/avatar_uwhrge.jpg',
  'https://res.cloudinary.com/ddswsnhim/image/upload/v1676985497/greenland1_htqkka.jpg',
  'https://res.cloudinary.com/ddswsnhim/image/upload/v1676985496/greenland3_yf1ar7.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    <div>
      <img src={images[currentIndex]} alt="Slider" style={{width:'400px', height:'250px'}}/>
    </div>
  );
};

export default ImageSlider;
