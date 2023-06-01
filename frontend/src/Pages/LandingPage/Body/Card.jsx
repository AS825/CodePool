import React from "react";
import "../LandingPage.css";

function Card({ officePersonal }) {
  return (
    <div className="business-container-card">
      <img src={`data:image/png;base64,${officePersonal.imageSource}`} alt="" />
      <div className="business-card-text">
        <h2>
          {officePersonal.firstName} {officePersonal.lastName}
        </h2>
        <p>{officePersonal.jobDescription}</p>
        <p>{officePersonal.contactData}</p>
      </div>
    </div>
  );
}

export default Card;
