/* eslint-disable react/prop-types */
import StudentCard from "../StudentCard/StudentCard";
import "./StudentCardsSection.css"

const StudentSection = ({students}) => {
  return (
    <div className="student-grid">
        {students?.map(student => {
            return <StudentCard key={student.id} student={student}/> 
        })}
    </div>
  )
}

export default StudentSection