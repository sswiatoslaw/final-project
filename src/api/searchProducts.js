import axios from 'axios';

export const searchProducts = (data) => {
  return axios.post('https://boiling-dawn-71074.herokuapp.com/api/products/search', data);
};
