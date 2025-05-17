import React from "react";
import './App.css'
import { LanguageProvider } from "./components/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  return (
    <LanguageProvider>
      <LanguageSelector />
    </LanguageProvider>
  );
};

export default App;
