import "../../styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Navigation({ setRoute }) {
  return (
    <nav className="navigation">

        <div className="app-name"><Link to="/"><span>BuySmart</span></Link></div>

        <ul className="nav-links">

        
          <li className="nav-home nav-bar-elements">
            <Link to="/product">Products</Link>
          </li>

          <li className="nav-wishList nav-bar-elements">
            <Link to="/wishList">Wish List</Link>
          </li>

          <li className="nav-cart nav-bar-elements">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
  );
}
