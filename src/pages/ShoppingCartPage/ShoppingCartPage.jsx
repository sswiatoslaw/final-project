import React from 'react';
import { connect } from 'react-redux';
import CartProductsList from '../../components/CartProducts/CartProductsList';
import Checkout from '../../components/Checkout/Checkout';
import useWindowSize from '../../сustomHooks';
import './ShoppingCartPage.scss';

const ShoppingCartPage = ({ cart }) => {
  const size = useWindowSize();

  return (
    !cart.length
      ? <h2 className='pages__title'>Your Bag is Empty</h2>
      : <div className='wrapper'>
        { size.width >= 769
          ? <div className='cart__container'>
            <Checkout/>
            <CartProductsList/>
          </div>
          : <>
            <CartProductsList/>
            <Checkout/>
          </>
        }
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);
