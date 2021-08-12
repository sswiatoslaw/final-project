import { ADD_FAVORITES } from './actionTypes';
import { getUser } from '../../api/getUser';
import { addProductFavoriteItem } from '../../api/favoriteAPI/addProductFavoriteItem';
import { createFavoriteList } from '../../api/favoriteAPI/createFavoriteList';
import { deleteProductFavoriteItem } from '../../api/favoriteAPI/deleteProductFavoriteItem';
import { getProductsFavoriteList } from '../../api/favoriteAPI/getProductsFavoriteList';

export const addProductToWishlistAction = productId => () => {
  addProductFavoriteItem(productId)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const addItemToFavoriteAction = productId => dispatch => {
  getProductsFavoriteList()
    .then(res => {
      if (res?.data) {
        dispatch(addProductToWishlistAction(productId))
      } else {
        dispatch(postWishlistAction([productId]))
      }
    }).catch(err => {
      console.log(err)
    })
}

export const removeItemFromFavoriteAction = productId => dispatch => {
  deleteProductFavoriteItem(productId)
    .then(res => {
      if (res?.data) {
        dispatch(getWishlistAction())
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const addFavoritesAction = arr => {
  return {
    type: ADD_FAVORITES,
    payload: arr
  }
}

export const getWishlistAction = () => (dispatch) => {
  getProductsFavoriteList().then(res => {
    if (res?.data?.products) {
      dispatch(addFavoritesAction(res.data.products))
    }
  }).catch(err => {
    console.log(err)
  })
}

export const postWishlistAction = (arr) => () => {
  createFavoriteList(arr).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

export const getCustomerAction = () => () => {
  getUser()
    .then(response => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
}
