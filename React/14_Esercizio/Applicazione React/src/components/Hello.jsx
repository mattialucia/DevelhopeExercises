import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
  en: "Hello, World!",
  it: "Ciao, Mondo!",
  es: "¡Hola, Mundo!",
  fr: "Bonjour, Monde!",
};

const Hello = () => {
  const { language } = useContext(LanguageContext);

  return <h2>{translations[language]}</h2>;
};

export default Hello;
