import { useState } from 'react';

import "./App.css";

import useArticles from '../../hooks/useArticles';

import Article from "../Article/Article";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Resize from "../Resize/Resize";
import Title from "../Title/Title";

function App() {
  const [counter, setCounter] = useState(0);
  const articles = useArticles();

  function handleClick() {
    setCounter(counter + 1);
  }

  const list = articles.map(article => <Article article={article} key={article.id} />);

  return (
    <div className="App">
      <Header alt="logo" />
      <Title title="Homepage" />
      {list}
      <Cart />
      <Resize />
      <button type="button" onClick={handleClick}>{counter}</button>
    </div>
  );
}

export default App;
