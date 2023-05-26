import React from "react";
import "./Contact.css";

function ColumnLeft({ className, imgSrc, person }) {
  return (
    <div className="container-contact">
      <div className={className}>
        <img src={`data:image/jpeg;base64,${imgSrc}`}></img>
        <p>
          <strong>
            {person.firstName} {person.lastName}
          </strong>
        </p>
        <p>{person.jobDescription}</p>
      </div>
    </div>
  );
}

export default ColumnLeft;
