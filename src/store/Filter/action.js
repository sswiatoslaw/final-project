import { FILTER_PRODUCTS } from './actionTypes';

export const filterProducts = (products, size, price, category) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      size: size,
      price: price,
      category: category,
    }
  });
};