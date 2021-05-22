import "../../styles.css";
import { data } from "../../shoppingList";
import { useCartAndWishListContext } from "../../contexts/cart-wishlist-context";
import { useFeatureContext } from "../../contexts/features-context";

export default function Products() {
  const { dispatch } = useCartAndWishListContext();
  const {
    filteredData,
    filterDispatch,
    showAllInventory,
    sortBy,
    showFastDelivery
  } = useFeatureContext();

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <fieldset>
          <legend>Sort By</legend>
          <input
            type="radio"
            id="Price - High to Low"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
          ></input>
          Price - High to Low
          <input
            type="radio"
            id="Price - Low to High"
            name="sort"
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
          ></input>
          Price - Low to High
        </fieldset>
      </div>

      <div>
        <fieldset>
          <legend>Filter By</legend>
          <input
            checked={showAllInventory}
            type="checkbox"
            onChange={() => filterDispatch({ type: "TOGGLE_INVENTORY" })}
          ></input>
          Include Out of Stock
          <input
            checked={showFastDelivery}
            type="checkbox"
            onChange={() => filterDispatch({ type: "TOGGLE_DELIVERY" })}
          ></input>
          Show Fast Delivery Only
        </fieldset>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredData.map((item) => (
          <div className="text-only-cards" style={{ margin: "1rem" }}>
            <img className="responsive-image" src={item.image} />
            <div
              className="content-container"
              style={{ paddingBottom: "1rem" }}
            >
              {item.name}
              <div>Rs. {item.price}</div>
              <div>
                {item.fastDelivery ? "Fast Delivery" : "Normal Delivery"}{" "}
                <div>{item.inStock ? "In Stock" : "Out of Stock"}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: item });
                  }}
                  className="primary-button"
                >
                  Add To Cart
                </div>

                <div
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: item })
                  }
                  className="secondary-button"
                >
                  Add to Wishlist
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
