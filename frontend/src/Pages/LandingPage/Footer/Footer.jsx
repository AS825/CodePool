import React from "react";
import Contact from "./Contact";
import "./Footer.css";

function Footer({ officePersonal }) {
  return (
    <div className="footer">
      <h2>Work with us</h2>
      {officePersonal == undefined ? (
        console.log("loading ...")
      ) : (
        <Contact officePersonal={officePersonal} />
      )}
    </div>
  );
}

export default Footer;
