import './Line.css';
import Horse from './Horse';
import Player from './Player';

function Line({login, grade}) {

  return (
    <div className="Line">
      <Horse position={grade * 0.90} />
	  <div className='Lane'></div>
	  <Player position={grade * 0.90} login={login}/>
    </div>
  );
}

export default Line;
