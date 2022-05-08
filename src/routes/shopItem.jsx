import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Item from '../components/Item'

export default function ShopItem() {
  const [product, setProduct] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data =>
        setProduct(data)
      )
  }, [])

  return (
    <div className="container">
      <h2>Shop Item</h2>
      {product &&
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          // add
          price={product.price}
          rating={product.rating}
          images={product.images} // array loop in item
          // end add
          desc={product.description}
          link={false}
        />
      }
    </div>
  );
}
