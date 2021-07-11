import products from 'static/products';

// eslint-disable-next-line import/prefer-default-export
export const INITIAL_STATE = {
  cart: [],
  products,
  filteredProducts: products
};
