import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {ContextProvider} from "./contexts/cart-wishlist-context"
import {FeatureContextProvider} from "./contexts/features-context";
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
    <FeatureContextProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </FeatureContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
