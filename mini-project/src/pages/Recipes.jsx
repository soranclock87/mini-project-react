import List from "../components/List"
// import Navbar from "./Navbar"
import Sidebar from "../components/Sidebar"
const Recipes = ({recipes, setRecipes}) => {
  return (
    <div className="content-list">

      {/* <Sidebar></Sidebar> */}
      {/* title bar */}
      <div>
      <div className="contentTitle">
        <ul className="title-recipes">
          <li>Name</li>
          <li>Calories</li>
          <li>Image</li>
          <li>Servings</li>
          <li>Delete</li>
        </ul>
      </div>
     

      {/* list of recipes */}
      <div className="list">
        <List recipes={recipes} setRecipes={setRecipes}/>
        <div id="snackbar">Some text some message</div>
      </div>
      </div>
      
    </div>
  )
}

export default Recipes
