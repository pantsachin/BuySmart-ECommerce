import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { data } from "../shoppingList.js";


const FeatureContext = createContext();

export function FeatureContextProvider({ children }) {
// const [data, setData] = useState([])
const [value, setValue] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://BuySmart-Backend.pantsachin.repl.co/products"
        );
        console.log(response);
        setValue(response.data.products)
         
      } catch (error) {
        console.log(
          "There was an error in fetching the data! Please try again!",
          error
        );
      }
    })();
  }, []);

  const [
    { showAllInventory, sortBy, showFastDelivery },
    filterDispatch
  ] = useReducer(filterReducerFunction, {
    showAllInventory: false,
    sortBy: null,
    showFastDelivery: false
  });

  function filterReducerFunction(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sortBy: action.payload };
      case "TOGGLE_INVENTORY":
        return { ...state, showAllInventory: !state.showAllInventory };
      case "TOGGLE_DELIVERY":
        return { ...state, showFastDelivery: !state.showFastDelivery };

      default:
        return state;
    }
  }

  function getSortedData(productList, sortBy) {
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a.price - b.price);
    }
    return productList;
  }

  function getFilteredData(productList, showAllInventory, showFastDelivery) {
    return productList
      .filter((items) => (showAllInventory ? true : items.inStock))
      .filter((items) => (showFastDelivery ? items.fastDelivery : true));
  }
  console.log("value", value)
  console.log(data) //back up from front end faker
  const productList = getSortedData(value, sortBy);
  const filteredData = getFilteredData(
    productList,
    showAllInventory,
    showFastDelivery
  );

  return (
    <FeatureContext.Provider
      value={{
        filteredData,
        filterDispatch,
        showAllInventory,
        sortBy,
        showFastDelivery
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeatureContext() {
  return useContext(FeatureContext);
}
