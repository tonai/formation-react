import { useEffect, useState } from 'react';

import { getArticles } from '../services/article';

function useArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(json => setArticles(json));
  }, []);

  return articles;
}

export default useArticles;
