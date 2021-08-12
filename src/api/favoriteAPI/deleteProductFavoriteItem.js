import axios from 'axios';
import { BASE_URL, getAuthConfig } from '../common';

export const deleteProductFavoriteItem = (productId) => {
  console.log('delete')
  return axios
    .delete(`${BASE_URL}wishlist/${productId}`, getAuthConfig())
};