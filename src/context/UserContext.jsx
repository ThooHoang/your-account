import React, { createContext, useState, useContext, useEffect } from 'react';
import { janek } from '../assets';

const defaultUser = {
  name: 'Janek Solecki',
  phoneNumber: '66772040',
  email: 'janek.solecki@example.com',
  memberSince: '2022-03-15',
  profilePicture: janek,
  storyProgress: 75,
  achievements: {
    completed: 5,
    total: 20
  }
};

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  
  const updateUser = (updatedInfo) => {
    setUser(prev => ({ ...prev, ...updatedInfo }));
  };
  
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
