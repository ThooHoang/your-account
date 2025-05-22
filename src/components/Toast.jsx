import React, { useEffect } from 'react';

const Toast = ({ message, isVisible, setIsVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsVisible]);

  return (
    <div className={`toast-message ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;
