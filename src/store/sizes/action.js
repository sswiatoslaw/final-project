import { GET_SIZES } from './actionTypes';

export const sizes = sizes => {
  return {
    type: GET_SIZES,
    payload: sizes
  };
};