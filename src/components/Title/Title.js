import { useEffect } from 'react';

function Title(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <h1>{props.title}</h1>
  );
}

export default Title;
