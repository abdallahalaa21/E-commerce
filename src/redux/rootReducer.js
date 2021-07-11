import { combineReducers } from 'redux';

import cartReducer from './Cart/cart-reducer';
import productsReducer from './Products/products-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

export default rootReducer;
