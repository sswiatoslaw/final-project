import axios from 'axios';

export const getUser = () => {
  const token = localStorage.getItem('token');
  return axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/customers/customer', {
      headers: {
        Authorization: token
      }
    })
};