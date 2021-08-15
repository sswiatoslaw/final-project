import axios from 'axios';

export const getCategory = () => {
  return axios('https://boiling-dawn-71074.herokuapp.com/api/catalog');
};