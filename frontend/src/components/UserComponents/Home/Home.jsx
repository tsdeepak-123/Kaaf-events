import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from '../Header/Header';

function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [sloganIndex, setSloganIndex] = useState(0);

  const images = ["/Images/banner5.jpg", "/Images/banner6.jpg", "/Images/bannerr.jpg"];
  const slogans = ["where variety meets your celebration!", "Where memories sparkle in every event!", "Where creativity ignites your festivities!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex(prevIndex => (prevIndex + 1) % slogans.length);
    }, 3000); // Change slogan every 3 seconds
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="relative banner-container">
      <Header/>
      <img
        src={images[backgroundImageIndex]}
        alt="Background"
        className="banner-image"
      />
      <div className="absolute text-container">
        <div className="transparent-header">
          <h1 className="company-name">KAAF EVENTS</h1>
          <div className='slogan-container'>
            <h2 className="slogan">{slogans[sloganIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
