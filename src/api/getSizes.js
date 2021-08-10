import axios from 'axios';

export const getSizes = async () => {
  return await axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/sizes')
}