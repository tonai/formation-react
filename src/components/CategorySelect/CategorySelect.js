function CategorySelect(props) {
  const list = props.categories.map(category => (
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
