import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./locales/zh";
import en from "./locales/en";

const savedLang = typeof window !== "undefined"
  ? localStorage.getItem("opc-lang") || "zh"
  : "zh";

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

// Persist language choice
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("opc-lang", lng);
  }
});

export default i18n;
