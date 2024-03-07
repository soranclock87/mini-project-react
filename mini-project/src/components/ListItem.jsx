
import { Link } from "react-router-dom";


const ListItem = ({plate,allRecipes,setRecipes}) => {
    const handleDelete = ()=> {
      let x = document.getElementById("snackbar");
      x.className = "show";
      
      x.innerHTML= `The repice of ${plate.name} was delete`;
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      setRecipes(allRecipes.filter((current) => current.id != plate.id))
    }

    // console.log("plate is :", plate)
    // console.log(recipe.calories)
  return (
    <>
      
      
      
      <li className="cardPlate"  key={plate.id} >
        <Link className="cardPlate-inside" to={`/recipe/${plate.id}`} key={plate.id}>
        <p><b>{plate.name}</b> {plate.calories <= 300 ? "🥰": "🤮"}</p>
        <p>{plate.calories}</p>
        <img src={plate.image} alt="" />
        <p>{plate.servings}</p>
        </Link>
        <Link to={`/update/${plate.id}`}><button>Edit Recipe</button></Link>
        <button onClick={handleDelete}>Detele element</button>
      </li>
    </>
  )
}

export default ListItem
