import './Article.css';

function Article(props) {
  const rootClassName = [
    props.article.published ?
      'visible' :
      'hidden',
    'article'
  ];

  return (
    <div className={rootClassName.join(' ')}>
      <div>{props.article.title}</div>
      <div>{props.article.category}</div>
      <div>{props.article.published ?
        'Published' : 'Draft'}</div>
    </div>
  );
}

export default Article;
