import { useState, useEffect } from "react";
import { fetchMessage, fetchStudents } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import StudentSection from "../../Components/StudentCards/StudentCardsSection/StudentCardsSection";

const LandingPage = () => {
  const [message, setMessage] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data));
    fetchStudents().then((data) => setStudents(data));
  }, []);

  return (
    <>
      <div className="message">
        {message ? message : "where are the students?"}
      </div>
      <div className="studen-section-container">
        <StudentSection students={students} />
      </div>
    </>
  );
};

export default LandingPage;
