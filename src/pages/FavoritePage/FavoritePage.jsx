import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FavoriteProductsList from '../../components/FavoriteProducts/FavoriteProductsList';
import { addFavoritesAction, getWishlistAction } from '../../store/favorite/actions';

const FavoritePage = ({favorite, onToggleImportant, getWishlist}) => {
  useEffect(() => {
    getWishlist();
  }, [getWishlist])

  return (
    <>
      { !favorite.length
        ? <h2 className='pages__title'>Your Favorite List is Empty</h2>
        : <FavoriteProductsList
          onToggleImportant={ onToggleImportant }
        /> }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (arr) => dispatch(addFavoritesAction(arr)),
    getWishlist: () => dispatch(getWishlistAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);