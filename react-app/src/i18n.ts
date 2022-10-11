import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationsPL from './locales/pl/translations'
import translationsEN from './locales/en/translations'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pl',
        resources: {
            en: { translation: translationsEN },
            pl: { translation: translationsPL }
        }
    })

export default i18n