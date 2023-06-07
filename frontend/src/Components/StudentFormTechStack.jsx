import React from "react";
import "../Pages/StudentCreatorPage/StudentForm/StudentForm.css";

const StudentFormTechStack = ({ previous, formObject, setFormObject }) => {
  const iconSources = [];
  for (let i = 1; i < 25; i++) {
    iconSources[i] = "/tech" + i + ".png";
    console.log(iconSources[i]);
  }

  const handleImageSelection = (imageId) => {
    setFormObject((prevFormObj) => {
      if (formObject.techStack.includes(imageId)) {
        return {
          ...prevFormObj,
          techStack: prevFormObj.techStack.filter((id) => id !== imageId),
        };
      } else {
        return {
          ...prevFormObj,
          techStack: [...formObject.techStack, imageId],
        };
      }
    });
  };

  console.log(formObject.techStack);

  return (
    <div className="form">
      <div className="form-heading">
        Please select your Tech-Stack!
      </div>
      <div className="content-1C">
        <div className="tech-stack-icons">
          {iconSources.map((iconSource, index) => (
            <img
              key={index}
              src={iconSource}
              style={{
                filter: formObject.techStack.includes(index)
                  ? "none"
                  : "grayscale(100%)",
                opacity: formObject.techStack.includes(index) ? "1" : "0.4",
                cursor: "pointer",
              }}
              className="tech-icon"
              onClick={() => handleImageSelection(index)}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => previous()}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default StudentFormTechStack;
