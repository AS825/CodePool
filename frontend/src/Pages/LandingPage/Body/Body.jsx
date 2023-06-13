import React from "react";
import { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import StudentsGridLanding from "../../../Components/StudentsGridLanding";
import BusinessBLue from "../../../assets/landing/businessImg.jpg";
import john from "../../../assets/landing/johnTravolta.gif";
import Slideshow from "./Slideshow.jsx";
import BuisnissCard from "./BuisnissCard";
import Video from "../Header/YoutubeEmb";
import "../LandingPage.css";

function Body({ students, graduates, officePersonal }) {
  const ref = useRef();

  return (
    <div>
      <div className="header-landing">
        <h1>Erfolgsstories</h1>
        <h2>Unsere IT-Talente bei unseren Partnern</h2>
        <div className="sucess-container">
          <div className="video-landing-container">
            <h3>Unser Codecool Student bei unserem Partner Smatrics</h3>
            <Video />
          </div>
          <div>
            {graduates === undefined ? (
              console.log("loading ...")
            ) : (
              <Slideshow graduates={graduates} />
            )}
          </div>
          <div className="students-landing-container">
            <StudentsGridLanding studentsList={students} />
          </div>
        </div>
      </div>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        factor={1.7}
        style={{
          backgroundImage: `url(${BusinessBLue})`,
          backgroundSize: "cover",
        }}
      >
        <div className="header-landing" onClick={() => ref.current.scrollTo(3)}>
          <h1>Werden Sie Partner !</h1>
          <h2 style={{ textAlign: "center" }}>
            Jetzt individuellen Beratungstermin vereinbaren <br />
            und Zugriff auf unseren Techpool erhalten
          </h2>

          <a href="https://business.codecool.com/">
            <button
              style={{
                color: "black",
                backgroundColor: "white",
                paddingInline: "1em",
                fontSize: "1.5rem",
                border: "solid 3px black",
                borderRadius: "5px",
                marginTop: "1rem",
              }}
              className="box"
            >
              CodeCool Bussines
            </button>
          </a>
          {officePersonal === undefined ? (
            console.log("..lodading")
          ) : (
            <BuisnissCard officePersonal={officePersonal} />
          )}
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0.8}
        factor={1.8}
        className="students-langing-parallax-gif"
        // sticky={{start: 1.9, end: 3}}
      >
        <div className="landing-students-container">
          <img src={john} alt="John Travolta" className="landing-gif" />
          <div className="landing-students-text-container">
            <h1>Und, wo sind jetzt diese Studenten?</h1>
            <Link to="/students">
              <button className="neon-button">Hier</button>
            </Link>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Body;
