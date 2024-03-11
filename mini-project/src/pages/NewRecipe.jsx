
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewRecipe = ({recipes, setRecipes }) => {

    const [name,setNameRecipe] = useState();
    const [calories,setCalories] = useState();
    const [image, setImage] = useState();
    const [servings, setServings] = useState();
    const nav = useNavigate();

     
    // console.log("size of  array", recipes.length)
    const handleCreateRecipe = (event) => {
      event.preventDefault();
      const newRecipe= { id: recipes.length + 1,name, calories, image, servings, };
      setRecipes([...recipes, newRecipe]);
      console.log(recipes)
      console.log(newRecipe.image)
      nav("/");

    }

    function handleChange(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div className="content-page">
        <Link to="/" className="back-button"><button> {'<'} Back</button></Link>
        <div className="card">
        <form className="recipe-form" onSubmit={handleCreateRecipe} >
        <label>
          Recipe Name:</label>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(event) => {
                setNameRecipe(event.target.value);
            }}
          />
        
        <label>
          Calories:</label>
          <input
            placeholder="calories"
            type="text"
            value={calories}
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        
        <label>
          Image:</label>
          {/* <input
            placeholder="url of image"
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          /> */}
         <input type="file"  onChange={handleChange}  />

        <label>
          Servings:</label>
          <input
            placeholder="servings"
            type="text"
            value={servings}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        
        <button className="action-btn" type="submit">Create Recipe</button>
      </form>
        </div>

    </div>
  )
}

export default NewRecipe
