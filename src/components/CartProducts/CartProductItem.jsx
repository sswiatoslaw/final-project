import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import QuantityComponent from '../QuantityComponent';
import { removeItemFromCartAction } from '../../store/cart/actions';
import './CartProduct.scss';

const CartProductItem = ({ productId, cart, removeFromCart }) => {
  const { imageUrls, name, color, currentPrice, sizes, _id, userQuantity } = cart.find(item => item._id === productId);

  const removeItemFromCart = () => {
    removeFromCart(_id);
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
          <QuantityComponent productId={ _id }/>
          <span className='cart-item__total-price'>$ { currentPrice * userQuantity }</span>
          <Button icon={ <DeleteOutlined/> } onClick={ () => removeItemFromCart(_id) } style={ { border: 'none' } }/>
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
    removeFromCart: (productId) => dispatch(removeItemFromCartAction(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProductItem);
