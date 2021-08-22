import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../../store/favorite/actions';
import { getCartAction } from '../../store/cart/actions';
import Routes from '../Routes';
import './App.scss';

function App ({getAllProducts, allProducts, getCustomer, getWishlist, getCart}) {
  useEffect(() => {
    if (!allProducts.length) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  useEffect(() => {
    getCustomer();
    getWishlist();
    getCart();
  }, [getCustomer, getWishlist, getCart])

  return (
    <div className='App'>
      <Routes/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts()),
    getCustomer: () => dispatch(getCustomerAction()),
    getWishlist: () => dispatch(getWishlistAction()),
    getCart: () => dispatch(getCartAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
