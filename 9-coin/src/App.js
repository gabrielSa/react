import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container min-height'>
      <Outlet/>      
      </div>
      <Footer/>
    </>
  );
}

export default App;
