import "./App.css";

import Article from "../Article/Article";
import Header from "../Header/Header";

function App() {
  const art = {
    id: 0,
    title: 'Article 1',
    published: false,
    category: 'News',
    content: 'Lorem ipsum'
  };

  return (
    <div className="App">
      <Header alt="logo" />
      <Article article={art} />
    </div>
  );
}

export default App;
