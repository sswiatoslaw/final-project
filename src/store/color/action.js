import { GET_COLOR } from './actionTypes';

export const setColor = color => {
  return {
    type: GET_COLOR,
    payload: color
  };
};
