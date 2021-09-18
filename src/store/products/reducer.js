import * as types from './actionTypes';

const initialStates = {
  allProducts: [],
  minPrice: 0,
  maxPrice: 0
};

const productsReducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return {...state, allProducts: action.payload};

    case types.MIN_PRICE:
      return {...state, minPrice: action.payload};

    case types.MAX_PRICE:
      return {...state, maxPrice: action.payload};
      
    default:
      return state;
  }
};

export default productsReducer;
