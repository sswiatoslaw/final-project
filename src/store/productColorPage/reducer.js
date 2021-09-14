import * as types from './actionTypes';

const initialStates = {};

const selectedProductColorPageReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.SELECT_PRODUCT_COLOR:
      return action.payload;
    default:
      return state;
  }
};

export default selectedProductColorPageReducer;
