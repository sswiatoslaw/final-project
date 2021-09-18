import axios from 'axios';
import { BASE_URL } from '../api/common';

export const createCartList = (newCart) => {
  return axios
    .post(`${BASE_URL}cart`, newCart)
}

export const addProductToCart = (productId) => {
  return axios
    .put(`${BASE_URL}cart/${productId}`)
};

export const getCart = () => {
  return axios
    .get(`${BASE_URL}cart`)
};

export const deleteProductFromCart = productId => {
  return axios
    .delete(`${BASE_URL}cart/${productId}`)
};

export const decreaseProductQuantity = productId => {
  return axios
    .delete(`${BASE_URL}cart/product/${productId}`)
};