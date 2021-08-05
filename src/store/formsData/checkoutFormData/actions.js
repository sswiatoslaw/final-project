import {ADD_DATA_FROM_FORM_CHECKOUT} from './actionTypes';

export const addDataFromFormCheckout = data => {
  return {
    type: ADD_DATA_FROM_FORM_CHECKOUT,
    payload: data
  }
}
