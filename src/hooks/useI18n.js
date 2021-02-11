import { useState } from 'react';

import fr from "../locale/fr.json";

function useI18n() {
  const [language, setLanguage] = useState('en');

  function t(string) {
    if (language === 'fr' && fr[string]) {
      return fr[string];
    }
    return string;
  }

  return {
    t: t,
    language: language,
    setLanguage: setLanguage
  };
}

export default useI18n;
