import * as types from './actionTypes';

const initialStates = [];
const categoryReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return ([...state], action.payload)
    default:
      return state;
  }
}

export default categoryReducer