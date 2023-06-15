import { useEffect, useState } from "react";
import "../Pages/StudentCreatorPage/StudentForm/StudentForm.css";
import { getTechnologies } from "../Utils/fetchMethods";

const StudentFormTechStack = ({ previous, formObject, setFormObject, onSubmit, onCancel }) => {
  const [technologies, setTechnologies] = useState(); 

  useEffect( () => {
    getTechnologies()
      .then(data => setTechnologies(data));
  }, []);

  const handleImageSelection = (technologie) => {
    setFormObject((prevFormObj) => {
      if (formObject.technologies.includes(technologie)) {
        return {
          ...prevFormObj,
          technologies: prevFormObj.technologies.filter(tech => tech.id !== technologie.id),
        };
      } else {
        return {
          ...prevFormObj,
          technologies: [...formObject.technologies, technologie],
        };
      }
    });
  };

  if(!technologies) {
    return <div> Loading ... </div>
  }

  return (    
    <div className="sf-form">
      <div className="sf-form-heading">
        Please select your Tech-Stack!
      </div>
      <div className="sf-content-1C">
        <div className="sf-tech-stack-icons">
          {technologies.map(technologie => (
            <img
              key={technologie.id}
              src={`data:image/png;base64,${technologie.image}`}
              style={{
                filter: formObject.technologies.includes(technologie)
                  ? "none"
                  : "grayscale(100%)",
                opacity: formObject.technologies.includes(technologie) ? "1" : "0.4",
                cursor: "pointer",
              }}
              className="sf-tech-icon"
              onClick={() => handleImageSelection(technologie)}
            />
          ))}
        </div>
      </div>
      <div className="sf-buttons">
        <button className="sf-button" onClick={() => previous()}>
          Previous
        </button>
        <button className="sf-button" onClick={() => onCancel()}>
          Cancel
        </button>
        <button className="sf-button" onClick={() => onSubmit(formObject)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentFormTechStack;
