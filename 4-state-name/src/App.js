import {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState("Joao");

  return (
    <div className="App">
      <div>
        <p>Seu nome é: {name}</p>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      </div>
      
    </div>
  );
}

export default App;
