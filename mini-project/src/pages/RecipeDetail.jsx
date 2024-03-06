
import dataRecipes from "../data/data.json"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
    
    const { recipeId } = useParams();
      const plate = dataRecipes.find((recipe) => recipe.id == recipeId);
   
      console.log("details", recipeId)
      
  return (
    <div className="content-page">
        <Link to="/" className="back-button"><button> {'<'} Back</button></Link>
        <div className="card">
            <img src={plate.image} alt="" />

            <div className="content-details">

            <h3>Name Plate</h3>
            {plate.name}
            <h3>Calories</h3>
            {plate.calories}
            </div>
        </div>

    </div>
  )
}

export default RecipeDetail
