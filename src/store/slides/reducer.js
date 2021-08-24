import * as types from './actionTypes';

const initialStates = [];

const slidesReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.LOAD_SLIDES:
      return action.payload;

    default:
      return state;
  }
};

export default slidesReducer;