import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Recipes from './pages/Recipes';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  
  return (
    <div className="App" >
      <Navbar></Navbar>
      <Footer></Footer>

        <Routes>
          <Route path="/" element={<Recipes/>}/>
          <Route path="/recipe/:recipeId" element={<RecipeDetail />}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>

    </div>
  );
}

export default App;
