import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";
import i18nContext from "../../contexts/i18n";
import useCategories from '../../hooks/useCategories';
import useI18n from '../../hooks/useI18n';

import ArticlePage from '../ArticlePage/ArticlePage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import Header from "../Header/Header";

function App() {
  const categories = useCategories();
  const i18n = useI18n();

  return (
    <BrowserRouter>
      <i18nContext.Provider value={i18n}>
        <categoriesContext.Provider value={categories}>
          <Header alt="logo"/>
          <Switch>
            <Route path="/" exact component={ArticlesPage}/>
            <Route path="/article" exact component={ArticlePage}/>
            <Route path="/article/:id" exact component={ArticlePage}/>
            <Redirect to="/" />
          </Switch>
        </categoriesContext.Provider>
      </i18nContext.Provider>
    </BrowserRouter>
  );
}

export default App;
