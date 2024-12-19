import './Line.css';
import Horse from './Horse';
import Player from './Player';

function Line({login, grade, state, animated, image}) {

  return (
    <div className="Line">
      <Horse position={grade * 0.90} state={state} animated={animated} image={image}/>
	    <div className='Lane'></div>
	    <Player position={grade * 0.90} login={login} image={image}/>
    </div>
  );
}

export default Line;
