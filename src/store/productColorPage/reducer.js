import * as types from './actionTypes';

const initialStates = {};

const selectedProductColorPageReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.SELECT_PRODUCT_COLOR:
      return {...state, arrayProduct: action.payload};
    case types.SET_COLOR_ARRAY:
      return {...state, arrayColor: action.payload};
    default:
      return state;
  }
};

export default selectedProductColorPageReducer;
