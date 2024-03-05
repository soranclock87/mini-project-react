import List from "./List"

const Recipes = () => {
  return (
    <div className="contentList">
    {/* title bar */}
    <div className="contentTitle">
      <ul className="title-recipes">
        <li>Name</li>
        <li>Calories</li>
        <li>Image</li>
        <li>Servings</li>
      </ul>
    </div>
     

     {/* list of recipes */}
    <div className="list">
      <List />
    </div>
    </div>
  )
}

export default Recipes
