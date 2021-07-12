import * as actionTypes from './cart-types';

export const addToCart = product => ({
  type: actionTypes.ADD_TO_CART,
  payload: { product }
});

export const removeFromCart = itemID => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemID
  }
});

export const adjustItemQty = (itemID, qty) => ({
  type: actionTypes.ADJUST_ITEM_QTY,
  payload: {
    id: itemID,
    qty
  }
});

export const incrementItemQty = itemID => ({
  type: actionTypes.INCREMENT_ITEM_QTY,
  payload: {
    id: itemID
  }
});

export const decrementItemQty = itemID => ({
  type: actionTypes.DECREMENT_ITEM_QTY,
  payload: {
    id: itemID
  }
});

export const emptyCart = itemID => ({
  type: actionTypes.EMPTY_CART,
  payload: {
    id: itemID
  }
});
