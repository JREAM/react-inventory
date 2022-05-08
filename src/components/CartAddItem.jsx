import { useCookies } from "react-cookie";

export default function CartAddItem({ id, price }) {

  const [cookies, setCookie] = useCookies(['cart']);

  const handleClick=(e) => {
    console.log('id', e.target.dataset.id);
    console.log('price', e.target.dataset.price);

    // @TODO Easy way to json encode/decode and inject/remove ID?
    setCookie("cart", e.target.dataset.id, {
      path: "/"
    });

  }

  return (
    <div data-id={id} style={{ border: "1px solid silver", padding: "40px", background: "#f3f3f3" }}>
      {cookies.cart && <p>{cookies.cart}</p>}
      <button onClick={handleClick}  data-price={price} data-id={id}>
        Add to Cart
      </button>
    </div>
  )
}

