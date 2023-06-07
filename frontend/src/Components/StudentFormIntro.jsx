import React from "react";

const StudentFormIntro = ({ next }) => {
  return (
    <div className="form">
      <div className="form-heading">
        Description on how to remove background
      </div>
      <div className="content-1C"></div>
      <div className="buttons">
        <button className="button" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentFormIntro;
