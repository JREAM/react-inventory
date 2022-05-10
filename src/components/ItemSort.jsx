export default function ItemSort({ sortType, sortOrder, handleSortType, handleSortOrder }) {

  return (
    <div style={{ border: "1px solid silver", padding: "40px", overflow: "auto", marginBottom: "40px" }}>
      <select name="sortType" value={sortType} type="dropdown" onChange="{handleSortType}">
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <select name="sortOrder" value={sortOrder} type="dropdown" onChange="{handeSortOrder}">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  )
}
