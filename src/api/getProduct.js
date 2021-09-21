import axios from 'axios';

export const getProduct = (id) => {
  return axios.get(`https://boiling-dawn-71074.herokuapp.com/api/products/${id}`);
};
