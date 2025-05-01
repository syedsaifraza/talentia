"use client"
import React, { useState, useEffect } from "react";


const CardCarousel = ({ children }:{children:React.ReactNode}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
    }, 3000); 
    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="carousel-card" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;