import axios from 'axios';

export const getProducts = () => {
  return axios('https://boiling-dawn-71074.herokuapp.com/api/products');
};
