import { useState, useEffect } from "react";
import {
  fetchStudents,
  // fetchNextPageOfStudents,
} from "../../Utils/fetchMethods";
import StudentsGrid from "../../Components/StudentsGrid";
import "./Students.css";
// import AOS from 'aos';
// import "aos/dist/aos.css";

function Students() {
  const [students, setStudents] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStudents().then((data) => {
      setStudents(data?._embedded.students);
    });
  }, []);

  // const loadMoreStudents = () => {
  //   if (loading) return;
  //   setLoading(true);
  //   fetchNextPageOfStudents(currentPage + 1).then((data) => {
  //     const newStudents = data?._embedded.students;
  //     setStudents((prevStudents) => [...prevStudents, ...newStudents]);
  //     setCurrentPage(data?.page.number);
  //     setLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },);

  // const handleScroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //   if (scrollTop + clientHeight >= scrollHeight - 100) {
  //     loadMoreStudents();
  //   }
  // };

  return (
    <div className="students">
      <div className="student-header">
        <h1 className="title">Students</h1>
        <h3 className="sub-title">CodeCool Jobhunters</h3>
      </div>
      <StudentsGrid studentsList={students} />
      {/* {loading && <p>Loading more students...</p>} */}
    </div>
  );
}

export default Students;
