import { useState, useEffect } from "react";
import { fetchMessage } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import Header from "../LandingPage/Header/Header";

const LandingPage = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div className="welcomePage">
        <Header />
      </div>
    </>
  );
};

export default LandingPage;
