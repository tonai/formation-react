import { useState } from 'react';

import { createArticle } from '../../services/article';

import Title from '../Title/Title';

function ArticlePage() {
  const [title, setTitle] = useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createArticle({
      title: title,
      category: 1,
      published: false
    });
  }

  return (
    <div>
      <Title title="Create new article" />
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input onChange={handleChange} value={title} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ArticlePage;
