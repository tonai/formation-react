import { useState } from 'react';

import useCategories from '../../hooks/useCategories';

import { createArticle } from '../../services/article';

import CategorySelect from '../CategorySelect/CategorySelect';
import Title from '../Title/Title';

function ArticlePage() {
  const categories = useCategories();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [published, setPublished] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handlePublishedChange(event) {
    setPublished(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createArticle({
      title: title,
      category: Number(category),
      published: published
    });
  }

  return (
    <div>
      <Title title="Create new article" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input onChange={handleTitleChange} value={title} />
          </label>
        </div>
        <div>
          <label>
            Category:
            <CategorySelect
              handleCategoryChange={handleCategoryChange}
              category={category}
              categories={categories}
            />
          </label>
        </div>
        <div>
          <label>
            Published:
            <input
              type="checkbox"
              onChange={handlePublishedChange}
              checked={published}
            />
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ArticlePage;
