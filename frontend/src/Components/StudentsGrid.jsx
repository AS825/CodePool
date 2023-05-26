/* eslint-disable react/prop-types */


import StudentCard from "./StudentCard";
function StudentsGrid({ studentsList }) {
  return (
    <div className="students__list">
      {studentsList?.map((student, index) => {
        return <StudentCard key={index} student={student} />;
      })}
    </div>
  );
}

export default StudentsGrid;
