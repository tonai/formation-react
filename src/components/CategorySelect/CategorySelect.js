import { useContext } from 'react';

import categoriesContext from '../../contexts/categories';

function CategorySelect(props) {
  const categories = useContext(categoriesContext);

  const list = categories.map(category => (
    <option
      key={category.id}
      value={category.id}
    >{category.title}</option>
  ));

  return (
    <select onChange={props.handleCategoryChange} value={props.category} name="category">
      <option value=""></option>
      {list}
    </select>
  );
}

export default CategorySelect;
