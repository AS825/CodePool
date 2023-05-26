import { useState, useEffect } from "react";
import { fetchOfficePersonal, fetchGraduates } from "../../Utils/fetchMethods";
import "./LandingPage.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  const [graduates, setGraduates] = useState();
  const [officePersonal, setOfficePersonal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetchGraduates().then((data) => setGraduates(data));
      await fetchOfficePersonal().then((data) => setOfficePersonal(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="welcomePage">
        <Header />
        <Body graduates={graduates} />
        <Footer officePersonal={officePersonal} />
      </div>
    </>
  );
};

export default LandingPage;
