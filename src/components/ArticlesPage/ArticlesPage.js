import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import categoriesContext from "../../contexts/categories";
import i18nContext from "../../contexts/i18n";

import useArticles from '../../hooks/useArticles';

import Article from "../Article/Article";
import Cart from "../Cart/Cart";
import Container from "../Container/Container";
import Filters from "../Filters/Filters"
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function ArticlesPage() {
  const i18n = useContext(i18nContext);
  const categories = useContext(categoriesContext);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [published, setPublished] = useState('');
  const articles = useArticles();

  const categoryTitles = {};
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    categoryTitles[category.id] = category.title;
  }

  function handleClick() {
    setCounter(counter + 1);
  }

  const filteredArticles = articles.filter(article => {
    return article.title.includes(title);
  }).filter(article => {
    return category === '' || article.category === Number(category);
  }).filter(article => {
    return published === '' ||
      (article.published === true && published === 'published') ||
      (article.published === false && published === 'draft');
  });

  const list = filteredArticles.map(article =>
    <Article
      article={article}
      categoryTitles={categoryTitles}
      key={article.id}
    />
  );

  return (
    <div className="App">
      <Title title={i18n.t('Homepage')} />
      <Link to="/article">Create new article</Link>
      <Container>
        <Filters
          title={title}
          setTitle={setTitle}
          category={category}
          setCategory={setCategory}
          published={published}
          setPublished={setPublished}
        />
        {list}
      </Container>
      <Container children={<Cart />} />
      <Resize />
      <button type="button" onClick={handleClick}>{counter}</button>
    </div>
  );
}

export default ArticlesPage;
