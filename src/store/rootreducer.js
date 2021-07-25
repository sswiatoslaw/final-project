import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';
import productsReducer from './products/reducer';

export default combineReducers({
  modal: modalReducer,
  allSlides: slidesReducer,
  allProducts: productsReducer
});
