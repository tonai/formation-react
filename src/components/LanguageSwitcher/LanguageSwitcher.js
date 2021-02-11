import "./LanguageSwitcher.css";

function LanguageSwitcher(props) {
  function handleClick(event) {
    props.setLanguage(event.target.name);
  }

  return (
    <div className="LanguageSwitcher">
      <button
        className={props.language !== 'fr' ? 'disabled' : ''}
        onClick={handleClick}
        name="fr"
      >{props.t('French')}</button>
      <button
        className={props.language !== 'en' ? 'disabled' : ''}
        onClick={handleClick}
        name="en"
      >{props.t('English')}</button>
    </div>
  );
}

export default LanguageSwitcher;
