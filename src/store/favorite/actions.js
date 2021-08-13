import { ADD_FAVORITES, ADD_ITEM_TO_FAVORITE, REMOVE_ITEM_FROM_FAVORITE } from './actionTypes';

export const addItemToFavoriteAction = itemNo => {
  return {
    type: ADD_ITEM_TO_FAVORITE,
    payload: itemNo
  }
}

export const removeItemFromFavoriteAction = itemNo => {
  return {
    type: REMOVE_ITEM_FROM_FAVORITE,
    payload: itemNo
  }
}

export const addFavoritesAction = arr => {
  return {
    type: ADD_FAVORITES,
    payload: arr
  }
}
