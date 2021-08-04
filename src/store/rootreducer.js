import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  modal: modalReducer,
  allProducts: productsReducer,
  cart: cartReducer,
});
