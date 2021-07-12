import { combineReducers } from 'redux';
import modalReducer from './modal/reducer';
import adminReducer from './admin/reducer'
export default combineReducers({
  modal: modalReducer,
  admin: adminReducer
});
