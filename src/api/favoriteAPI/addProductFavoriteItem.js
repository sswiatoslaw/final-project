import axios from 'axios';
import { BASE_URL, getAuthConfig } from '../common';

export const addProductFavoriteItem = (productId) => {
  return axios
    .put(`${BASE_URL}wishlist/${productId}`, null, getAuthConfig())
};
