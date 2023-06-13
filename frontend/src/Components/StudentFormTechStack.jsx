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
    <div className="form">
      <div className="form-heading">
        Please select your Tech-Stack!
      </div>
      <div className="content-1C">
        <div className="tech-stack-icons">
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
              className="tech-icon"
              onClick={() => handleImageSelection(technologie)}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => previous()}>
          Previous
        </button>
        <button className="button" onClick={() => onSubmit(formObject)}>
          Submit
        </button>
        <button className="button" onClick={() => onCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StudentFormTechStack;
