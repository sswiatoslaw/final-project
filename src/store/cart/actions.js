import { LOAD_ITEMS_TO_CART } from './actionTypes';
import { addProductToCart, createCartList, decreaseProductQuantity, deleteProductFromCart, getCart } from '../../api/cartAPI';

export const addProductToCartAction = productId => dispatch => {
  addProductToCart(productId)
    .then(res => {
      if (res?.data) {
        dispatch(getCartAction())
      }
    })
    .catch(err => {
      console.log(err)
    })
};

export const addItemToCartAction = productId => dispatch => {
  getCart()
    .then(res => {
      if (res?.data) {
        dispatch(addProductToCartAction(productId))
      } else {
        dispatch(createCartList([productId]))
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCartAction = () => dispatch => {
  getCart()
    .then(res => {
      if (res?.data?.products) {
        dispatch(loadCardsAction(res.data.products))
      }
    })
    .catch(err => {
      console.log(err)
    })
};

export const loadCardsAction = arr => {
  return {
    type: LOAD_ITEMS_TO_CART,
    payload: arr
  };
};

export const removeItemFromCartAction = productId => dispatch => {
  deleteProductFromCart(productId)
    .then(res => {
      if (res?.data) {
        dispatch(getCartAction())
      }
    })
    .catch(err => {
      console.log(err)
    })
};

export const decreaseQuantity = productId => dispatch => {
  decreaseProductQuantity(productId)
    .then(res => {
      if (res?.statusText === 'OK') {
        dispatch(getCartAction())
      }
    })
    .catch(
      err => {
        console.log(err)
      }
    )
};
