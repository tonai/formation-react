import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { createArticle, editArticle, getArticle } from '../../services/article';

import CategorySelect from '../CategorySelect/CategorySelect';
import Title from '../Title/Title';

function ArticlePage(props) {
  const [article, setArticle] = useState({
    title: '',
    category: '',
    published: false,
    content: ''
  });
  const history = useHistory();
  const id = props.match.params.id;

  useEffect(() => {
    if (id !== undefined) {
      getArticle(id).then((article) => {
        setArticle(article);
      });
    }
  }, [id]);

  function handleChange(event) {
    const clone = {...article};
    if (event.target.type === 'checkbox') {
      clone[event.target.name] = event.target.checked;
    } else {
      clone[event.target.name] = event.target.value;
    }
    setArticle(clone);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (id === undefined) {
      createArticle(article).then(() => history.push('/'));
    } else {
      editArticle(article).then(() => history.push('/'));
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
            <input onChange={handleChange} value={article.title} name="title" />
          </label>
        </div>
        <div>
          <label>
            Category:
            <CategorySelect
              handleCategoryChange={handleChange}
              category={article.category}
            />
          </label>
        </div>
        <div>
          <label>
            Published:
            <input
              type="checkbox"
              onChange={handleChange}
              checked={article.published}
              name="published"
            />
          </label>
        </div>
        <div>
          <textarea onChange={handleChange} value={article.content} name="content"></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ArticlePage;
