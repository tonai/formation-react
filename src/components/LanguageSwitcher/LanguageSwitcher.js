import { useContext } from 'react';

import i18nContext from "../../contexts/i18n";

import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const i18n = useContext(i18nContext);

  function handleClick(event) {
    i18n.setLanguage(event.target.name);
  }

  return (
    <div className="LanguageSwitcher">
      <button
        className={i18n.language !== 'fr' ? 'disabled' : ''}
        onClick={handleClick}
        name="fr"
      >{i18n.t('French')}</button>
      <button
        className={i18n.language !== 'en' ? 'disabled' : ''}
        onClick={handleClick}
        name="en"
      >{i18n.t('English')}</button>
    </div>
  );
}

export default LanguageSwitcher;
