import { Link } from "react-router-dom";
import { UilGlobe } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilDesktop } from "@iconscout/react-unicons";
import { UilBagAlt } from "@iconscout/react-unicons";
import { UilStar } from "@iconscout/react-unicons";
import "../../LandingPage/LandingPage.css";

function Header() {
  return (
    <div data-aos="zoom-in" className="header-landing">
      <h1 data-aos="flip-up">Gestalten wir Ihre digitale Zukunft gemeinsam!</h1>
      <h2 data-aos="flip-down">Unsere IT-Talente sind bereit</h2>
      <Link to="/students">
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            paddingInline: "1em",
            fontSize: "1.5rem",
            border: "solid 3px black",
            borderRadius: "5px",
          }}
          className="box"
        >
          Zu unseren Studenten
        </button>
      </Link>
      <div className="example-container">
        <div data-aos="zoom-in-up" className="landing-container">
          <UilGlobe className="icons-landing" />
          <div className="landing-info-container">
            <p
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              4
            </p>
            <span>Standorte in Europa</span>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="landing-container">
          <UilUsersAlt className="icons-landing" />
          <div className="landing-info-container">
            <p
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              2000+
            </p>
            <span>Absolvent*innen erfolgreich vermittelt</span>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="landing-container">
          <UilDesktop className="icons-landing" />
          <div className="landing-info-container">
            <p
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              98%
            </p>
            <span>Arbeiten in Tech-Jobs</span>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="landing-container">
          <UilBagAlt className="icons-landing" />
          <div className="landing-info-container">
            <p
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              30+
            </p>
            <span>Zufriedene Unternehmenskunden</span>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="landing-container">
          <UilStar className="icons-landing" />
          <div className="landing-info-container">
            <p
              style={{
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              30%
            </p>
            <span>Anteil an weiblichen Developern</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
