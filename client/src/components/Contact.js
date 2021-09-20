import "../App.css";
import { useState } from "react";

export default function Contact({ setModalOpen }) {
  return (
    <div className="contactCont">
      <form className="contactForm" method="POST">
        <label>
          Name:
          <input
            type="text"
            className="contactInput"
          ></input>
        </label>
        <label>
          Email:
          <input
            type="text"
            className="contactInput"
          ></input>
        </label>
        <label>
          Comments:
          <textarea
            type="text"
            className="commentBox"
          ></textarea>
        </label>
        <input type="submit"></input>
      </form>
      <span onClick={() => setModalOpen(false)} className="modalClose">Close</span>
    </div>
  );
}
