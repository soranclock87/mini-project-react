import Gif from "../assets/no-results.gif"

const image = {
    width: "500px",
    height: "100%",
}
const NotFound = () => {
  return (
    <div className="content-page">
      <img style={image } src={Gif} alt="" />
       </div>
  )
}

export default NotFound
