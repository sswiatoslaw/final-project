import * as types from './actionTypes';

export const add_SelectedMenu = (key) => ({
  type: types.ADD_SELECTEDMENU,
  payload: key,
});

export const toggle_isModalOpen = () => ({
  type: types.TOGGLE_ISMODALOPEN,
});
