import { FILTER_PRODUCTS } from './actionTypes';

export const filterProducts = (filter) => ({
  type: FILTER_PRODUCTS,
  payload: filter
});
