import axios from 'axios';

export const getSlides = () => {
  return axios('https://boiling-dawn-71074.herokuapp.com/api/slides');
};