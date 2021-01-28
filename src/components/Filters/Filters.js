const maxLength = 255;

function Filters(props) {
  function handleTitleChange(event) {
    props.setTitle(event.target.value);
  }

  function handleCategoryChange(event) {
    props.setCategory(event.target.value);
  }

  function handlePublishedChange(event) {
    props.setPublished(event.target.value);
  }

  return (
    <div>
      <input onChange={handleTitleChange} value={props.title} maxLength={maxLength}/>
      <select onChange={handleCategoryChange} value={props.category}>
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <label htmlFor="all">All:</label>
      <input
        type="radio"
        value=""
        name="published"
        id="all"
        onChange={handlePublishedChange}
        checked={props.published === ''}
      />
      <label htmlFor="published">Published:</label>
      <input
        type="radio"
        value="published"
        name="published"
        id="published"
        onChange={handlePublishedChange}
        checked={props.published === 'published'}
      />
      <label htmlFor="draft">Draft:</label>
      <input
        type="radio"
        value="draft"
        name="published"
        id="draft"
        onChange={handlePublishedChange}
        checked={props.published === 'draft'}
      />
    </div>
  );
}

export default Filters;