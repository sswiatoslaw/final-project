import * as types from './actionTypes';

const initialStates = [];

const formsDataReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.ADD_DATA_FROM_FORM_CHECKOUT:
      return [action.payload];

    default:
      return state;
  }
};

export default formsDataReducer;
