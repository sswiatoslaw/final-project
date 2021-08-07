import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import formsDataReducer from './formsData/checkoutFormData/reducer';
import favoriteReducer from './favorite/reducer';

export default combineReducers({
  modal: modalReducer,
  allSlides: slidesReducer,
  allProducts: productsReducer,
  cart: cartReducer,
  userData: formsDataReducer,
  favorite: favoriteReducer,
});
