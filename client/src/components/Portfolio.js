import "../App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";

export default function Portfolio({ setModalOpen }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Nav />
      <div className="imageGallery">
        <div className="project" onClick={() => console.log("guess!")}>
          <img
            src="./images/guessthenumber.png"
            alt="guess the number"
            title="guess the number"
          />
        </div>
        <div className="project" onClick={() => console.log("zork!")}>
          <img
            src="./images/zorkington.png"
            alt="zorkington"
            title="zorkington"
          />
        </div>
        <div className="project" onClick={() => console.log("tic!")}>
          <img
            src="./images/tictactoe.png"
            alt="tic tac toe"
            title="tic tac toe"
          />
        </div>
        <div className="project" onClick={() => console.log("yelp!")}>
          <img
            src="./images/yelpington.png"
            alt="yelpington"
            title="yelpington"
          />
        </div>
        <div className="project" onClick={(evt) => console.log(evt.target.classList)}>
          <img src="./images/chatapp.png" alt="chat app" title="chat app"></img>
        </div>
      </div>
      <Footer setModalOpen={setModalOpen} />
    </div>
  );
}
