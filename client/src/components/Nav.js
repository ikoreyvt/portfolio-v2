import "../App.css"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <Link to="/" className="navButton">Home</Link>
        <Link to="/about" className="navButton">About</Link>
        <Link to="/skills" className="navButton">Skills</Link>
        <Link to="/portfolio" className="navButton">Portfolio</Link>
      </nav>
    </>
  )
}
