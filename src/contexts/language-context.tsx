"use client"

import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import { locales, type Locale, translations } from '@/lib/locales';

type TranslationKeys = keyof typeof translations.en;

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedLang = localStorage.getItem('language') as Locale;
      if (storedLang && locales.includes(storedLang)) {
        setLanguage(storedLang);
      }
    } catch (error) {
      console.warn('Could not access localStorage for language setting.');
    }
  }, []);

  const handleSetLanguage = (lang: Locale) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.warn('Could not access localStorage to set language.');
    }
  };

  const t = (key: TranslationKeys): string => {
    if (!isMounted) return translations.en[key]; // Return default on server
    return translations[language]?.[key] || translations.en[key];
  };

  const value = { language, setLanguage: handleSetLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
