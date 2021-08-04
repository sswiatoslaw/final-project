import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  modal: modalReducer,
  allSlides: slidesReducer,
  allProducts: productsReducer,
  cart: cartReducer,
});
