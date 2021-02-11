export function getArticles() {
  return fetch('http://localhost:3001/articles')
    .then(response => response.json());
}

export function getArticle(id) {
  return fetch('http://localhost:3001/articles/' + id)
    .then(response => response.json());
}

export function createArticle(article) {
  const clone = {...article};
  clone.id = Number(clone.id);
  clone.category = Number(clone.category);

  return fetch('http://localhost:3001/articles', {
    body: JSON.stringify(clone),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(data => data.json());
}

export function editArticle(article) {
  const clone = {...article};
  clone.id = Number(clone.id);
  clone.category = Number(clone.category);
  
  return fetch('http://localhost:3001/articles/' + clone.id, {
    body: JSON.stringify(clone),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  }).then(data => data.json());
}