import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const temptItem = state.cart.find((item) => item.id === id + color);
    if (temptItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        amount,
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const temptCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: temptCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
