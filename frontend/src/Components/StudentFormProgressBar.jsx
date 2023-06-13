import React from "react";
import "../Pages/StudentCreatorPage/StudentForm/StudentForm.css";

const ProgressBar = ({ formSteps, currentStep }) => {
  return (
    <ul id="progressbar">
      {formSteps.map((step, index) => (
        <li key={index} className={currentStep === index ? "active" : ""}>
          {step}
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
