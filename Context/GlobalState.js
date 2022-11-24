import React, { useReducer } from "react";
import { cartReducer, ADD, REMOVE, CLEAR } from "./reducers";
import CartContext from "./CartContext";

function GlobalState(props) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD, item: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE, itemId: productId });
  };

  const clearProductFromCart = () => {
    dispatch({ type: CLEAR });
  };

  const value = {
    drinks: [],
    cart: cartState.cart,
    addToCart: (item) => addProductToCart(item),
    removeFromCart: (itemId) => removeProductFromCart(itemId),
    clearCart: () => clearProductFromCart(),
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export async function getStaticProps() {
  const drinks = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/search.php?f=b"
  );
  return drinks;
}

export default GlobalState;
