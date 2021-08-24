import axios from 'axios';
import { BASE_URL } from '../api/common';

export const createFavoriteList = (newWishlist) => {
  return axios
    .post(`${BASE_URL}wishlist`, newWishlist)
}

export const addProductFavoriteItem = (productId) => {
  return axios
    .put(`${BASE_URL}wishlist/${productId}`)
};

export const getProductsFavoriteList = () => {
  return axios
    .get(`${BASE_URL}wishlist`)
};

export const deleteProductFavoriteItem = productId => {
  return axios
    .delete(`${BASE_URL}wishlist/${productId}`)
};