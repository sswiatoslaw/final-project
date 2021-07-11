import axios from 'axios';
import { loadProductsRequest, loadProductsSuccess, loadProductsFailure } from './actions'

const normalizeData = (data) => {
  const favor = JSON.parse(localStorage.getItem('favor')) || []
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  return data.map(elem => {
    elem.isFavorite = favor.includes(elem.itemNo)
    let flag = true
    cart.forEach(item => {
      if (item.itemNo === elem.itemNo) {
        elem.amountAtCart = item.amountAtCart
        flag = false
      }
    })
    if (flag) {
      elem.amountAtCart = 0
    }
    return elem
  })
}

export const getItems = () => (dispatch) => {
  dispatch(loadProductsRequest())
  axios('/products')
    .then(result => {
      dispatch(loadProductsSuccess(normalizeData(result.data.items)))
    })
    .catch((error) => {
      dispatch(loadProductsFailure(error.message))
    })
}
