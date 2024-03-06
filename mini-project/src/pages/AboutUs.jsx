import { Link } from "react-router-dom"
import Pablo from "../assets/pablo.jpg";
import Linkedin from "../assets/linkedin.png";

const AboutUs = () => {
  return (
    <div className="content-page">
        <Link to="/" className="back-button"><button> {'<'} Back</button></Link>

        <h2>Developer of this project</h2>
        <div className="developers">

            <div className="developer">
                <img className="dev-image" src={Pablo} alt="" />
                <h3>Aliakbar Torbati</h3>
                <img className="linkimage" src={Linkedin} alt="" />
            </div>

            <div className="developer">
                <img className="dev-image" src={Pablo} alt="" />
                <h3>Pablo Martín</h3>
                <img className="linkimage" src={Linkedin} alt="" />
            </div>
        </div>
        
        
        
    </div>
  )
}

export default AboutUs
