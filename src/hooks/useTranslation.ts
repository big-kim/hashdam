import { useLanguage } from '@/contexts/LanguageContext';
import { translations, Translations } from '@/data/translations';

export const useTranslation = (): Translations => {
  const { language } = useLanguage();
  const translationData = translations[language];
  
  // Fallback to Korean if translation data is not available
  if (!translationData) {
    console.warn(`Translation data not found for language: ${language}, falling back to Korean`);
    return translations.ko;
  }
  
  return translationData;
};
