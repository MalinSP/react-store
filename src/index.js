import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-urms5rdo.us.auth0.com
//iV3ZUgVXgNlERC1bjfmkAOohvcfEs1VC

ReactDOM.render(
  <Auth0Provider
    domain='dev-urms5rdo.us.auth0.com'
    clientId='iV3ZUgVXgNlERC1bjfmkAOohvcfEs1VC'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
