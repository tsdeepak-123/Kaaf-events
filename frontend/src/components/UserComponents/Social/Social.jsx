import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Social() {
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/kaafevents/',
    instagram: 'https://www.instagram.com/kaaf_events/',
  };

  return (
    <div className="text-center mt-8">
      <p className="text-lg font-bold mb-4">Follow us on social media</p>
      <ul className="flex justify-center space-x-4">
        <li>
          <a
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
           <FacebookIcon/>
          </a>
        </li>
        <li>
          <a
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <InstagramIcon/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
