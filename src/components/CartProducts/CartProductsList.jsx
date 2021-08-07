import React from 'react';
import { connect } from 'react-redux';
import CartProductItem from './CartProductItem';
import './CartProduct.scss';

const CartProductsList = ({ cart }) => {
  const getTotalPrice = () => {
    return cart.map(item => item.currentPrice * item.userQuantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };

  const products = cart.map((product) => {
    const { itemNo } = product;
    return (
      <li key={itemNo}>
        <CartProductItem productNo={itemNo} key={itemNo} />
      </li>
    );
  });

  return (
    <div className='cart__orders-container'>
      <h3 className='cart__title'>Your order</h3>
      <ul className='cart__list'>
        {products}
      </ul>
      <div className='cart__total-price'>
        <span>Total</span>
        <span>$ {getTotalPrice()}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(CartProductsList);
