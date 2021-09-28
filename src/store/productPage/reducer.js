import * as types from './actionTypes';

const initialStates = {};

const selectedProductReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCT_ID:
      return action.payload;
    default:
      return state;
  }
};

export default selectedProductReducer;
