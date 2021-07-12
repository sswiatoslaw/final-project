import * as types from './actionTypes';

const initialState = {
  theme: 'light',
  mode: 'vertical',
  selectedMenu: '',
  isModalOpen: false,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SELECTEDMENU:
      return { ...state, selectedMenu: action.payload };
    case types.TOGGLE_ISMODALOPEN:
      return { ...state, isModalOpen: !state.isModalOpen };
    default:
      return state;
  }
};
export default modalReducer;
