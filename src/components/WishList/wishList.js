import "../../styles.css";
import {useCartAndWishListContext} from "../../contexts/cart-wishlist-context"


export default function WishList() {
const { state } = useCartAndWishListContext();

  return <div>
      <h1>WishList Items</h1>
      <div>
        {state.wishListArray.map((item) => (
          <div>
            {" "}
            <div class="horizontal-card">
              <h3>{item.name}</h3>
              <p>description Text</p>
            </div>
          </div>
        ))}
      </div>
  </div>;
}
