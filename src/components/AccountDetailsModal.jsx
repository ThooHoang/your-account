import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';

const AccountDetailsModal = ({ onClose, showToast }) => {
  const { user, updateUser } = useUser();
  const { texts } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    phoneNumber: user.phoneNumber,
    email: user.email
  });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
    showToast(texts.profileUpdated);
  };
  
  return (
    <div className="edit-profile-modal">
      <div className="modal-content">
        <h2>{texts.accountDetails}</h2>
        
        <div className="account-info-section">
          <div className="section-header">
            <h3>{texts.personalInfo}</h3>
            {!isEditing && (
              <button 
                className="edit-info-button"
                onClick={() => setIsEditing(true)}
              >
                <i className="fas fa-edit"></i> {texts.edit}
              </button>
            )}
          </div>
          
          {isEditing ? (
            <div className="edit-account-form">
              <div className="form-group">
                <label htmlFor="name">{texts.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">{texts.phoneNumber}</label>
                <input 
                  type="text" 
                  id="phoneNumber" 
                  name="phoneNumber"
                  value={formData.phoneNumber} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{texts.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-actions">
                <button 
                  className="cancel-button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user.name,
                      phoneNumber: user.phoneNumber,
                      email: user.email
                    });
                  }}
                >
                  {texts.cancel}
                </button>
                <button 
                  className="save-button"
                  onClick={handleSave}
                >
                  {texts.save}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="info-item">
                <span className="info-label">{texts.name}:</span>
                <span className="info-value">{user.name}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">{texts.phoneNumber}:</span>
                <span className="info-value">{user.phoneNumber}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">{texts.email}:</span>
                <span className="info-value">{user.email}</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">{texts.memberSince}:</span>
                <span className="info-value">{formatDate(user.memberSince)}</span>
              </div>
            </>
          )}
        </div>
        
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

export default AccountDetailsModal;
