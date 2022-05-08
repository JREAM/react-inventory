import { useEffect, useState } from 'react';
import Item from '../components/Item'

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="container">
      <h2>Shop</h2>

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
