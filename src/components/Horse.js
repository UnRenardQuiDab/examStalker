import './Horse.css';

function Horse({ position, state, animated }) {
  console.log('Horse', position, state, animated && state === 'loose' ?  'finish 1s linear forwards' : (animated && state === 'win' ? 'none' : 'none'));
  return (
    <div
      className="Horse"
      style={{
        left: `${position}vw`,
        animation: animated && state === 'loose' ?  'finish 1s linear forwards' : (animated && state === 'win' ? 'none' : 'none'),
        //zIndex: animated ? 10 : 0,
      }}
    >
      <img src='horse.gif' alt='horse' />
    </div>
  );
}

export default Horse;
