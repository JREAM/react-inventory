import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Navigation from './components/Navigation'
import Home from './routes/home'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import PageNotFound from './routes/pageNotFound'
import Checkout from "./routes/checkout";
import Shop from "./routes/shop";
import ShopItem from "./routes/shopItem";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="shop" element={<Shop />} />
          {/* shop/:id needs real lookup for 404 not static text in file */}
          <Route path="shop/:id" element={<ShopItem />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
