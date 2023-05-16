import { useState, useEffect } from "react";
import { fetchMessage } from "../../Utils/fetchMethods";
import "./LandingPage.css";

const LandingPage = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div>LandingPage</div>
      <div className="message">Message: {message}</div>
    </>
  );
};

export default LandingPage;
