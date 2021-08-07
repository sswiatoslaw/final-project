import * as types from './actionTypes';

const initialStates = []

const favoriteReducer = (state = initialStates, action) => {
  const addToLocalStorage = (state, newItemNo) => {
    return [...state, newItemNo]
  };

  const removeFromLocalStorage = (state, toRemoveItemNo) => {
    return [...state.filter(it => it !== toRemoveItemNo)]
  };

  switch (action.type) {
    case types.ADD_ITEM_TO_FAVORITE:
      localStorage.setItem('favorite', JSON.stringify(addToLocalStorage(state, action.payload)))
      // return updateSongFavoriteFlag(state, action.payload, true);
      return [...state, action.payload]

    case types.REMOVE_ITEM_FROM_FAVORITE:
      localStorage.setItem('favorite', JSON.stringify(removeFromLocalStorage(state, action.payload)))
      return [...state.filter(it => it !== action.payload)]

    case types.ADD_FAVORITES:
      return action.payload

    default:
      return state
  }
}

export default favoriteReducer;
