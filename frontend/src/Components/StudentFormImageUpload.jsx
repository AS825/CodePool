import React from "react";

const StudentFormImageUpload = ({
  previous,
  next,
  uploadedImage,
  onFileUpload,
}) => {
  return (
    <div className="form">
      <div className="form-heading">
        Please upload your image with the transparent background here:
      </div>
      <div className="content-1C">
        <div className="image-section">
          {uploadedImage ? (
            <img src={uploadedImage} className="image" />
          ) : (
            <img src="/person.png" className="image" />
          )}
          <label htmlFor="image-input" className="image-label">
            Upload Image
            <input
              id="image-input"
              name="image"
              type="file"
              className="image-input"
              onChange={(event) => onFileUpload(event)}
            />
          </label>
        </div>
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
  );
};

export default StudentFormImageUpload;
