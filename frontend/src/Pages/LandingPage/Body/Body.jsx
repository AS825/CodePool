import React from "react";
import "./Body.css";
import Slideshow from "./Slideshow";

function Body({ graduates }) {
  return (
    <div>
      <h2>Our students work for </h2>
      <div className="slideshow">
        <Slideshow graduates={graduates} />
      </div>
    </div>
  );
}

export default Body;
