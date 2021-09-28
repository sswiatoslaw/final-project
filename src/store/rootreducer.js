import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import formsDataReducer from './formsData/checkoutFormData/reducer';
import categoryReducer from './category/reducer'
import sizesReducer from './sizes/reducer';
import filterReducer from './Filter/reducer';
import colorReducer from './color/reducer';
import favoriteReducer from './favorite/reducer';
import adminReducer from './admin/reducer';
import selectedProductReducer from './productPage/reducer';
import selectedProductColorPageReducer from './productColorPage/reducer';

export default combineReducers({
  admin: adminReducer,
  modal: modalReducer,
  allSlides: slidesReducer,
  products: productsReducer,
  cart: cartReducer,
  userData: formsDataReducer,
  category: categoryReducer,
  sizes: sizesReducer,
  color: colorReducer,
  filter: filterReducer,
  favorite: favoriteReducer,
  selectedProduct: selectedProductReducer,
  identicProduct: selectedProductColorPageReducer,
});
