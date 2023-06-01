
import './App.css';
import Hello from './components/Hello.js';
import TestProps from './components/TestProps';

function App() {

  const nome_pessoa = 'Joao';
  
  return (
    <div className="App">
      <Hello />
      <TestProps name = "Maria" />
      <TestProps name = {nome_pessoa} />
           
    </div>
  );
}

export default App;
