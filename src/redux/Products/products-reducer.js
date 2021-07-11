import * as actionTypes from './products-types';
import { INITIAL_STATE } from '../initialState';

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT: {
      return {
        ...state,
        filteredProducts: state.products.filter(product =>
          product.title
            .toLowerCase()
            .includes(action.payload.value.toLowerCase())
        )
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
