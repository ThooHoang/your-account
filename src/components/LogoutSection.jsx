import React from 'react';

const LogoutSection = ({ onLogout, text }) => {
  return (
    <div className="logout-section">
      <a href="#" className="logout-button" onClick={(e) => {
        e.preventDefault();
        onLogout();
      }}>
        <i className="fas fa-sign-out-alt"></i>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default LogoutSection;
