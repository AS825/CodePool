/* eslint-disable react/prop-types */
import StudentCard from "../StudentCard/StudentCard";

const StudentSection = ({students}) => {
  return (
    <div>
        {students?.map(student => {
            return <StudentCard key={student.id} data={student}/> 
        })}
    </div>
  )
}

export default StudentSection