import { useState } from 'react';
import './Line.css';
import Horse from './Horse';
import Player from './Player';

function Line() {
  
  const getRandomPosition = () => {
    return Math.floor(Math.random() * 90);
  }
  const [position, setPosition] = useState(0);
  


  return (
    <div className="Line">
      <Horse position={position} />
	  <div className='Lane'></div>
	  <Player position={position} />
    </div>
  );
}

export default Line;
