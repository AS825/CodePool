import { useState, useEffect } from "react";
import {
  fetchStudents,
  fetchNextPageOfStudents,
} from "../../Utils/fetchMethods";
import StudentsGrid from "../../Components/StudentsGrid";
import LoadingAnimation from "../../Components/LoadingAnimation";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    fetchStudents().then((data) => {
      setStudents(data);
    });
  }, []);



  console.log(students);
  return (
    <div className="students">
      <div className="student-header">
        <h1 className="title"> CodeCool Students</h1>
        <h3 className="sub-title">Jobhunters</h3>
      </div>
      <StudentsGrid studentsList={students} />
    </div>
  );
}

export default Students;
