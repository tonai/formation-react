import { useContext } from 'react';

import languageContext from "../../contexts/language";

import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const contextValue = useContext(languageContext);

  function handleClick(event) {
    contextValue.setLanguage(event.target.name);
  }

  return (
    <div className="LanguageSwitcher">
      <button
        className={contextValue.language !== 'fr' ? 'disabled' : ''}
        onClick={handleClick}
        name="fr"
      >{contextValue.t('French')}</button>
      <button
        className={contextValue.language !== 'en' ? 'disabled' : ''}
        onClick={handleClick}
        name="en"
      >{contextValue.t('English')}</button>
    </div>
  );
}

export default LanguageSwitcher;
