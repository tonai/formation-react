import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useCategories from '../../hooks/useCategories';

import { createArticle, editArticle, getArticle } from '../../services/article';

import CategorySelect from '../CategorySelect/CategorySelect';
import Title from '../Title/Title';

function ArticlePage(props) {
  const categories = useCategories();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [published, setPublished] = useState(false);
  const history = useHistory();
  const id = props.match.params.id;

  useEffect(() => {
    if (id !== undefined) {
      getArticle(id).then((article) => {
        setTitle(article.title);
        setCategory(article.category);
        setPublished(article.published);
      });
    }
  }, [id]);

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
    if (id === undefined) {
      createArticle({
        title: title,
        category: Number(category),
        published: published
      }).then(() => history.push('/'));
    } else {
      editArticle({
        id: id,
        title: title,
        category: Number(category),
        published: published
      }).then(() => history.push('/'));
    }
  }

  const pageTitle = id === undefined ? "Create new article" : "Edit article " + id;

  return (
    <div>
      <Title title={pageTitle} />
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
