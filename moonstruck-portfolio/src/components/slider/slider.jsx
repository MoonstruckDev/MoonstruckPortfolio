import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import images from '../../helpers/getCoverImg'; // Assuming this helper returns image paths
import './slider.scss';

function Slider({ projects, currentIndex, setCurrentIndex }) {
  const [direction, setDirection] = useState(null);

  function handleDotClick(index) {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? 'next' : 'prev');
      setCurrentIndex(index);
    }
  }

  function nextImage() {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  }

  function prevImage() {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  }

  return (
    <section className="SliderContainer">
      {projects.map((project, index) => {
        // Determine classes for each slide based on currentIndex and direction
        let slideClasses = 'ImgSlider';
        if (index === currentIndex) slideClasses += ' active';
        if (
          (index === (currentIndex - 1 + projects.length) % projects.length && direction === 'prev') ||
          (index === (currentIndex + 1) % projects.length && direction === 'next')
        ) {
          slideClasses += ' incoming';
        }
        return (
          <div key={index} className={slideClasses}>
            {index === currentIndex && ( // Render only if current index matches
              <>
                <img src={images[project.cover.src]} alt={`Slide ${index + 1}`} />
                <h1 className="ProjectTitle kalam">{project.title}</h1>
              </>
            )}
          </div>
        );
      })}

      <div className="Dots">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`Dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <ArrowIcon className="Arrow ArrowSliderLeft" onClick={prevImage} aria-label="Previous image" />
      <ArrowIcon className="Arrow ArrowSliderRight" onClick={nextImage} aria-label="Next Image" />
    </section>
  );
}

export default Slider;
