import React from "react";
import { useState } from "react";
import "./Body.css";
import Mark from "../../../../src/assets/Mark.png";
import Roman from "../../../../src/assets/Roman.png";

const slideStyles = {
  width: "50%",
  height: "50%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Slideshow({ graduates }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? graduates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === graduates.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    // backgroundImage: `url(${Mark})`,
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>
      </div>

      <div className="container-graduates" style={{ display: "flex" }}>
        <img src={Mark} className="graduant container_image"></img>
        <div className="description">
          <p>
            {graduates[0].firstName}, {graduates[0].lastName}
            <strong> {graduates[0].employer}</strong>
          </p>
        </div>
      </div>

      <div style={slideStylesWidthBackground}></div>

      <div className="dotsContainerStyles">
        {graduates.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
