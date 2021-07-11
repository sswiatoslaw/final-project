import * as types from './actionTypes';
import getProducts from '../../api/getProducts';

export const setProducts = cards => ({
  type: types.LOAD_PRODUCTS,
  payload: cards
});

const fetchProducts = () => async dispatch => {
  await getProducts()
    .then(response => dispatch(setProducts(response.data)));
};

export default fetchProducts;
