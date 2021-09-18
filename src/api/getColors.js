import axios from 'axios';

export const getColors = async () => {
  return await axios('https://boiling-dawn-71074.herokuapp.com/api/colors');
};