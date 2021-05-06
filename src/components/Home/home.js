import "../../styles.css";
import Navigation from "../navigation/navigation";
import About from "../About/about";
import Products from "../products/products";
import App from "../../App";

export default function Home() {
  return (
    <div>
      <h1 style={{ color: "var(--heading-text-grey)" }}>
        E-Commerce - Run for Fun
      </h1>
      <Products />
    </div>
  );
}
