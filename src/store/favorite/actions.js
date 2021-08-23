import { ADD_FAVORITES } from './actionTypes';
import { getUser } from '../../api/getUser';
import { createFavoriteList, addProductFavoriteItem, getProductsFavoriteList, deleteProductFavoriteItem } from '../../api/favoriteAPI';

export const addProductToWishlistAction = productId => dispatch => {
  addProductFavoriteItem(productId)
    .then(res => {
      if (res?.data) {
        dispatch(getWishlistAction())
      }
    })
    .catch(err => {
      console.log(err)
    })
}

// heart switch icon
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

export const postWishlistAction = (arr) => dispatch => {
  createFavoriteList(arr).then(res => {
    if (res?.data) {
      dispatch(getWishlistAction())
    }
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
