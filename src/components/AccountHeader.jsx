import React from 'react';
import { janek, background, assetUrl } from '../assets';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';

const AccountHeader = ({ onEditProfile }) => {
  const { user } = useUser();
  const { texts } = useLanguage();
  
  // Use the background image directly (it's already imported)
  const headerStyle = {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="account-header" style={headerStyle}>
      <div className="profile-section">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile picture" className="profile-img" id="profile-image" />
        </div>
        <div className="user-info">
          <div className="name-section">
            <h2 id="user-name">{user.name}</h2>
            <button className="edit-button" aria-label="Edit profile" onClick={onEditProfile}>
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <p className="user-number" id="user-number">{user.phoneNumber}</p>
        </div>
      </div>

      <div className="stats-box">
        <div className="story-game">
          <h3>{texts.storyGame}</h3>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${user.storyProgress}%` }} id="story-progress"></div>
            </div>
            <span className="percentage" id="progress-percentage">{user.storyProgress}%</span>
          </div>
        </div>

        <div className="achievements">
          <h3>{texts.achievements}</h3>
          <p className="achievement-count">
            <span className="completed" id="achievements-completed">{user.achievements.completed}</span>/
            <span id="achievements-total">{user.achievements.total}</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
