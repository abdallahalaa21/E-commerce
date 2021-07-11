import * as actionTypes from './products-types';

// eslint-disable-next-line import/prefer-default-export
export const searchProduct = searchValue => ({
  type: actionTypes.SEARCH_PRODUCT,
  payload: {
    value: searchValue
  }
});
