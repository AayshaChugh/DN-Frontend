import React from "react";
import meme from "./meme.jpg";
import "./memeCard.css";
const MemeCard = () => {
  return (
    <div className="memeParent">
      <div className="memeImage">
        <img src={meme} alt="memeImage" />{" "}
      </div>
      <h1 className="memeMainHeading">Meme Card</h1>
      <p className="memeMainPara">Laugh Laugh Laugh!!!</p>
    </div>
  );
};

export default MemeCard;
