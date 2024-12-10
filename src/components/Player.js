import './Player.css';

function Player({ login, position }) {
  return (
    <div className="Player"
	  style={{
		transform: `translateX(${position}vw)`,
	  }}
	>
      <h1>{login}</h1>
    </div>
  );
}

export default Player;
