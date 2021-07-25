import axios from 'axios';

export const getProducts = async () => {
  return await axios('https://boiling-dawn-71074.herokuapp.com/api/products');
};
