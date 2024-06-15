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
        <div key={currentIndex}>
            <div className='description--box'>
                <img src="../../assets/images/booki_cover" alt="" />
                <p>{currentProject.description}</p> 
            </div>

        </div>
      </section>
    </>
  );
}

export default Projects;
