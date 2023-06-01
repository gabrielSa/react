import logo from './logo.svg';
import './App.css';

function App() {
  const name = "joao"
  const url = "https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png"

  function sum(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Ola, {name}</p>
      <p>Soma: {sum(3,7)}</p>
      <img src={url}></img>
   
    </div>
  );
}

export default App;
