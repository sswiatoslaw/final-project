import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import slidesReducer from './slides/reducer';

export default combineReducers({
  modal: modalReducer,
  allSlides: slidesReducer,
});
