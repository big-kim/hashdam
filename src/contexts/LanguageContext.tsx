'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr';

// 언어 정보 정의
export const LANGUAGES = {
  ko: { code: 'ko', name: 'Korean', flag: '🇰🇷', shortName: 'KR' },
  en: { code: 'en', name: 'English', flag: '🇺🇸', shortName: 'EN' },
  ja: { code: 'ja', name: 'Japanese', flag: '🇯🇵', shortName: 'JP' },
  zh: { code: 'zh', name: 'Chinese', flag: '🇨🇳', shortName: 'CN' },
  es: { code: 'es', name: 'Spanish', flag: '🇪🇸', shortName: 'ES' },
  fr: { code: 'fr', name: 'French', flag: '🇫🇷', shortName: 'FR' },
} as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ko'); // Changed default from 'en' to 'ko'

  // Initialize language from localStorage, browser language, or default to Korean
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('hashdam-language') as Language;
      if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage);
      } else {
        // If no saved language, try to detect browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('ko')) {
          setLanguageState('ko');
        } else if (browserLang.startsWith('en')) {
          setLanguageState('en');
        }
        // Default remains 'ko' as set in initial state
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hashdam-language', lang);
      // Update HTML lang attribute
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
