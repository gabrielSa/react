import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="App">
      <div>
        <p>Número: {number}</p>
        <button onClick={changeNumber}>Mudar número!</button>
      </div>

    </div>
  );
}

export default App;
