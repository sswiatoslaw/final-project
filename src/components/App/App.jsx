import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../../store/favorite/actions';
import Routes from '../Routes';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';

function App ({getAllProducts, allProducts, getCustomer, getWishlist}) {
  useEffect(() => {
    if (!allProducts.length) {
      getAllProducts();
    }
  }, [getAllProducts, allProducts]);

  useEffect(() => {
    getCustomer();
    getWishlist();
  }, [getCustomer, getWishlist])

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Routes />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
      </Switch>x
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
