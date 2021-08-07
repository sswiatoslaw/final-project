import React from 'react';
import { connect } from 'react-redux';
import CartProductsList from '../../components/CartProducts/CartProductsList';
import Checkout from '../../components/Checkout/Checkout';
import useWindowSize from '../../сustomHooks';
import './ShoppingCartPage.scss';

const ShoppingCartPage = ({ cart }) => {
  const size = useWindowSize();

  if (!cart.length) {
    return <h2>Your Bag is Empty</h2>;
  }

  if (size.width >= 769) {
    return (
      <div className='wrapper'>
        <div className='cart__container'>
          <Checkout/>
          <CartProductsList/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='wrapper'>
        <CartProductsList/>
        <Checkout/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);
