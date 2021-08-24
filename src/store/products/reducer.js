import * as types from './actionTypes';

const initialStates = [];

const productsReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
