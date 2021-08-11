import axios from 'axios';

export const getFavorite = () => {
  return axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/wishlist')
};

export const postFavorite = (newWishlist) => {
  return axios
    .post('https://boiling-dawn-71074.herokuapp.com/api/wishlist', newWishlist)
    .then(newWishlist => {
      console.log(newWishlist)
    })
    .catch(err => {
      console.log(err)
    })
}
