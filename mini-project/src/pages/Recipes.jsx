import List from "../components/List"
// import Navbar from "./Navbar"
import Sidebar from "../components/Sidebar"
const Recipes = () => {
  return (
    <div className="contentList">

      <Sidebar></Sidebar>
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
        <List />
        <div id="snackbar">Some text some message</div>
      </div>
      </div>
      
    </div>
  )
}

export default Recipes
