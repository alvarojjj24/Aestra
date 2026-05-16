import * as Localization from 'expo-localization';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/common.json';
import es from './locales/es/common.json';

const i18n = createInstance();

const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? 'en';

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: deviceLanguage === 'es' ? 'es' : 'en',
  fallbackLng: 'en',
  resources: {
    en: { common: en },
    es: { common: es },
  },
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
