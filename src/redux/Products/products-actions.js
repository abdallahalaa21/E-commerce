import * as actionTypes from './products-types';

export const searchProduct = searchValue => ({
  type: actionTypes.SEARCH_PRODUCT,
  payload: {
    value: searchValue
  }
});

export const updateProduct = collections => ({
  type: actionTypes.UPDATE_PRODUCTS,
  payload: collections
});
