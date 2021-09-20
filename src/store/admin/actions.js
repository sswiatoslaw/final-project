import * as types from './actionTypes'

export const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products
})

export const getColors = (colors) => ({
  type: types.GET_COLORS,
  payload: colors
})

export const recCard = (card) => ({
  type: types.ACTIVE_CARD,
  payload: card
})