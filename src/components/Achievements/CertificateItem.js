import React, { useState, useEffect } from 'react';
import './CertificateItem.css';
import ReactDOM from 'react-dom';

const CertificateItem = ({ certification }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isImageExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isImageExpanded]);

  const toggleImageExpand = (e) => {
    e.stopPropagation();
    setIsImageExpanded(!isImageExpanded);
  };

  // Create modal outside the certificate container
  const renderModal = () => {
    if (!isImageExpanded) return null;
    
    // Use React Portal to render the modal at the document body level
    return ReactDOM.createPortal(
      <div 
        className="certificate-modal" 
        onClick={() => setIsImageExpanded(false)}
      >
        <div 
          className="certificate-modal-content" 
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="close-modal-btn" 
            onClick={() => setIsImageExpanded(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <img 
            src={certification.image} 
            alt={certification.title}
            className="certificate-modal-image"
          />
          <div className="certificate-modal-details">
            <h3>{certification.title}</h3>
            <p>{certification.description}</p>
            <span className="certificate-date">{certification.date}</span>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="certificate-item">
      <div className="certificate-header">
        <div className="certificate-icon">
          <i className={certification.icon}></i>
        </div>
        <div className="certificate-title">
          <h3>{certification.title}</h3>
          <span className="certificate-date">{certification.date}</span>
        </div>
      </div>
      
      <div className="certificate-content">
        <p className="certificate-description">{certification.description}</p>
        
        <div className="certificate-image-container">
          <img 
            src={certification.image} 
            alt={certification.title}
            className="certificate-image"
          />
          <div className="certificate-image-overlay">
            <button 
              className="view-certificate-btn" 
              onClick={toggleImageExpand}
            >
              <i className="fas fa-search"></i> View Certificate
            </button>
          </div>
        </div>
      </div>
      
      {renderModal()}
    </div>
  );
};

export default CertificateItem;