import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as languages from './languages';

i18next.use(initReactI18next).init({
  resources: {
    ...Object.entries(languages).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if translation key is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
