import React from "react";

export default React.createContext({
  drinks: [],
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (productId) => {},
  clearCart: () => {},
});
