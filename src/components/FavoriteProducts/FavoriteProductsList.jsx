import React from 'react';
import FavoriteProductItem from './FavoriteProductItem';
import './FavoriteProduct.scss';
import { connect } from 'react-redux';
import { addItemToCartAction } from '../../store/cart/actions';

const FavoriteProductsList = ({favorite, addItemToCartAction}) => {
  const addToCart = (productId) => {
    addItemToCartAction(productId)
  }

  const productList = favorite.map((product) => {
    return (
      <li key={ product._id } className='favorite__item'>
        <FavoriteProductItem product={ product }
                             key={ product._id }
                             addToCart={ () => addToCart(product._id) }/>
      </li>
    );
  });

  return (
    <section className='favorite'>
      <div className='wrapper'>
        <ul className='favorite__list'>
          { productList }
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCartAction: (productId) => dispatch(addItemToCartAction(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProductsList);
