import axios from 'axios';
import { BASE_URL, getAuthConfig } from '../common';

export const getProductsFavoriteList = () => {
  return axios
    .get(`${BASE_URL}wishlist`, getAuthConfig())
};
