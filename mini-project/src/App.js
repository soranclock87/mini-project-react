import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Recipes from './pages/Recipes';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import RecipeDetail from './pages/RecipeDetail';
import NewRecipe from './pages/NewRecipe';
import dataRecipes from "./data/data.json"
import Update from './pages/Update';


function App() {
  const [recipes, setRecipes] = useState(dataRecipes);

  return (
    <div className="App" >
      <Navbar></Navbar>
      <Sidebar/>
      <Footer></Footer>

        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} setRecipes={setRecipes}/>}/>
          <Route path="/update/:recipeId" element={<Update recipes={recipes} setRecipes={setRecipes}/>}/>
          <Route path="/recipe/:recipeId" element={<RecipeDetail />}/>
          <Route path="/newRecipe" element={<NewRecipe recipes={recipes} setRecipes={setRecipes} />}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>

    </div>
  );
}

export default App;
