import React from "react";
import Sigrid from "../../../assets/landing/sigird.png";
import Lydia from "../../../assets/Lydia.png";
import Isabella from "../../../assets/landing/Isabella.png";
import Card from "../../LandingPage/Body/Card";
import "../LandingPage.css";

function BuisnissCard({ officePersonal }) {
  return (
    <div className="business-container">
      <Card officePersonal={officePersonal[1]} />
      <Card officePersonal={officePersonal[0]} />
      <Card officePersonal={officePersonal[2]} />
    </div>
  );
}

export default BuisnissCard;
