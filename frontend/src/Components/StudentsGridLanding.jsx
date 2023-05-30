/* eslint-disable react/prop-types */


import StudentCard from "./StudentCard";
function StudentsGridLanding({ studentsList }) {
  return (
    <div className="students__landing">
      {studentsList?.map((student, index) => {
        return <StudentCard key={index} student={student} />;
      })}
    </div>
  );
}

export default StudentsGridLanding;
