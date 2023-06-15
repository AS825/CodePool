import React from "react";

const StudentFormData = ({
  previous,
  next,
  uploadedImage,
  onFileUpload,
  formObject,
  updateFormObject,
}) => {
  return (
    <div className="sf-form">
      <div className="sf-content-2C">
        <div className="sf-image-section">
          {uploadedImage ? (
            <img src={uploadedImage} className="sf-image" />
          ) : (
            <img src="/person.png" className="sf-image" />
          )}
        </div>
        <div className="sf-data-section">
          <div className="sf-line-container">
            <input
              className="sf-input-text"
              type="text"
              value={formObject.firstName}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="firstName"
              placeholder="First Name"
            />
            <input
              className="sf-input-text"
              type="text"
              value={formObject.lastName}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="sf-line-container">
            <input
              className="sf-input-text"
              type="text"
              value={formObject.age}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="age"
              placeholder="Age"
            />
            <input
              className="sf-input-text"
              type="email"
              value={formObject.email}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="email"
              placeholder="E-Mail"
            />
          </div>
          <div className="sf-line-container">
            <textarea
              className="sf-description-textarea"
              value={formObject.selfDescription}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="selfDescription"
              placeholder="Add a description of yourself and your abilities"
            />
          </div>
          <div className="sf-line-container">
            <textarea
              className="sf-project-textarea"
              value={formObject.projectDescription}
              onChange={(event) =>
                updateFormObject(event.target.name, event.target.value)
              }
              name="projectDescription"
              placeholder="Describe one of your projects and its Tech-Stack"
            />
          </div>
        </div>
      </div>
      <div className="sf-buttons">
        <button className="sf-button" onClick={() => previous()}>
          Previous
        </button>
        <button className="sf-button" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentFormData;
