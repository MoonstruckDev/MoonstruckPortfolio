// Importing necessary dependencies and assets
import React, { useState } from 'react'; // React and useState hook for state management
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'; // SVG icon as a React component
import images from '../../helpers/getCoverImg'; // Helper function for image paths
import './slider.scss'; // SCSS stylesheet for the slider

function Slider({ projects, currentIndex, setCurrentIndex }) {
  const [direction, setDirection] = useState(null); // State variable for animation direction

  // Function to handle dot click, setting the direction and current index
  function handleDotClick(index) {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? 'next' : 'prev');
      setCurrentIndex(index);
    }
  }

  // Function to go to the next image
  function nextImage() {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  }

  // Function to go to the previous image
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
            <>
              <img src={images[project.cover.src]} alt={`Slide ${index + 1}`} />
              <h1 className="ProjectTitle kalam">{project.title}</h1>
            </>
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
