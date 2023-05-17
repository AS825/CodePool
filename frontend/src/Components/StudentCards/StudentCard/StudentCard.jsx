/* eslint-disable react/prop-types */
import "./StudentCard.css"
// import alen from "../../../assets/alen.jpeg"
// import berni from "../../../assets/berni.png"

const StudentCard = ({student}) => {
  console.log(student.name);
  return (
    <div className="card card-shadow">
    <div className="card-background">
    </div>
    <div >
      <img className="img-radius" src={`${student.imgsrc +".jpeg"}`} alt="" />
    </div>
    <div className="card-details">
    <h2>{student.name}</h2>
    <p>{student.title}</p>
    <p>TASKS:</p>
    <div className="task-container">
      <p>{student.tasks[0]}</p>
      <p>{student.tasks[1]}</p>
      <p>{student.tasks[2]}</p>
    </div>

    </div>
    <div className="card-footer">
      <button className="btn">Details</button>
      <button className="btn btn-outline">Contact Seller</button>
    </div>
  </div>
  )
}

export default StudentCard