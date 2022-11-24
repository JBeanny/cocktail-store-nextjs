export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CLEAR = "CLEAR";

const addToCart = (item, state) => {
  const updatedCart = [...state.cart];
  const updateItemIndex = updatedCart.findIndex((val) => val.id === item.id);

  if (updateItemIndex < 0) {
    updatedCart.push({ ...item, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updateItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updateItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeFromCart = (itemId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex((val) => val.id === itemId);

  if (updatedItemIndex === -1) return state;
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const clearCart = (state) => {
  return { ...state, cart: [] };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return addToCart(action.item, state);
    case REMOVE:
      return removeFromCart(action.itemId, state);
    case CLEAR:
      return clearCart(state);
    default:
      return state;
  }
};
