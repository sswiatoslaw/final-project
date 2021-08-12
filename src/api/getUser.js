import axios from 'axios';
import { getAuthConfig } from './common';

export const getUser = () => {
  return axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/customers/customer', getAuthConfig())
};