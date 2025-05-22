import React, { createContext, useState, useContext, useEffect } from 'react';

// Translations
const translations = {
  en: {
    // Header
    storyGame: 'Story Game',
    achievements: 'Achievements',
    
    // Sections
    collection: 'Collection',
    yourCollection: 'Your Collection',
    profile: 'Profile',
    accountDetails: 'Account Details',
    general: 'General',
    language: 'Language',
    helpSupport: 'Help & Support',
    needHelp: 'Need Help?',
    faq: 'FAQ',
    feedback: 'Give Us Feedback',
    legal: 'Legal',
    termsConditions: 'Terms and Conditions',
    privacyPolicy: 'Privacy Policy',
    logout: 'Log Out',
    
    // Edit Profile
    editProfile: 'Edit Profile',
    name: 'Name',
    phoneNumber: 'Phone Number',
    profilePicture: 'Profile Picture',
    selectImage: 'Select Image',
    save: 'Save Changes',
    cancel: 'Cancel',
    
    // Account Details
    personalInfo: 'Personal Information',
    email: 'Email',
    memberSince: 'Member Since',
    edit: 'Edit',
    
    // Feedback
    feedback: 'Give Us Feedback',
    rateExperience: 'Rate your experience',
    tellUsMore: 'Tell us more',
    feedbackPlaceholder: 'What did you like or dislike? How can we improve?',
    submit: 'Submit Feedback',
    feedbackThanks: 'Thank you for your feedback!',
    feedbackSubmitted: 'Feedback submitted successfully!',
    
    // Notifications
    profileUpdated: 'Profile updated successfully!',
    languageChanged: 'Language changed to English',
  },
  da: {
    // Header
    storyGame: 'Historie Spil',
    achievements: 'Præstationer',
    
    // Sections
    collection: 'Samling',
    yourCollection: 'Din Samling',
    profile: 'Profil',
    accountDetails: 'Kontooplysninger',
    general: 'Generelt',
    language: 'Sprog',
    helpSupport: 'Hjælp & Support',
    needHelp: 'Brug for hjælp?',
    faq: 'FAQ',
    feedback: 'Giv os feedback',
    legal: 'Juridisk',
    termsConditions: 'Vilkår og betingelser',
    privacyPolicy: 'Privatlivspolitik',
    logout: 'Log ud',
    
    // Edit Profile
    editProfile: 'Rediger profil',
    name: 'Navn',
    phoneNumber: 'Telefonnummer',
    profilePicture: 'Profilbillede',
    selectImage: 'Vælg billede',
    save: 'Gem ændringer',
    cancel: 'Annuller',
    
    // Account Details
    personalInfo: 'Personlige oplysninger',
    email: 'E-mail',
    memberSince: 'Medlem siden',
    edit: 'Rediger',
    
    // Feedback
    feedback: 'Giv os feedback',
    rateExperience: 'Vurder din oplevelse',
    tellUsMore: 'Fortæl os mere',
    feedbackPlaceholder: 'Hvad kunne du lide eller ikke lide? Hvordan kan vi forbedre os?',
    submit: 'Send feedback',
    feedbackThanks: 'Tak for din feedback!',
    feedbackSubmitted: 'Feedback indsendt med succes!',
    
    // Notifications
    profileUpdated: 'Profil opdateret med succes!',
    languageChanged: 'Sprog ændret til dansk',
  }
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  
  const [texts, setTexts] = useState(translations[language]);
  
  useEffect(() => {
    setTexts(translations[language]);
    localStorage.setItem('language', language);
  }, [language]);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
