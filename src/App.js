import './App.css';
import Horse from './components/Horse';
import useExam from './hooks/useExam';

function App() {

  useExam();

  return (
    <div className="App">
      <Horse />
      <Horse />
      <Horse />
      <Horse /> <Horse />
      <Horse />
      <Horse /><Horse />
      <Horse />
      <Horse /><Horse />
      <Horse />
      <Horse />
     
    </div>
  );
}

export default App;
