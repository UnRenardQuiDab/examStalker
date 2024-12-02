import './Player.css';

function Player({ position }) {
  return (
    <div className="Player"
	  style={{
		transform: `translateX(${position}vw)`,
	  }}
	>
      <h1>bwisniew</h1>
    </div>
  );
}

export default Player;
