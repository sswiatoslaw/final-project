import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import QuantityComponent from '../QuantityComponent';
import { removeItemFromCartAction } from '../../store/cart/actions';
import './CartProduct.scss';

const CartProductItem = ({productItem, removeFromCart}) => {
  const {cartQuantity, product} = productItem;
  const {imageUrls, name, color, currentPrice, sizes, _id} = product;

  return (
    <div className='cart-item'>
      <a href='#void' className='cart-item__img-container'>
        <img className='cart-item__img' src={ imageUrls[0] } alt={ name }/>
      </a>
      <div className='cart-item__column'>
        <h3 className='cart-item__title'><a className='cart-item__link' href='#void'>{ name } || { color }</a></h3>
        <div className='cart-item__content'>
          <div className='cart-item__product-info'>
            <span className='cart-item__size'>Size: { sizes }</span>
            <span className='cart-item__price'>Price: $ { currentPrice }</span>
          </div>
          <QuantityComponent cartQuantity={ cartQuantity } id={ _id }/>
          <span className='cart-item__total-price'>$ { currentPrice * cartQuantity }</span>
          <Button icon={ <DeleteOutlined/> } onClick={ () => removeFromCart(_id) } style={ {border: 'none'} }/>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId) => dispatch(removeItemFromCartAction(productId))
  };
};

export default connect(null, mapDispatchToProps)(CartProductItem);

CartProductItem.propTypes = {
  imageUrls: PropTypes.array,
  name: PropTypes.string,
  color: PropTypes.string,
  currentPrice: PropTypes.number,
  sizes: PropTypes.string,
  _id: PropTypes.string,
};
