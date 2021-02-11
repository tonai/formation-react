import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";
import languageContext from "../../contexts/language";
import useCategories from '../../hooks/useCategories';
import fr from "../../locale/fr.json";

import ArticlePage from '../ArticlePage/ArticlePage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import Header from "../Header/Header";

function App() {
  const [language, setLanguage] = useState('en');
  const categories = useCategories();

  function t(string) {
    if (language === 'fr' && fr[string]) {
      return fr[string];
    }
    return string;
  }

  const contextValue = {
    t: t,
    language: language,
    setLanguage: setLanguage
  };

  return (
    <BrowserRouter>
      <languageContext.Provider value={contextValue}>
        <categoriesContext.Provider value={categories}>
          <Header alt="logo"/>
          <Switch>
            <Route path="/" exact component={ArticlesPage}/>
            <Route path="/article" exact component={ArticlePage}/>
            <Route path="/article/:id" exact component={ArticlePage}/>
            <Redirect to="/" />
          </Switch>
        </categoriesContext.Provider>
      </languageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
