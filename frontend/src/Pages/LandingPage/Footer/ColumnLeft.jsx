import React from "react";
import "./Contact.css";

function ColumnLeft({ className, imgSrc }) {
  return (
    <div className="container-contact">
      <div className={className}>
        <img src={imgSrc}></img>
        <p>
          <strong>Lydia Jeschko</strong>
        </p>
        <p>Buisniss Development Austria</p>
      </div>
    </div>
  );
}

export default ColumnLeft;
