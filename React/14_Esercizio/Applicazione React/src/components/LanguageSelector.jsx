import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Hello from "./Hello";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="it">Italiano</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <Hello />
    </div>
  );
};

export default LanguageSelector;
