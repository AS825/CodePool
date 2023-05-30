import React from "react";
import "./Header.css";
import Video from "./YoutubeEmb";

function Header() {
  return (
    <div className="headLine">
      <h1>
        {"< "}Code Cool with CodeCoolers{" />"}
      </h1>
      <Video />
    </div>
  );
}

export default Header;
