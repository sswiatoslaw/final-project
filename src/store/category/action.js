import { GET_CATEGORY } from './actionTypes';

export const category = category => {
  return {
    type: GET_CATEGORY,
    payload: category
  };
};
