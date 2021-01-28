import { useState } from 'react';

import "./App.css";

import useArticles from '../../hooks/useArticles';
import useCategories from '../../hooks/useCategories';

import Article from "../Article/Article";
import Cart from "../Cart/Cart";
import Container from "../Container/Container";
import Filters from "../Filters/Filters"
import Header from "../Header/Header";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [published, setPublished] = useState('');
  const articles = useArticles();
  const categories = useCategories();

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
      categories={categories}
      categoryTitles={categoryTitles}
      key={article.id}
    />
  );

  return (
    <div className="App">
      <Header alt="logo" />
      <Title title="Homepage" />
      <Container>
        <Filters
          categories={categories}
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

export default App;
