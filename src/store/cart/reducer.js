import * as types from './actionTypes';

const initialStates = [];

const cartReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_TO_CART:
      return action.payload;

    default:
      return state;
  }
};

export default cartReducer;