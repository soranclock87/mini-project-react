import ListItem from "./ListItem"
import dataRecipes from "../data/data.json"
import { useState } from "react"

const List = () => {

    const [recipes, setRecipes] = useState(dataRecipes);

  return (

    <ul className="listRecipes">
      {recipes.map((plate) => {
        //   {console.log(plate.id)}
        return (
             <ListItem plate={plate} key={plate.id} setRecipes={setRecipes} allRecipes={recipes}/>
        )
      })

      }
    </ul>
  )
}

export default List
