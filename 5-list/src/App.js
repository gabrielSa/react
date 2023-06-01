import './App.css';
import Lista from './components/Lista';

function App() {
  const myList = ["Vue", "React", "Angular"];

  return (
    <div className="App">
      <h1>Exemplo de Lista</h1>
      <Lista names = {myList}/>
    </div>
  );
}

export default App;
