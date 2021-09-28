import axios from 'axios';

export const getColor = (id) => {
  return axios.get(`https://boiling-dawn-71074.herokuapp.com/api/colors/${id}`)
};