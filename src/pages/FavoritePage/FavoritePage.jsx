import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FavoriteProductsList from '../../components/FavoriteProducts/FavoriteProductsList';
import { addFavoritesAction, getWishlistAction } from '../../store/favorite/actions';
import EmptyBanner from '../../components/EmptyBanner';

const FavoritePage = ({favorite, onToggleImportant, getWishlist}) => {
  useEffect(() => {
    getWishlist();
  }, [getWishlist])

  return (
    <>
      { !favorite.length
        ? <EmptyBanner title='Your Favorite List is Empty'/>
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
