import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Students from './components/Recipes';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main-content'>
        <Sidebar></Sidebar>
        <Students></Students>
      </div>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
