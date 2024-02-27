import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2>Choose Your Birthday Celebration Theme</h2>
      <div className="birthday-themes">
        <div className="birthday-theme">
          <img src="/Images/1.jpg" alt="Birthday Theme 1" />
          <h3>Superhero Party</h3>
          <p>Transform into your favorite superhero for a day!</p>
        </div>
        <div className="birthday-theme">
          <img src="/Images/2.jpg" alt="Birthday Theme 2" />
          <h3>Princess Party</h3>
          <p>Be treated like royalty with our princess-themed celebration.</p>
        </div>
        <div className="birthday-theme">
          <img src="/Images/3.jpg" alt="Birthday Theme 3" />
          <h3>Animal Safari Adventure</h3>
          <p>Embark on a wild adventure with our animal safari theme.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
