import axios from 'axios';

export const getSlides = async () => {
  return await axios('https://boiling-dawn-71074.herokuapp.com/api/slides');
};