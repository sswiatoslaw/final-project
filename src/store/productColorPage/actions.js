import * as types from './actionTypes';

export const setProductColor = cards => ({
  type: types.SELECT_PRODUCT_COLOR,
  payload: cards
})

export const setColorArray = color => ({
  type: types.SET_COLOR_ARRAY,
  payload: color
})