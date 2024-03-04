import KebabLogo from "../assets/kebab.png";


const Navbar = () => {
  return (
    <div className="navBar">
      <h1>Our Special food</h1>
      <img className="logo" src={KebabLogo} alt="" />
    </div>
  )
}

export default Navbar
