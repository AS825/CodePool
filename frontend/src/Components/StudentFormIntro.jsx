import React from "react";

const StudentFormIntro = ({ next }) => {
  return (
    <div className="form">
      <div className="form-heading">
        Background-Removal of your profile image
      </div>
      <div className="form-text">
        For your profile image it is necessary to remove the background of the
        image. You can do that on{" "}
        <a href="https://www.remove.bg/de">this webpage</a>:
      </div>
      <div className="image-backgroundRemoval-container">
        <img src="/backgroundRemoval.png" className="image-backgroundRemoval" />
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
