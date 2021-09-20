import "../App.css"
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <Link to="/" className="navButton">Home</Link>
        <Link to="/about" className="navButton">About</Link>
        <Link to="/workhistory" className="navButton">Work History</Link>
        <Link to="/portfolio" className="navButton">Portfolio</Link>
      </nav>
    </>
  )
}
