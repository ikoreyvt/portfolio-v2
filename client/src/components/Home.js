import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Link to="/about" className="home-link about">
        <div className="top-triangle">
          <span className="home-nav-text">About</span>
        </div>
      </Link>
      <div className="middle-triangle">
        <img src="./images/myface.png" alt="my face" title="me"></img>
      </div>
      <Link to="/skills" className="home-link work">
        <div className="left-triangle">
          <span className="home-nav-text">Skills</span>
        </div>
      </Link>
      <Link to="/portfolio" className="home-link port">
        <div className="right-triangle">
          <span className="home-nav-text">Portfolio</span>
        </div>
      </Link>
    </div>
  );
}