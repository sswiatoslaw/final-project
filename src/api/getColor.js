import axios from 'axios';

export const getColor = async (id) => {
  return await axios('https://boiling-dawn-71074.herokuapp.com/api/colors/' + id);
};