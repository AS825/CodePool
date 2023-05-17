import { useState, useEffect } from "react";
import { fetchMessage } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import Roadmap from "../../Components/StudentCards/Presentation/Roadmap";
import ProjectGoals from "../../Components/StudentCards/Presentation/ProjectGoals";

const LandingPage = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div>LandingPage</div>
      <div className="message">Message: {message}</div>
      <ProjectGoals/>
      <Roadmap/>
    </>
  );
};

export default LandingPage;
