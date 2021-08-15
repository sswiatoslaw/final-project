import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import formsDataReducer from './formsData/checkoutFormData/reducer';
import categoryReducer from './category/reducer'
import sizesReducer from './sizes/reducer';
import filterReducer from './Filter/reducer';
export default combineReducers({
  modal: modalReducer,
  allSlides: slidesReducer,
  allProducts: productsReducer,
  cart: cartReducer,
  userData: formsDataReducer,
  category: categoryReducer,
  sizes: sizesReducer,
  filter: filterReducer,
});
