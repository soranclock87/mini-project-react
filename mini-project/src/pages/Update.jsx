import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Update = ({recipes,setRecipes}) => {
    const [name,setNameRecipe] = useState();
    const [calories,setCalories] = useState();
    const [image, setImage] = useState();
    const [servings, setServings] = useState();
    const { recipeId } = useParams();
    const nav = useNavigate();


    useEffect(() => {
      const foundRecipe = recipes.find((recipe) => {
        if (recipe.id == recipeId) {
          return true;
        }
      });
      console.log("here is the found pet", foundRecipe);
      setNameRecipe(foundRecipe.name);
      setCalories(foundRecipe.calories);
      setImage(foundRecipe.image);
      setServings(foundRecipe.servings)
      console.log(foundRecipe);
    }, []);

    // console.log("asdasdas",recipeId)
    const handleUpdateRecipes = (event) => {
        //first always prevent the default refresh of the form
        event.preventDefault();
    
        
        const mappedRecipes = recipes.map((recipe) => {
          console.log(recipe.id)
          if (recipe.id == recipeId) {
            
            const updatedRecipe = { name, calories, image, servings, id:recipe.id };
            console.log("actual recipe", updatedRecipe)
            return updatedRecipe;
          } else {
            return recipe;
          }
        });
        setRecipes(mappedRecipes);
   
        //this will navigate after we add the pet
        nav("/");
        // 
    }
    
  return (
    <>
    
    <div className="content-page">
    <Link to="/" className="back-button"><button> {'<'} Back</button></Link>
      <div className="card">
      <form className="recipe-form" onSubmit={handleUpdateRecipes} >
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
        <input
          placeholder="url of image"
          type="text"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      
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
      
      <button className="action-btn" type="submit">Update Recipe</button>
    </form>
      </div>
      
    </div>
    </>
  )
}

export default Update
