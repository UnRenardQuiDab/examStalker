import { useEffect, useState } from 'react';
import './Horse.css';

function Horse() {
  
  const getRandomPosition = () => {
    return Math.floor(Math.random() * 90);
  }
  const [position, setPosition] = useState(getRandomPosition());
  


  return (
    <div className="Horse">
      <div
        style={{ 
          transform: `translateX(${position}vw)`,
        }}
      >
        <img src='horse.gif' alt='horse' />
        <h1>bwisniew</h1>
      </div>
    </div>
  );
}

export default Horse;
