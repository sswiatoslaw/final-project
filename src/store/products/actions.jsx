import { LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE, CHANGE_PRODUCTS, CHANGE_LOADING_STATE } from './types'

export const loadProductsRequest = () => ({type: LOAD_PRODUCTS_REQUEST})
export const loadProductsSuccess = (data) => ({type: LOAD_PRODUCTS_SUCCESS, payload: data})
export const loadProductsFailure = (data) => ({type: LOAD_PRODUCTS_FAILURE, payload: data})
export const changeProductList = (data) => ({type: CHANGE_PRODUCTS, payload: data})
export const changeLoadingState = () => ({type: CHANGE_LOADING_STATE, payload: false})
