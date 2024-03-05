

const ListItem = ({plate,allRecipes,setRecipes}) => {
    const handleDelete = ()=> {
        console.log(plate.id)
        setRecipes(allRecipes.filter((current) => current.id != plate.id))
    }

    // console.log(recipe.calories)
  return (
    <li className="cardPlate"  key={plate.id} >
      <p>{plate.name} {plate.calories <= 300 ? "🥰": "🤮"}</p>
      <button onClick={handleDelete}>Detele element</button>
    </li>
  )
}

export default ListItem
