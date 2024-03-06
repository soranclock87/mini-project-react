import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
    <div className="aside">
      <ul className="options">
      <Link to="/">
        <li>Recipes</li>
        </Link>
        <li>Add new Recipe</li>
        <Link to="/about">
          <li>About</li>  
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
