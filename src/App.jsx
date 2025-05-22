import React, { useState } from 'react';
import AccountHeader from './components/AccountHeader';
import LinkSection from './components/LinkSection';
import LogoutSection from './components/LogoutSection';
import EditProfileModal from './components/EditProfileModal';
import AccountDetailsModal from './components/AccountDetailsModal';
import FeedbackModal from './components/FeedbackModal';
import Toast from './components/Toast';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { UserProvider, useUser } from './context/UserContext';
import { 
  vector, vector1, vector2, vector3, 
  vector4, vector5, vector6, vector7 
} from './assets';

const AppContent = () => {
  const { texts, language, changeLanguage } = useLanguage();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  
  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'da' : 'en';
    changeLanguage(newLanguage);
    showToast(newLanguage === 'en' ? 'Language changed to English' : 'Sprog ændret til dansk');
  };
  
  // Define link sections data with translations
  const sectionData = [
    {
      title: texts.collection,
      links: [
        { icon: vector, text: texts.yourCollection, url: "#", onClick: null }
      ]
    },
    {
      title: texts.profile,
      links: [
        { icon: vector1, text: texts.accountDetails, url: "#", onClick: () => setShowAccountDetails(true) }
      ]
    },
    {
      title: texts.general,
      links: [
        { 
          icon: vector2, 
          text: `${texts.language}: ${language === 'en' ? 'English' : 'Dansk'}`, 
          url: "#", 
          onClick: toggleLanguage 
        }
      ]
    },
    {
      title: texts.helpSupport,
      links: [
        { icon: vector3, text: texts.needHelp, url: "#", onClick: null },
        { icon: vector4, text: texts.faq, url: "#", onClick: null },
        { icon: vector5, text: texts.feedback, url: "#", onClick: () => setShowFeedback(true) }
      ]
    },
    {
      title: texts.legal,
      links: [
        { icon: vector6, text: texts.termsConditions, url: "#", onClick: null },
        { icon: vector7, text: texts.privacyPolicy, url: "#", onClick: null }
      ]
    }
  ];

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      // Perform logout logic here
      alert('Logged out successfully');
    }
  };

  return (
    <div className="container">
      <AccountHeader onEditProfile={() => setShowEditProfile(true)} />
      
      <main className="account-main">
        {sectionData.map((section, index) => (
          <LinkSection 
            key={index}
            title={section.title} 
            links={section.links.map(link => ({
              ...link,
              handleClick: link.onClick
            }))} 
          />
        ))}
        
        <LogoutSection onLogout={handleLogout} text={texts.logout} />
      </main>
      
      {showEditProfile && (
        <EditProfileModal 
          onClose={() => setShowEditProfile(false)} 
          showToast={showToast}
        />
      )}
      
      {showAccountDetails && (
        <AccountDetailsModal 
          onClose={() => setShowAccountDetails(false)}
          showToast={showToast}
        />
      )}
      
      {showFeedback && (
        <FeedbackModal
          onClose={() => setShowFeedback(false)}
          showToast={showToast}
        />
      )}
      
      <Toast 
        message={toastMessage}
        isVisible={isToastVisible}
        setIsVisible={setIsToastVisible}
      />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </LanguageProvider>
  );
};

export default App;
