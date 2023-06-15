import React from "react";

const StudentFormImageUpload = ({
  previous,
  next,
  uploadedImage,
  onFileUpload,
}) => {
  return (
    <div className="sf-form">
      <div className="sf-form-heading">
        Please upload your image with the transparent background here:
      </div>
      <div className="sf-content-1C">
        <div className="sf-image-section">
          {uploadedImage ? (
            <img src={uploadedImage} className="sf-image" />
          ) : (
            <img src="/person.png" className="sf-image" />
          )}
          <label htmlFor="image-input" className="sf-image-label">
            Upload Image
            <input
              id="image-input"
              name="image"
              type="file"
              className="sf-image-input"
              onChange={(event) => onFileUpload(event)}
            />
          </label>
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

export default StudentFormImageUpload;
