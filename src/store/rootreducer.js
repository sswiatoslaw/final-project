import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import productsReducer from './products/reducer';

export default combineReducers({
  modal: modalReducer,
  allProducts: productsReducer
});
