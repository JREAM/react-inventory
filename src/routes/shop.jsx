import { useEffect, useState } from 'react';
import Item from '../components/Item'
import ItemSort from '../components/ItemSort'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState('title')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=0&limit=20')
    .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setIsLoading(false)
      })
    }, [])

  // This needs refactoring eventually.
  // BUG: drop downs down always change perfectly with arrow navigation
  const sort=() => {
    if (sortType=='rating') {
      if (sortOrder=='asc') {
        products.sort((a, b) => a.rating - b.rating)
      } else {
        products.sort((a, b) => b.rating - a.rating)
      }
    }
    if (sortType == 'price') {
      if (sortOrder=='asc') {
        products.sort((a, b) => a.price - b.price)
      } else {
        products.sort((a, b) => b.price - a.price)
      }
    } else {
      if (sortOrder=='asc') {
        products.sort((a, b) => a.title.localeCompare(b.title))
      } else {
        products.sort((a, b) => b.title.localeCompare(a.title))
      }
    }
    setProducts(products)
  }

  const handleSortType = (e) => {
    setSortOrder(e.target.value)
    sort()
  }

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value)
    sort()
  }

  return (
    <div className="container">
      <h2>Shop</h2>
      {isLoading && <div className="loader"></div>}
      <ItemSort sortType={sortType} sortOrder={sortOrder} handleSortOrder={handleSortOrder} handleSortType={handleSortType} />
      {
        products.map((item) =>
          <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          thumbnail={item.thumbnail}  // Add
          desc={item.description}
          />
        )
      }
    </div>
  );
}
