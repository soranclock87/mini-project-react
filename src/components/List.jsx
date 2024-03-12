import ListItem from "./ListItem"
// import dataRecipes from "../data/data.json"
import { useState } from "react"
import { Link } from "react-router-dom";

const List = ({recipes, setRecipes}) => {

    // const [recipes, setRecipes] = useState(dataRecipes);

  return (

    <ul className="listRecipes">
      {recipes.map((plate) => {
        return (
          
            <ListItem plate={plate} key={plate.id} setRecipes={setRecipes} allRecipes={recipes}/>
         
        )
      })

      }
    </ul>
  )
}

export default List
