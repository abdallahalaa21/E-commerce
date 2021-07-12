import * as actionTypes from './products-types';

const productsReducer = (
  state = {
    products: [],
    filteredProducts: []
  },
  action
) => {
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

    case actionTypes.UPDATE_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
