import { useEffect, useState } from 'react';
import Item from '../components/Item'
import ItemSort from '../components/ItemSort'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortType, setSortType] = useState('title')
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=0&limit=30')
    .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setIsLoading(false)
      })
    }, [])

  const sort = () => {
    if (['rating', 'price'].indexOf(sortType) != -1 ) {
      if (sortOrder === 'asc') {
        products.sort((a, b) => a[sortType] - b[sortType] )
      } else {
        products.sort((a, b) => b[sortType] - a[sortType] )
      }
    }
    else if (sortType=='title') {
      if (sortOrder === 'asc') {
        products.sort((a, b) => a.title.localeCompare(b.title))
      } else {
        products.sort((a, b) => b.title.localeCompare(a.title))
      }
    }
    setProducts(products)
  }

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value)
    sort()
  }

  const handleSortType=(e) => {
    setSortType(e.target.value)
    sort()
  }

  return (
    <section className="container">
      <h2>Shop</h2>
      {isLoading && <div className="loader"></div>}
      <ItemSort sortType={sortType} sortOrder={sortOrder} handleOrder={handleSortOrder} handleType={handleSortType} />
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
    </section>
  );
}
