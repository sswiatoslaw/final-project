import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import formsDataReducer from './formsData/checkoutFormData/reducer';
import favoriteReducer from './favorite/reducer';
import adminReducer from './admin/reducer';

export default combineReducers({
  admin: adminReducer,
  modal: modalReducer,
  allSlides: slidesReducer,
  allProducts: productsReducer,
  cart: cartReducer,
  userData: formsDataReducer,
  favorite: favoriteReducer,
});
