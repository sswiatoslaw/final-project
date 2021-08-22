import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { removeItemFromFavoriteAction } from '../../store/favorite/actions';
import './FavoriteProduct.scss';

const FavoriteProductItem = ({product, addToCart, removeItemFromFavoriteAction, favorite}) => {
  const {imageUrls, name, color, currentPrice, sizes, quantity, _id} = product;

  const addItemToCart = (product) => {
    addToCart(product);
  };

  const removeItemImportant = (productId) => {
    if (favorite.find(product => product._id === productId)) {
      removeItemFromFavoriteAction(productId);
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
        <Button modifier='contained' text='Add to cart' onClick={ () => addItemToCart(product) } width='120px' height='44px'/>
        <span className='favorite__remove' onClick={ () => removeItemImportant(_id) }>Remove</span>
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
    removeItemFromFavoriteAction: (productId) => dispatch(removeItemFromFavoriteAction(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProductItem);

FavoriteProductItem.propTypes = {
  imageUrls: PropTypes.array,
  name: PropTypes.string,
  color: PropTypes.string,
  currentPrice: PropTypes.number,
  sizes: PropTypes.string,
  quantity: PropTypes.number,
  _id: PropTypes.string,
};
