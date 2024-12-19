import { useEffect, useState } from 'react';
import './Horse.css';

function Horse({ position, state, animated }) {

  const [image, setImage] = useState(state === 'loose' && !animated ? 'rip.png' : 'horse.gif');

  useEffect(() => {
    if (state === 'loose' && animated) {
      setTimeout(() => {
        setImage('rip.png');
      }, 900);
    }
  }, [state, animated]);

  return (
    <div
      className="Horse"
      style={{
        left: `${position}vw`,
        animation: animated && state === 'loose' ?  'finish 1s linear forwards' : (animated && state === 'win' ? 'none' : 'none'),
      }}
    >
        <img src={image} alt='horse' />
    </div>
  );
}

export default Horse;
