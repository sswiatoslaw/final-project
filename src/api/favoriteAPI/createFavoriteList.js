import axios from 'axios';
import { BASE_URL, getAuthConfig } from '../common';

export const createFavoriteList = (newWishlist) => {
  return axios
    .post(`${BASE_URL}wishlist`, newWishlist, getAuthConfig())
}