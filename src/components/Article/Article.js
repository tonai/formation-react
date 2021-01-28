import { useState } from 'react';
import './Article.css';

function Article(props) {
  const [isSelected, setIsSelected] = useState(false);
  // destructuring shortcut equivalent to:
  // const state = useState(false);
  // const isSelected = state[0];
  // const setIsSelected = state[1];

  const rootClassName = [
    props.article.published ? 'visible' : 'hidden',
    isSelected ? 'selected' : '',
    'article'
  ];

  function handleClick() {
    // setIsSelected(!isSelected);
    setIsSelected(isSelected => !isSelected);
  }

  // const categoryTitle = props.categories.find(category =>
  //   category.id === props.article.category
  // )?.title;
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
    </div>
  );
}

export default Article;
