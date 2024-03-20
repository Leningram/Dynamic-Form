import { ru } from './lang/ru';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
export const messages = {
  ru,
} as const;
i18next.use(initReactI18next).init({
  resources: messages,
  lng: 'ru',
  fallbackLng: 'ru',
});

export default i18next;
