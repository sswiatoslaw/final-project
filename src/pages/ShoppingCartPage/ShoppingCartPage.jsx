import React from 'react';
import { connect } from 'react-redux';
import CartProductsList from '../../components/CartProducts/CartProductsList';
import './ShoppingCartPage.scss';

const ShoppingCartPage = ({ cart }) => {
  if (!cart.length) {
    return <h2>Your Bag is Empty</h2>;
  }

  return (
    <>
      <CartProductsList />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCartPage);
