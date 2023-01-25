import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(navigator.language.slice(0, 2) || 'en');

  return <LanguageContext.Provider value={{ language, setLanguage }}>{props.children}</LanguageContext.Provider>;
};

export default LanguageProvider;
