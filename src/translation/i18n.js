import eng from './eng.json'
import ukr from './ukr.json'
import pol from './pol.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
   en: {
      translation: eng,
   },
   uk: {
      translation: ukr,
   },
   pl: {
        translation: pol,
   }
}

i18n
   .use(initReactI18next)
   .init({
      resources,
      lng: JSON.parse(localStorage.getItem('language')),
      fallbackLng: 'en'
   })

export default i18n;