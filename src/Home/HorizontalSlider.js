import React, { useEffect, useRef } from 'react';
import './HorizontalSlider.css'; // Import CSS file for styling

const HorizontalSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft < slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft += 1; // Adjust the scroll speed
        } else {
          slider.scrollLeft = 0; // Reset to start when end is reached
        }
      }, 10); // Adjust interval as needed
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();

    return () => {
      slider.removeEventListener('mouseenter', stopAutoScroll);
      slider.removeEventListener('mouseleave', startAutoScroll);
      stopAutoScroll();
    };
  }, []);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slider1">
        <div className="slide1">Slide 1</div>
        <div className="slide1">Slide 2</div>
        <div className="slide1">Slide 3</div>
        <div className="slide1">Slide 4</div>
        <div className="slide1">Slide 5</div>
        <div className="slide1">Slide 6</div>
        <div className="slide1">Slide 7</div>
        <div className="slide1">Slide 8</div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default HorizontalSlider;
