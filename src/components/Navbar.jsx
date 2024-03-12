import KebabLogo from "../assets/kebab.png";


const Navbar = () => {
  return (
    <div className="navBar">
      <img className="logo" src={KebabLogo} alt="" />
      <h1>Our Special food</h1>
    </div>
  )
}

export default Navbar
