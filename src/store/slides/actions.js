import * as types from './actionTypes';
import { getSlides } from '../../api/getSlides';

export const setSlides = slides => ({
  type: types.LOAD_SLIDES,
  payload: slides
});

const fetchSlides = () => async dispatch => {
  await getSlides()
    .then(response => dispatch(setSlides(response.data)));
};

export default fetchSlides;