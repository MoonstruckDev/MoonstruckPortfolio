import React, { useState } from "react";
import "./projects.scss";
import projectData from "../../assets/projects.json";
import getBadgeComponent from "../../components/badges/badges";
import Slider from "../../components/slider/slider";
import pictures from "../../helpers/getPictureImg";
import ImageModal from "../../components/modal/ImageModal";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const currentProject = projectData[currentIndex];

  function openModal(imageSrc) {
    setModalImage(imageSrc);
  }

  function closeModal() {
    setModalImage(null);
  }

  return (
    <>
      <Slider
        projects={projectData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <div className="tech-stack">
        {currentProject.techstack.map((tech, idx) => (
          <div key={idx} className="badge-container">
            {getBadgeComponent(tech)}
          </div>
        ))}
      </div>
      <section className="main__container">
        <article className="description">
          <img
            src={pictures[currentProject.pictures[1].src]}
            alt={currentProject.pictures[1].alt}
            className="description__image"
            onClick={() => openModal(pictures[currentProject.pictures[1].src])}
            style={{ cursor: "pointer" }}
          />
          <h2 className="description__text">{currentProject.description}</h2>
        </article>
        <article className="description_2">
          <img
            src={pictures[currentProject.pictures[2].src]}
            alt={currentProject.pictures[2].alt}
            className="description__image"
            onClick={() => openModal(pictures[currentProject.pictures[2].src])}
            style={{ cursor: "pointer" }}
          />
          <h3 className="description__text">{currentProject.description_2}</h3>
        </article>
        <div className="github-badge">
          {currentProject.live ? (
            <a href={currentProject.live}>Link To The Website</a>
          ) : null}

          <a href={currentProject.link}>
            <h4>Checkout the github repo</h4>
            {getBadgeComponent("github")}
          </a>
        </div>
      </section>

      {modalImage && (
        <ImageModal
          imageSrc={modalImage}
          imageAlt="Fullscreen"
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Projects;
