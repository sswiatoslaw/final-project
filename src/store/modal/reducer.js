import * as types from './actionTypes'

const initialState = {
  theme: 'light',
  mode: 'inline',
  selectedMenu: ''
}
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SELECTEDMENU:
      return {...state, selectedMenu: action.payload}
    default:
      return state;
  }
};
export default modalReducer;
