import { Link } from "react-router-dom";
export default function Navigation() {

  const token=localStorage.getItem('token')

  return (
    <nav className="navigation">
      <section className="container">
        <a className="navigation-title" href="/">App</a>
        <ul className="navigation-list">
          <li className="navigation-item"><Link className="navigation-link" to="/">Home</Link></li>
          <li className="navigation-item"><Link className="navigation-link" to="/shop">Shop</Link></li>
          {/* <li className="navigation-item"><Link className="navigation-link" to="/checkout">Checkout</Link></li> */}
          { !token ?
            <>
              <li className="navigation-item"><Link className="navigation-link" to="/signin">Sign In</Link></li>
              <li className="navigation-item"><Link className="navigation-link" to="/signup">Sign Up</Link></li>
            </>
            :
            <li className="navigation-item"><Link className="navigation-link" to="/signout">Sign Out</Link></li>
          }
        </ul>
      </section>
    </nav>
  )
}
