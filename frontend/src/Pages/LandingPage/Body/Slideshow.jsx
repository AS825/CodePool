import React from 'react';
import { useState } from 'react';
import './Body.css';
import { nextSlide, previousSlide } from '../../../logic/slideshows';

const slideStyles = {
  width: '50%',
  height: '50%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Slideshow({ graduates }) {
  const [current, setCurrent] = useState(0);

  const goToPrevious = () => {
    const previous = previousSlide(current, graduates);
    setCurrent(previous);
  };

  const goToNext = () => {
    const next = nextSlide(current, graduates);
    setCurrent(next);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    //backgroundImage: `url(${graduates[currentIndex].imgSrc})`,
  };
  const goToSlide = slideIndex => {
    setCurrent(slideIndex);
  };
  return (
    <div className='sliderStyles'>
      <div>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>

      <div className='container-graduates' style={{ display: 'flex' }}>
        <img
          src={`data:image/jpeg;base64,${graduates[current].imageSource}`}
          className='graduant container_image'
        ></img>
        <div className='description'>
          <p>
            <span>{graduates[current].firstName}</span>
            <span> {graduates[current].lastName}</span>
            <em> {graduates[current].position} </em>
            <strong> {graduates[current].employer}</strong>
          </p>
        </div>
      </div>

      <div style={slideStylesWidthBackground}></div>

      <div className='dotsContainerStyles'>
        {graduates.map((slide, slideIndex) => (
          <div className='dotStyle' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
