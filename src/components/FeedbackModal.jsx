import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FeedbackModal = ({ onClose, showToast }) => {
  const { texts } = useLanguage();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', { feedback, rating });
    
    // Show success state
    setSubmitted(true);
    
    // After 2 seconds, close the modal and show toast
    setTimeout(() => {
      onClose();
      showToast(texts.feedbackSubmitted);
    }, 2000);
  };
  
  return (
    <div className="edit-profile-modal">
      <div className="modal-content">
        <h2>{texts.feedback}</h2>
        
        {submitted ? (
          <div className="feedback-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <p>{texts.feedbackThanks}</p>
          </div>
        ) : (
          <>
            <div className="form-group">
              <label>{texts.rateExperience}</label>
              <div className="rating-selector">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    className={`star-button ${rating >= star ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    <i className="fas fa-star"></i>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="feedback">{texts.tellUsMore}</label>
              <textarea 
                id="feedback" 
                rows="5"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={texts.feedbackPlaceholder}
              ></textarea>
            </div>
            
            <button 
              className="save-button"
              onClick={handleSubmit}
              disabled={!feedback.trim()}
            >
              {texts.submit}
            </button>
          </>
        )}
        
        <button 
          className="close-modal" 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
