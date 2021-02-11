import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import fr from "../../locale/fr.json";

import ArticlePage from '../ArticlePage/ArticlePage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import Header from "../Header/Header";

function App() {
  const [language, setLanguage] = useState('en');

  function t(string) {
    if (language === 'fr' && fr[string]) {
      return fr[string];
    }
    return string;
  }

  return (
    <BrowserRouter>
      <Header
        alt="logo"
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <ArticlesPage t={t} />}
        />
        <Route
          path="/article"
          exact
          render={() => <ArticlePage t={t} />}
        />
        <Route
          path="/article/:id"
          exact
          render={(props) => <ArticlePage t={t} id={props.match.params.id} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
