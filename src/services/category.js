export function getCategories() {
  return fetch('http://localhost:3001/categories')
    .then(response => response.json());
}
