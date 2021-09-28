import * as types from './actionTypes'

const initialState = false;
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {...state, products: action.payload}
    case types.ACTIVE_CARD:
      return {...state, card: action.payload}
    case types.GET_COLORS:
      return {...state, colors: action.payload}
    default:
      return state;
  }
};
export default adminReducer;
