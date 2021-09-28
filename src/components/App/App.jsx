import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../../store/favorite/actions';
import { getCartAction } from '../../store/cart/actions';
import Routes from '../Routes';
import './App.scss';
import { useLocation } from 'react-router-dom';

function App ({getAllProducts, getCustomer, getWishlist, getCart}) {
  const { pathname } = useLocation();
  useEffect(() => {
    getAllProducts()
    getCustomer();
    getWishlist();
    getCart();
    window.scrollTo(0, 0);
  }, [getAllProducts, getCustomer, getWishlist, getCart, pathname]);

  return (
    <div className='App'>
      <Routes/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts()),
    getCustomer: () => dispatch(getCustomerAction()),
    getWishlist: () => dispatch(getWishlistAction()),
    getCart: () => dispatch(getCartAction()),
  };
};

export default connect(null, mapDispatchToProps)(App);
