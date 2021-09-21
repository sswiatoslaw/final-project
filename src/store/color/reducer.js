import * as types from './actionTypes';

const initialStates = [];
const colorReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.GET_COLOR:
      return ([...state], action.payload)
    default:
      return state;
  }
}

export default colorReducer