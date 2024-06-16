import React from 'react';
import './ImageModal.scss';

function ImageModal({ imageSrc, imageAlt, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt={imageAlt} />
        <button className="close-button" onClick={closeModal}>&#x2715;</button>
      </div>
    </div>
  );
}

export default ImageModal;
