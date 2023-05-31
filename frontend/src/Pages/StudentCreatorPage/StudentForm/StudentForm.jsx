import React, {useState, useEffect} from 'react';
import './StudentForm.css';

const StudentForm = ({
  onSubmit, 
  onCancel, 
  disabled
}) => {

  const initFormObject = () => {
    return {
      firstName: "", 
      lastName: "", 
      age: "", 
      eMail: "",
      description: "", 
      project: "",
      image: "",
    };
  };
 
  const [formObject, setFormObject] = useState(initFormObject());
  const [uploadedImage, setUploadedImage] = useState(null);  

  const updateFormObject = (key, value) => {
    setFormObject(prevObject => {
      return {
        ...prevObject, 
        [key]: value
      };
    });
  };

  const onFileUpload = async (event) => {
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const base64 = await convertToBase64(file); 
    console.log(base64); 
    console.log(event.target.name); 
    updateFormObject(event.target.name, base64);
    console.log(formObject);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve,reject) => {
      const fileReader = new FileReader(); 
      fileReader.readAsDataURL(file); 
      fileReader.onload = () => {
        resolve(fileReader.result); 
      };
      fileReader.onerror = (error) => {
        reject(error); 
      };
    });
  };
  
  return (
    <div className="component">
      <div className="container">
        <div className="title"> Create your own profile </div>
        <div className="content">
          <div className="image-section">
            {uploadedImage ? <img src={uploadedImage} className="image" /> : <img src="/person.png" className="image"/> }
            <label htmlFor="image-input" className="image-label">Upload Image
              <input id="image-input" name="image" type="file" className="image-input" onChange={(event) => onFileUpload(event)}/>
            </label>
          </div>
          <div className="data-section">
              <div className="line-container">
                <input
                  className="input-text"
                  type="text"
                  value={formObject.firstName}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="firstName"
                  placeholder="First Name"
                />
                <input
                  className="input-text"
                  type="text"
                  value={formObject.lastName}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="line-container">
                <input
                  className="input-text"
                  type="text"
                  value={formObject.age}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="age"
                  placeholder="Age"
                />
                <input
                  className="input-text"
                  type="email"
                  value={formObject.eMail}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="eMail"
                  placeholder="E-Mail"
                />
              </div>
              <div className="line-container">
                <textarea
                  className="description-textarea"
                  value={formObject.description}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="description"
                  placeholder="Add a description of yourself and your abilities"
                />
              </div>
              <div className="line-container">
                <textarea
                  className="project-textarea"
                  value={formObject.project}
                  onChange={event => updateFormObject(event.target.name, event.target.value)}
                  name="project"
                  placeholder="Describe one of your projects and its Tech-Stack"
                />
              </div>
            <div className="buttons">
              <button className="button" onClick={() => onSubmit(formObject)} disabled={disabled}>
                Submit
              </button>
              <button className="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentForm