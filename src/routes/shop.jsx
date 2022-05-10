import { useEffect, useState } from 'react';
import Item from '../components/Item'
import ItemSort from '../components/ItemSort'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState('title')
  const [sortOrder, setSortOrder] = useState('ascending')

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=0&limit=10')
    .then(res => res.json())
      .then(data => {
        // data.products.sort((a, b) => a.title.localeCompare(b.title));
        // data.products.sort((a, b) => a.price - b.price);
        setProducts(data.products)
        setIsLoading(false)
      })
  }, [])


  const handleSortType = (e) => {
    console.log(e.target.value)
    setSortType(e.target.value)
  }

  const handleSortOrder = (e) => {
    console.log(e.target.value)
    setSortOrder(e.target.value)
  }

  return (
    <div className="container">
      <h2>Shop</h2>
      {isLoading && <div className="loader"></div>}
      <ItemSort sortType={sortType} sortOrder={sortOrder} handleSortType={handleSortType} handleSortOrder={handleSortOrder} />
      {
        products.map((item) =>
          <Item
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}  // Add
          desc={item.description}
          />
        )
      }
    </div>
  );
}
