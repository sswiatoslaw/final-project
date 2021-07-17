import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import formsDataReducer from './formsData/checkoutFormData/reducer';

export default combineReducers({
  modal: modalReducer,
  allProducts: productsReducer,
  cart: cartReducer,
  userData: formsDataReducer
});
