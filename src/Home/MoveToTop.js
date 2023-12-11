// MoveToTopButton.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import arrow from './doublearrow.png'

function MoveToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <Button variant="warning" onClick={handleScrollToTop} className="move-to-top-button" style={{position:"fixed",bottom:"20px",right:"20px", borderRadius:"20px"}}>
      <Image src={arrow} style={{width:"20px",height:"10%"}}></Image>
    </Button>
  );
}

export default MoveToTop;
