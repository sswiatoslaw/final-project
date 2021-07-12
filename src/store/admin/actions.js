import * as types from './actionTypes'

export const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products
})

export const recCard = (card) => ({
  type: types.ACTIVE_CARD,
  payload: card
})