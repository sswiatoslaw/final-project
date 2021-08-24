import { ADD_ITEM_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, LOAD_ITEMS_TO_CART, REMOVE_ITEM_FROM_CART } from './actionTypes';

export const addItemToCartAction = product => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product
  };
};

export const increaseQuantity = productId => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId
  };
};

export const decreaseQuantity = productId => {
  return {
    type: DECREASE_QUANTITY,
    payload: productId
  };
};

export const loadCardsAction = arr => {
  return {
    type: LOAD_ITEMS_TO_CART,
    payload: arr
  };
};

export const removeItemFromCartAction = productId => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: productId
  };
};
