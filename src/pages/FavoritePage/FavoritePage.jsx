import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FavoriteProductsList from '../../components/FavoriteProducts/FavoriteProductsList';
import { addFavoritesAction } from '../../store/favorite/actions';

const FavoritePage = ({ allProducts, favorite, onToggleImportant, addFavorites }) => {
  const favoriteProductsList = favorite.map(it => allProducts.find(product => product.itemNo === it))
  console.log('favoriteProductsList', favoriteProductsList)
  const favoriteProductsItemNoList = favoriteProductsList.map(item => item.itemNo)
  console.log('favoriteProductsItemNoList', favoriteProductsItemNoList)

  useEffect(() => {
    addFavorites(favoriteProductsItemNoList)
  }, [])

  return (
    <>
      { !favoriteProductsList.length
        ? <h2 className='pages__title'>Your Favorite List is Empty</h2>
        : <FavoriteProductsList
          products={ favoriteProductsList }
          onToggleImportant={ onToggleImportant }
        /> }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    favorite: state.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (arr) => dispatch(addFavoritesAction(arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);