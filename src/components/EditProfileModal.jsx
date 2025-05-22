import React, { useState, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';

const EditProfileModal = ({ onClose, showToast }) => {
  const { user, updateUser } = useUser();
  const { texts } = useLanguage();
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(user.profilePicture);
  const fileInputRef = useRef(null);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSave = () => {
    const updatedInfo = {
      name,
      phoneNumber
    };
    
    if (previewUrl !== user.profilePicture) {
      updatedInfo.profilePicture = previewUrl;
    }
    
    updateUser(updatedInfo);
    showToast(texts.profileUpdated);
    onClose();
  };
  
  return (
    <div className="edit-profile-modal">
      <div className="modal-content">
        <h2>{texts.editProfile}</h2>
        
        <div className="form-group">
          <label htmlFor="name">{texts.name}</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">{texts.phoneNumber}</label>
          <input 
            type="text" 
            id="phoneNumber" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label>{texts.profilePicture}</label>
          <div className="image-input-container">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button 
              className="preview-btn" 
              onClick={() => fileInputRef.current.click()}
            >
              {texts.selectImage}
            </button>
          </div>
          <div className="image-preview-container">
            {previewUrl && (
              <img src={previewUrl} alt="Preview" className="image-preview" />
            )}
          </div>
        </div>
        
        <div className="form-group">
          <button className="save-button" onClick={handleSave}>
            {texts.save}
          </button>
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

export default EditProfileModal;
