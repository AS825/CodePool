import React from "react";
import Logo from "../../../assets/codeCool_Logo.png";

function Footer2() {
  return (
    <div className="landing-footer">
      <img src={Logo} alt="" />
      <div className="contact-div">
        <h1>CodeCool Austria – Vienna</h1>
        <h2>Liechtensteinstraße 111-1151090, Wien</h2>
        <h2>+43 676 557 4252</h2>
        <h2>business@codecool.com</h2>
      </div>
    </div>
  );
}

export default Footer2;
