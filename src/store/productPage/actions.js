import * as types from './actionTypes';

export const setProduct = cards => ({
  type: types.LOAD_PRODUCT_ID,
  payload: cards
});