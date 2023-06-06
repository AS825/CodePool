import React from "react";

const StudentFormTechStack = ({previous}) => {
  return (
    <div className="content-2C">
      StudentFormTechStack
          <div className="buttons">
            <button className="button" onClick={() => previous()}>
              Previous
            </button>
          </div>
    </div>
  );
};

export default StudentFormTechStack;
