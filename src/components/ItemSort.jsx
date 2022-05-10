export default function ItemSort({ sortType, sortOrder, handleSortOrder, handleSortType }) {

  return (
    <div className="row">
      <div className="column">
        <select name="sortType" type="dropdown" onChange={handleSortType}>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="column">
        <select name="sortOrder" type="dropdown" onChange={handleSortOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="column">
      </div>
    </div>
  )
}
