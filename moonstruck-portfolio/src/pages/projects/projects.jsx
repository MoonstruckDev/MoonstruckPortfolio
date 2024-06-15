import React, { useState } from 'react';
import './projects.scss'; // Assuming you have styles defined here
import projectData from '../../assets/projects.json';
import getBadgeComponent from '../../components/badges/badges';
import Slider from '../../components/slider/slider';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projectData[currentIndex];

  return (
    <>
      <Slider projects={projectData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <section>
      <div className="tech-stack">
            {currentProject.techstack.map((tech, idx) => (
              <div key={idx} className="badge-container">
                {getBadgeComponent(tech)}
              </div>
            ))}
          </div>
        <div key={currentIndex} className='description'>
                <img src={require('../../assets/images/booki_picture_1.png')} alt="" className='description__image' />
                <p className='description__text'>{currentProject.description}</p> 
        </div>
      </section>
    </>
  );
}

export default Projects;
