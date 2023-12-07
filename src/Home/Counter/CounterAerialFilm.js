import React, { useState, useEffect, useRef } from 'react';

const CounterAerialFilm = () => {
  const maxCount = 300;
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    const currentRef = numberRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (startCounting) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === maxCount) {
            clearInterval(interval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 10); // Adjust interval duration as needed

      return () => clearInterval(interval);
    }
  }, [startCounting, maxCount]);

  return (
    <div>
      {/* <h1>Happy Clients</h1> */}
      <h1 style={{color:'rgb(24, 93, 230)'}}><div ref={numberRef}>{count}+</div></h1>
      <h4>Aerial Filming</h4>
      {/* Your content */}
    </div>
  );
};

export default CounterAerialFilm;
