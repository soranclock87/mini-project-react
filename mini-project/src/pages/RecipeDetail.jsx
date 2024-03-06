
import dataRecipes from "../data/data.json"
import { useParams } from "react-router-dom";


const RecipeDetail = () => {
    
    const { recipeId } = useParams();
      const plate = dataRecipes.find((recipe) => recipe.id == recipeId);
   
      console.log("details", recipeId)
      
  return (
    <div className="content-page">
     {plate.name}
     {plate.calories}
     {plate.servings}
     <img src={plate.image} alt="" />
    </div>
  )
}

export default RecipeDetail
