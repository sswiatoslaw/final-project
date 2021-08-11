import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction } from '../../store/favorite/actions';
import Routes from '../Routes';
import './App.scss';

function App ({ getAllProducts, allProducts, getCustomer }) {
  useEffect(() => {
    if (!allProducts.length) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  useEffect(() => {
    getCustomer()
  }, [getCustomer])

  return (
    <div className='App'>
      <Routes />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);