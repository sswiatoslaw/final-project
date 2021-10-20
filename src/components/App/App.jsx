import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../../store/favorite/actions';
import { getCartAction } from '../../store/cart/actions';
import Routes from '../Routes';
import './App.scss';
import AdminPage from './../../pages/AdminPage'

function App ({getAllProducts, getCustomer, getWishlist, getCart}) {
  useEffect(() => {
    getAllProducts()
  }, [getAllProducts]);

  useEffect(() => {
    getCustomer();
    getWishlist();
    getCart();
  }, [getCustomer, getWishlist, getCart])

  return (
    <div className='App'>
      <Switch>
      <Route path='/admin'>
          <AdminPage />
      </Route>
      <Route path='/'>
            <Routes/>
      </Route>
      </Switch>

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
