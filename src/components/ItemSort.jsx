// export default function ItemSort({ sortType, sortOrder, sortHandler, handleSortOrder, handleSortType }) {
export default function ItemSort({ type, order, handleType, handleOrder, sortHandler }) {

  return (
    <div className="row">
      <div className="column">
        <select name="sortType" value={type} type="dropdown" onChange={handleType}>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="column">
        <select name="sortOrder" value={order} type="dropdown" onChange={handleOrder}>
          <option value="asc">&uarr; Ascending</option>
          <option value="desc">&darr; Descending</option>
        </select>
      </div>
      <div className="column">
      </div>
      <div className="column">
      </div>
    </div>
  )
}
