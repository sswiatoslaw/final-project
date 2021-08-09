import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import QuantityComponent from '../QuantityComponent';
import { removeItemFromCartAction } from '../../store/cart/actions';
import './CartProduct.scss';

const CartProductItem = ({ productNo, cart, removeFromCart }) => {
  const { imageUrls, name, color, currentPrice, sizes, itemNo, userQuantity } = cart.find(item => item.itemNo === productNo);

  const removeItemFromCart = (itemNo) => {
    removeFromCart(itemNo);
  };

  return (
    <div className='cart-item'>
      <a href='#void' className='cart-item__img-container'>
        <img className='cart-item__img' src={ imageUrls } alt={ name }/>
      </a>
      <div className='cart-item__column'>
        <h3 className='cart-item__title'><a className='cart-item__link' href='#void'>{ name } || { color }</a></h3>
        <div className='cart-item__content'>
          <div className='cart-item__product-info'>
            <span className='cart-item__size'>Size: { sizes }</span>
            <span className='cart-item__price'>Price: $ { currentPrice }</span>
          </div>
          <QuantityComponent itemNo={ itemNo }/>
          <span className='cart-item__total-price'>$ { currentPrice * userQuantity }</span>
          <Button icon={ <DeleteOutlined/> } onClick={ () => removeItemFromCart(itemNo) } style={ { border: 'none' } }/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (itemNo) => dispatch(removeItemFromCartAction(itemNo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProductItem);
