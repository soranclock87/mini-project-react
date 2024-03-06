import ListItem from "./ListItem"
import dataRecipes from "../data/data.json"
import { useState } from "react"
import { Link } from "react-router-dom";

const List = () => {

    const [recipes, setRecipes] = useState(dataRecipes);

  return (

    <ul className="listRecipes">
      {recipes.map((plate) => {
        return (
          <Link to={`/recipe/${plate.id}`} key={plate.id}>
            <ListItem plate={plate} key={plate.id} setRecipes={setRecipes} allRecipes={recipes}/>
          </Link>
        )
      })

      }
    </ul>
  )
}

export default List
