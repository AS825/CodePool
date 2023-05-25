import React from "react";
import "./Contact.css";

function ColumnRight({ className, imgSrc }) {
  return (
    <div className="container-contact">
      <div className={className}>
        <p>
          <strong>Sigrid Hantusch-Taferner</strong>
        </p>
        <p> Country Manager</p>
        <img src={imgSrc}></img>
      </div>
    </div>
  );
}

export default ColumnRight;
