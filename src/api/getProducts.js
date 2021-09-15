import axios from 'axios';

export const getProducts = () => {
  return axios('https://boiling-dawn-71074.herokuapp.com/api/products');
};

export const getFilteredProducts = (filter) => {
  // eslint-disable-next-line prefer-const
  let queryString = ''
  for (const key in filter) {
    queryString += key + '=' + filter[key] + '&';
  }
  return axios(`https://boiling-dawn-71074.herokuapp.com/api/products/filter?${queryString}`);
};