export function getArticles() {
  return fetch('http://localhost:3001/articles')
    .then(response => response.json());
}

export function createArticle(article) {
  return fetch('http://localhost:3001/articles', {
    body: JSON.stringify(article),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(data => data.json());
}
