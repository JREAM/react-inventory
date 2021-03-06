import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Item from '../components/Item'

export default function ShopItem() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <h2>Shop Item</h2>
      <a href="#" onClick={() => navigate(-1)}>Back</a>
      {isLoading && <div className="loader"></div>}
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
