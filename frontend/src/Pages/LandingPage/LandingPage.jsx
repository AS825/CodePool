import { useState, useEffect } from "react";
import { fetchData } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  const [message, setMessage] = useState();
  const [graduates, setGraduates] = useState();

  useEffect(() => {
    fetchData().then((data) => setGraduates(data));
  }, []);

  return (
    <>
      <div className="welcomePage">
        <Header />
        <Body graduates={graduates} />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
