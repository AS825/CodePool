/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function getRandomColor() {
  const hue = Math.floor(Math.random() * 70) + 340;
  const saturation = Math.floor(Math.random() * 41) + 60;
  const lightness = Math.floor(Math.random() * 21) + 61;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function getRandomEffect() {
  const effects = [
    "fade-up",
    "fade-down",
    "zoom-in",
    "fade-right",
    "fade-left",
    "flip-right",
  ];
  const randomIndex = Math.floor(Math.random() * effects.length);
  return effects[randomIndex];
}

function StudentCard({ student }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // const getIdFromHref = () => {
  //   const href = student._links.student.href;
  //   var regex = /\/(\d+)$/;
  //   var match = href.match(regex);
  //   if (match) {
  //     return match[1];
  //   }
  // };

  // const studentId = getIdFromHref();

  const bgStyle = {
    cursor: "pointer",
    width: "350px",
    aspectRatio: "1/1",
    "--bg": getRandomColor(),
    "--accent": "hsl(0, 20%, 70%)",
    transition: "0.2s",
    background: `radial-gradient(circle at top left, var(--accent), transparent 75%), var(--bg)`,
    margin: "0",
    position: "relative",
    overflow: "hidden",
    borderRadius: "1.5rem",
  };
  // const maxDescriptionLength = 45;
  // const truncatedDescription =
  //   student.description.length > maxDescriptionLength
  //     ? student.description.substring(0, 30) + "..."
  //     : student.description;

  const randomEffect = getRandomEffect();

  return (
    <>
      <div>
        <article data-aos={randomEffect}>
          <figure style={bgStyle}>
           
              <img
                className="card-img"
                src={`data:image/png;base64,${student.image}`}
                alt=""
              />
          </figure>
          <h2>{student.firstName + " " + student.lastName}</h2>
          <p className="student-description">{student.email}</p>
        </article>
      </div>
    </>
  );
}

export default StudentCard;
