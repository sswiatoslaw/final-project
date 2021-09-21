import { LOAD_PRODUCTS, MIN_PRICE, MAX_PRICE } from './actionTypes';
import { getFilteredProducts, getProducts } from '../../api/getProducts';

export const setProducts = cards => ({
  type: LOAD_PRODUCTS,
  payload: cards
});
export const setMinPrice = minPrice => ({
  type: MIN_PRICE,
  payload: minPrice
});
export const setMaxPrice = maxPrice => ({
  type: MAX_PRICE,
  payload: maxPrice
});

const fetchProducts = () => dispatch => {
  getProducts()
    .then((response) => {
      dispatch(setProducts(response.data))
      const pricesArray = response.data.map((item) => { return item.currentPrice })
      const minPrice = Math.min(...pricesArray)
      const maxPrice = Math.max(...pricesArray)
      dispatch(setMinPrice(minPrice))
      dispatch(setMaxPrice(maxPrice))
    })
}

export const getProductsByFilters = () => (dispatch, getState) => {
  const {filter} = getState();
  getFilteredProducts(filter)
    .then((response) => {
      if (response?.data?.products) {
        dispatch(setProducts(response.data.products))
        console.log(response.data.products);
      }
    })
    .catch((err) => console.log(err))
}
export default fetchProducts;
