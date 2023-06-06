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
    <div className="content-2C">
      <div className="image-section">
        {uploadedImage ? (
          <img src={uploadedImage} className="image" />
        ) : (
          <img src="/person.png" className="image" />
        )}
      </div>
      <div className="data-section">
        <div className="line-container">
          <input
            className="input-text"
            type="text"
            value={formObject.firstName}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="input-text"
            type="text"
            value={formObject.lastName}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="line-container">
          <input
            className="input-text"
            type="text"
            value={formObject.age}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="age"
            placeholder="Age"
          />
          <input
            className="input-text"
            type="email"
            value={formObject.eMail}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="eMail"
            placeholder="E-Mail"
          />
        </div>
        <div className="line-container">
          <textarea
            className="description-textarea"
            value={formObject.description}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="description"
            placeholder="Add a description of yourself and your abilities"
          />
        </div>
        <div className="line-container">
          <textarea
            className="project-textarea"
            value={formObject.project}
            onChange={(event) =>
              updateFormObject(event.target.name, event.target.value)
            }
            name="project"
            placeholder="Describe one of your projects and its Tech-Stack"
          />
        </div>
        <div className="buttons">
          <button className="button" onClick={() => previous()}>
            Previous
          </button>
          <button className="button" onClick={() => next()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFormData;
