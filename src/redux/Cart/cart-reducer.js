import * as actionTypes from './cart-types';

const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const inCart = state.cart.find(
        cartItem =>
          cartItem.id === Number(action.payload.product.id)
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map(cartItem =>
              cartItem.id ===
              Number(action.payload.product.id)
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
          : [
              ...state.cart,
              { ...action.payload.product, qty: 1 }
            ]
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.payload.id
        )
      };
    }

    case actionTypes.ADJUST_ITEM_QTY: {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                qty:
                  Number.isNaN(
                    Number(action.payload.qty)
                  ) || action.payload.qty < 1
                    ? item.qty
                    : Number(action.payload.qty)
              }
            : item
        )
      };
    }

    case actionTypes.INCREMENT_ITEM_QTY: {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      };
    }

    case actionTypes.DECREMENT_ITEM_QTY: {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty <= 0 ? item.qty : item.qty - 1
              }
            : item
        )
      };
    }
    case actionTypes.EMPTY_CART: {
      return {
        ...state,
        cart: []
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
