import axios from 'axios';

export const getUser = () => {
  return axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/customers/customer')
};