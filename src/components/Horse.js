import './Horse.css';

function Horse({ position }) {


  return (
    <div
      className="Horse"
      style={{
        transform: `translateX(${position}vw)`,
      }}
    >
      <img src='horse.gif' alt='horse' />
    </div>
  );
}

export default Horse;
