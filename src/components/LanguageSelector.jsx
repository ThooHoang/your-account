import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = ({ onClose }) => {
  const { language, changeLanguage, texts } = useLanguage();
  
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    onClose();
  };
  
  return (
    <div className="language-selector-modal">
      <div className="modal-content">
        <h2>{texts.language}</h2>
        <div className="language-list">
          <div 
            className={`language-option ${language === 'en' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <span>English</span>
            {language === 'en' && <i className="fas fa-check"></i>}
          </div>
          <div 
            className={`language-option ${language === 'da' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('da')}
          >
            <span>Dansk</span>
            {language === 'da' && <i className="fas fa-check"></i>}
          </div>
        </div>
        <button className="save-button" onClick={onClose}>
          {texts.cancel}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
