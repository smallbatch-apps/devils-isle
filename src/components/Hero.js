import React from 'react';
import { withRouter } from 'react-router-dom';

const Hero = ({location: {pathname}}) => {

  if (pathname === '/' || pathname === '/about') {
      return <div className="bg-green-dark pb-2">
      <img
        src="https://devils-isle-images.s3-ap-southeast-2.amazonaws.com/hero-croc.jpg"
        alt="Crocodile Hero"
      />
    </div>
  }
  return '';
}

export default withRouter(Hero);