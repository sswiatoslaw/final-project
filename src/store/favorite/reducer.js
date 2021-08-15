import * as types from './actionTypes';

const initialStates = []

const favoriteReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.ADD_FAVORITES:
      return action.payload

    default:
      return state
  }
}

export default favoriteReducer;
