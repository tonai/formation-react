import "./App.css";

import Article from "../Article/Article";
import Header from "../Header/Header";

function App() {
  const articles = [
    {
      id: 0,
      title: 'Article 1',
      published: false,
      category: 'News',
      content: 'Lorem ipsum'
    },
    {
      id: 1,
      title: 'Article 2',
      published: true,
      category: 'News',
      content: 'Lorem ipsum'
    },
    {
      id: 2,
      title: 'Article 3',
      published: true,
      category: 'Blog',
      content: 'Lorem ipsum'
    }
  ];
  const list = articles.map(article => <Article article={article} key={article.id} />);

  return (
    <div className="App">
      <Header alt="logo" />
      {list}
    </div>
  );
}

export default App;
