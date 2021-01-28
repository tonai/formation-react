export function getArticles() {
  return fetch('http://localhost:3001/articles')
    .then(response => response.json());
}
