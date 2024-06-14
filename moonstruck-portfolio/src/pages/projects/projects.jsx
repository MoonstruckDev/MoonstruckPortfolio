// IMPORTS
import React from 'react';
import './projects.scss'; // Assuming you have styles defined here
import projectData from '../../assets/projects.json';
import getBadgeComponent from '../../components/badges/badges';

// Home page
function Projects() {
    return (
       <section>
          <h1>Projects</h1>
          {projectData.map((project, index) => (
             <div key={index}>
                <h2>{project.title}</h2>
                <div className="tech-stack">
                   {project.techstack.map((tech, idx) => (
                      <div key={idx} className="badge-container">
                         {getBadgeComponent(tech)}
                      </div>
                   ))}
                </div>
             </div>
          ))}
       </section>
    );
 }
 
 export default Projects;
