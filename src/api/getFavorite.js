import axios from 'axios';

export const getFavorite = async () => {
  return await axios
    .get('https://boiling-dawn-71074.herokuapp.com/api/wishlist')
    .then(wishlist => {
      console.log('wishlist', wishlist)
    })
    .catch(err => {
      console.log(err)
    });
};

export const postFavorite = async (itemNo) => {
  return await axios
    .post('https://boiling-dawn-71074.herokuapp.com/api/wishlist', itemNo)
    .then(newWishlist => {
      console.log(newWishlist)
    })
    .catch(err => {
      console.log(err)
    })
}
