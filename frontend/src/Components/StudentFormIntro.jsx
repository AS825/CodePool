import React from "react";

const StudentFormIntro = ({ next }) => {
  return (
    <div className="form">
      <div className="form-heading">
        Please remove the background of your profile image first
      </div>
      <div className="form-text">
        <div>For your profile image it is necessary to </div>
        <div>
          remove the background of the image. You can easily do that on
          <a href="https://www.remove.bg/de">this webpage</a>:
        </div>
      </div>
      <div className="image-backgroundRemoval-container">
        <a href="https://www.remove.bg/de">
          <img
            src="/backgroundRemoval.png"
            className="image-backgroundRemoval"
          />
        </a>
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
