// IMPORTS
import { useState } from 'react';
import './slider.scss';

// ASSETS
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'; // Importing the SVG as a React component

// Shows the images in the slider
function Slider({ images }) { 
    const [currentIndex, setCurrentIndex] = useState(0);
 
    function nextImage() {
       setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
 
    function prevImage() { 
       setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };
 
    function goToImage(index) {
        setCurrentIndex(index);
    }
 
    return (
       <section className='SliderContainer'>
          {images.length > 1 && ( // If only 1 image show only the one image
          <> 
             {/* Shows image counter */}
             {/* <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> */}
             
             {/* Functionality for arrows */}
             <Arrow className='Arrow ArrowSliderLeft' onClick={prevImage} aria-label="Previous image" />
             <Arrow className='Arrow ArrowSliderRight' onClick={nextImage} aria-label="Next Image" />

             {/* Dot navigation */}
             <div className='Dots'>
                 {images.map((_, index) => (
                     <div
                         key={index}
                         className={`Dot ${index === currentIndex ? 'active' : ''}`}
                         onClick={() => goToImage(index)}
                         aria-label={`Go to image ${index + 1}`}
                     />
                 ))}
             </div>
          </>
          )}
          
          {/* Shows image based on current index */}
          <img className='ImgSlider' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} /> 
       </section>
    );
}
 
export default Slider;
