import './Player.css';

function Player({ login, position, image }) {
  return (
    <div className="Player"
	  style={{
		transform: `translateX(${position}vw)`,
	  }}
	>
      {image && <img src={image} alt={login} />}
      <h1>{login}</h1>
    </div>
  );
}

export default Player;
