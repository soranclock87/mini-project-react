

const ListItem = ({plate,allRecipes,setRecipes}) => {
    const handleDelete = ()=> {
      let x = document.getElementById("snackbar");
      x.className = "show";
      
      x.innerHTML= `The repice of ${plate.name} was delete`;
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      setRecipes(allRecipes.filter((current) => current.id != plate.id))
    }

    // console.log(recipe.calories)
  return (
    <>
      <li className="cardPlate"  key={plate.id}>

        <p><b>{plate.name}</b> {plate.calories <= 300 ? "🥰": "🤮"}</p>
        <p>{plate.calories}</p>
        <img src={plate.image} alt="" />
        <p>{plate.servings}</p>
        <button onClick={handleDelete}>Detele element</button>
      </li>
    </>
  )
}

export default ListItem