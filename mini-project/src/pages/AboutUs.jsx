import { Link } from "react-router-dom"
import Pablo from "../assets/pablo.jpg";
import Ali from "../assets/Ali.jpg";
import Linkedin from "../assets/linkedin.png";

const AboutUs = () => {
  return (
    <div className="content-page">
        <Link to="/" className="back-button"><button> {'<'} Back</button></Link>

        <h2>Developer of this project</h2>
        <div className="developers">

            <div className="developer">
                <img className="dev-image" src={Ali} alt="" />
                <h3>Aliakbar Torbati</h3>
                <Link  to={"https://www.linkedin.com/in/aliakbar-torbati-0296201ba/"}><img className="linkimage" src={Linkedin} alt="" /></Link>
            </div>

            <div className="developer">
                <img className="dev-image" src={Pablo} alt="" />
                <h3>Pablo Martín</h3>
                <Link to={"https://www.linkedin.com/in/pablo-mart%C3%ADn-carri%C3%B3n/"}><img className="linkimage" src={Linkedin} alt="" /></Link>
                
            </div>
        </div>
        
        
        
    </div>
  )
}

export default AboutUs
