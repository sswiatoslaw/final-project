import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CartProductsList from '../../components/CartProducts/CartProductsList';
import Checkout from '../../components/Checkout/Checkout';
import useWindowSize from '../../сustomHooks';
import { getCartAction } from '../../store/cart/actions';
import './ShoppingCartPage.scss';
import EmptyBanner from '../../components/EmptyBanner';

const ShoppingCartPage = ({cart, getCart}) => {
  useEffect(() => {
    getCart();
  }, [getCart])

  const size = useWindowSize();

  return (
    !cart.length
      ? <EmptyBanner title='Your cart is currently empty'/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => dispatch(getCartAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
