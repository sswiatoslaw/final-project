import * as types from './actionTypes';

const initialStates = [];
const sizesReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.GET_SIZES:
      return ([...state], action.payload)
    default:
      return state;
  }
}

export default sizesReducer