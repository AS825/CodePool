import React from "react";
import "./Body.css";
import Slideshow from "./Slideshow";

function Body({ graduates }) {
  console.log(graduates);
  return (
    <div>
      <h2>Our students work for </h2>
      <div className="slideshow">
        {graduates == undefined ? (
          console.log("..loading")
        ) : (
          <Slideshow graduates={graduates} />
        )}
      </div>
      <p style={{ fontSize: "5rem", textAlign: "center", marginTop: "200px" }}>
        3 example StudentCards from Alen Student component
      </p>
    </div>
  );
}

export default Body;
