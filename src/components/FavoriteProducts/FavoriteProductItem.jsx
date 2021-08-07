import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { addItemToCartAction } from '../../store/cart/actions';
import { removeItemFromFavoriteAction } from '../../store/favorite/actions';
import './FavoriteProduct.scss';

const FavoriteProductItem = ({ addItemToCartAction, product, removeItemFromFavoriteAction, favorite }) => {
  const { imageUrls, name, color, currentPrice, sizes, quantity, itemNo } = product;

  const addItemToCart = () => {
    addItemToCartAction(product);
  };

  const removeItemImportant = (itemNo) => {
    if (favorite.includes(itemNo)) {
      removeItemFromFavoriteAction(itemNo);
    }
  }

  return (
    <>
      <div className='favorite__container'>
        <a href='#void' className='favorite__img-container'>
          <img className='favorite__img' src={ imageUrls[0] } alt={ name }/>
        </a>
        <div className='favorite__content'>
          <h3 className='favorite__title'><a className='favorite__link' href='#void'>{ name } || { color }</a></h3>
          <div className='favorite__product-info-content'>
            <div className='favorite__product-info'>
              <span className='favorite__size'>Size: { sizes }</span>
              <span className='favorite__price'>Price: $ { currentPrice }</span>
            </div>
            { quantity
              ? <span className='favorite__quantity favorite__quantity--available'>Available</span>
              : <span className='favorite__quantity--not-available'>Not available</span> }
          </div>
        </div>

      </div>

      <div className='favorite__content favorite__content--btn'>
        <Button modifier='contained' text='Add to cart' onClick={ () => addItemToCart() } width='120px' height='44px'/>
        <span className='favorite__remove' onClick={ () => removeItemImportant(itemNo) }>Remove</span>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCartAction: (itemNo) => dispatch(addItemToCartAction(itemNo)),
    removeItemFromFavoriteAction: (itemNo) => dispatch(removeItemFromFavoriteAction(itemNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProductItem);
