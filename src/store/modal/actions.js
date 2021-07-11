import { SET_MODAL_HEADER, CHANGE_MODAL_STATE, CHANGE_PRODUCT, SET_MODAL_ADD_OR_DEL_VALUE } from './actionTypes'

export const setModalHeader = (modalAddOrDeleteValue, itemAtCart) => {
  return {type: SET_MODAL_HEADER, payload: `Do you want to ${modalAddOrDeleteValue} ${itemAtCart} to or from cart?`}
}
export const changeModalState = (data) => ({type: CHANGE_MODAL_STATE, payload: data})
export const changeCurrentProduct = (product) => ({type: CHANGE_PRODUCT, payload: product})
export const setModalAddOrDelValue = (data) => ({type: SET_MODAL_ADD_OR_DEL_VALUE, payload: data})
