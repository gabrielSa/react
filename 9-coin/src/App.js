import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

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
