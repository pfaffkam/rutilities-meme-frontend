import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('en');
  

  return <LanguageContext.Provider value={{ language, setLanguage }}>{props.children}</LanguageContext.Provider>;
};

export default LanguageProvider;
