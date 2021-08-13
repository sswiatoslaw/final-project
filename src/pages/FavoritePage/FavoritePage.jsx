import React from 'react';
import { connect } from 'react-redux';
import FavoriteProductsList from '../../components/FavoriteProducts/FavoriteProductsList';

const FavoritePage = ({ allProducts, favorite, onToggleImportant }) => {
  const importantCard = favorite.map(it => allProducts.find(product => product.itemNo === it))
  if (!importantCard.length) {
    return <h2 className='pages__title'>Your Favorite List is Empty</h2>
  }

  return (
    <>
      <FavoriteProductsList
        products={ importantCard }
        onToggleImportant={ onToggleImportant }
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    favorite: state.favorite
  }
}

export default connect(mapStateToProps)(FavoritePage);