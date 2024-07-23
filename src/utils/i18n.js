import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en/translation.json";
import tr from "./i18n/tr/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },
});

export default i18n;
