import { ADD_FAVORITES, ADD_ITEM_TO_FAVORITE, REMOVE_ITEM_FROM_FAVORITE } from './actionTypes';
import { getUser } from '../../api/getUser';

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

export const getCustomerAction = () => () => {
  getUser()
    .then(response => {
      console.log(response)
    }).catch(() => {
      throw new Error('Error! Invalid email or password.');
    })
}
