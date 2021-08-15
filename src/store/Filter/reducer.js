import * as types from './actionTypes';

const initialStates = [];
const filterReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.FILTER_PRODUCTS:
      return (action.payload)
    default:
      return state;
  }
}

export default filterReducer