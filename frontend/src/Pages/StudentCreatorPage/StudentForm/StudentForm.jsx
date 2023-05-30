import React, {useState} from 'react';
import './StudentForm.css';

const StudentForm = ({
  onSubmit, 
  onCancel, 
  disabled
}) => {

  const initFormObject = () => {
    return {
      name: "", 
      description: "", 
      project: ""
    };
  };
 
  const [formObject, setFormObject] = useState(initFormObject()); 

  const updateFormObject = (key, value) => {
    setFormObject(prevObject => {
      return {
        ...prevObject, 
        [key]: value
      };
    });
  };
  
  return (
    <div className="component">
      <div className="container">
        <div className="title"> Create your own page </div>
        <div className="content">
          <div className="image-section">
            Section for inserting image
          </div>
          <div className="data-section">
            <div className="form-element"> 
              <div className="form-element-heading">Name: </div>
              <input
                className="input-name"
                value={formObject.name}
                onChange={event => updateFormObject(event.target.name, event.target.value)}
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-element"> 
              <div className="form-element-heading">Description: </div>
              <textarea
                className="description-textarea"
                value={formObject.description}
                onChange={event => updateFormObject(event.target.name, event.target.value)}
                name="description"
                placeholder="Add a description of yourself and your abilities"
              />
            </div>
            <div className="form-element"> 
              <div className="form-element-heading">Project: </div>
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