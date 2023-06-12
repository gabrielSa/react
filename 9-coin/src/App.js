import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>React Router</h1>
      <div className='container min-height'>
      <Outlet/>
      </div>
      <p>Footer</p>     
    </div>
  );
}

export default App;
