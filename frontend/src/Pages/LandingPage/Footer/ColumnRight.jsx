import React from "react";
import "./Contact.css";

function ColumnRight({ className, imgSrc, person }) {
  return (
    <div className="container-contact">
      <div className={className}>
        <div>
          <p>
            <strong>
              {person.firstName}
              {person.lastName}
            </strong>
            <br />
          </p>
        </div>
        <p>{person.jobDescription}</p>
        <img src={`data:image/jpeg;base64,${imgSrc}`}></img>
      </div>
    </div>
  );
}

export default ColumnRight;
