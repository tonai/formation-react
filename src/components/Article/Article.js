import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Article.css';

function Article(props) {
  const [isSelected, setIsSelected] = useState(false);

  const rootClassName = [
    props.article.published ? 'visible' : 'hidden',
    isSelected ? 'selected' : '',
    'article'
  ];

  function handleClick() {
    setIsSelected(isSelected => !isSelected);
  }

  function handleDelete(event) {
    event.stopPropagation();
    props.handleDelete(props.article.id);
  }

  const categoryTitle = props.categoryTitles[props.article.category];

  return (
    <div
      className={rootClassName.join(' ')}
      onClick={handleClick}
    >
      <div>{props.article.title}</div>
      <div>{categoryTitle}</div>
      <div>{props.article.published ?
        'Published' : 'Draft'}</div>
      <div>
        <Link to={'/article/' + props.article.id}>Edit</Link>
      </div>
      <div>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Article;
