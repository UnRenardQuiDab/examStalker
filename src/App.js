import useWebSocket from 'react-use-websocket';
import './App.css';
import Line from './components/Line';
import { useEffect } from 'react';
import Menu from './components/Menu';

function App() {

  const { lastMessage } = useWebSocket('ws://z2r5p3:4000/projects/notify');

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage.data);
    }
  }, [lastMessage]);

  return (
      <div className="App">
        <Menu />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
  );
}

export default App;
