import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();
const SUPPORTED_LANGS = ['en', 'pl'];
const BROWSER_LANG = navigator.language.slice(0, 2);

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(() => {
    if (SUPPORTED_LANGS.includes(BROWSER_LANG)) {
      return BROWSER_LANG;
    }
    return 'en';
  });

  return <LanguageContext.Provider value={{ language, setLanguage }}>{props.children}</LanguageContext.Provider>;
};
