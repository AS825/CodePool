import React from "react";
import { useState } from "react";
import "./Slideshow.css";

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
    //backgroundImage: `url(${graduates[currentIndex].imgSrc})`,
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
        <img
          src={`data:image/jpeg;base64,${graduates[currentIndex].imageSource}`}
          className="graduant container_image"
        ></img>
        <div className="description">
          <p>
            <span>{graduates[currentIndex].firstName}</span>
            <span> {graduates[currentIndex].lastName}</span>
            <em> {graduates[currentIndex].position} </em>
            <strong> {graduates[currentIndex].employer}</strong>
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
