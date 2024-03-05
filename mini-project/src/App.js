import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Recipes from './components/Recipes';

function App() {
  
  return (
    <div className="App" >
      <Navbar></Navbar>
      <div className="main-content" >
        <Sidebar></Sidebar>
        <Recipes></Recipes>
      </div>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
