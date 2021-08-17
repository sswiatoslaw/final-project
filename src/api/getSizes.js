import axios from 'axios';

export const getSizes = () => {
  return axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/sizes')
}