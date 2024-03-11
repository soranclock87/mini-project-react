

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeDetail = ( {recipes}) => {
    
    const { recipeId } = useParams();
      const plate = recipes.find((recipe) => recipe.id == recipeId);
   
      console.log("details", recipeId)
      console.log("image" , plate.image)
      
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
