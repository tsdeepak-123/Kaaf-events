import React from 'react';
import './ProjectCardTwo.css'; // Import the CSS file

function ProjectCardTwo({ image }) {
  return (
    <div className='project-card-container'>
      <div className='project-image-container'>
        <img
          className='project-image'
          src={image}
          alt='Featured Project'
        />
      </div>
      <div className='project-details'>
        <h2 className='project-title'>Marriage Event</h2>
        <p className='project-description'>
          Your wedding day is one of the most important moments of your life. Let us help you create a magical and unforgettable experience that reflects your love story.
        </p>
      </div>
    </div>
  );
}

export default ProjectCardTwo;
