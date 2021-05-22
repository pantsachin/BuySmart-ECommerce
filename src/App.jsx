import react from "react";
import "./styles.css";
import { useState } from "react";
import WishList from "./components/WishList/wishList";
import Home from "./components/Home/home";
import Navigation from "./components/navigation/navigation";
import Cart from "./components/Cart/cart";
import BuySmartLandingPage from "./components/BuySmart/buysmart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<BuySmartLandingPage/>}/>
        <Route path="/product" element={<Home />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
