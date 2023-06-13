import {  useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { fetchOfficePersonal, fetchGraduates } from "../../Utils/fetchMethods";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import officePurple from "../../assets/landing/officePurple.png";
import officeBlue from "../../assets/landing/officeBluePurple.png";

import { fetchOfficePersonal, fetchGraduates } from "../../Utils/fetchMethods";
import "./LandingPage.css";

import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  const [graduates, setGraduates] = useState();
  const [officePersonal, setOfficePersonal] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchGraduates().then((data) => setGraduates(data));
      await fetchOfficePersonal().then((data) => setOfficePersonal(data));
    };

    fetchData();
   
  }, []);

  return (
    <div className="landing-page-container">
      <Parallax pages={5} className="background-landing">
        <ParallaxLayer
          className="first-image"
          offset={0}
          speed={1}
          factor={1.4}
          style={{
            backgroundImage: `url(${officePurple})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <Header />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1.6}
          style={{
            backgroundImage: `url(${officeBlue})`,
            backgroundSize: "cover",
          }}
        >
          <Body
            students={students}
            graduates={graduates}
            officePersonal={officePersonal}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.5}
          factor={1.0}
          className="students-langing-footer"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
