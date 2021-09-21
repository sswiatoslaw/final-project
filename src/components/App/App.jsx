import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../../store/favorite/actions';
import { getCartAction } from '../../store/cart/actions';
import Routes from '../Routes';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';

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

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(fetchProducts()),
    getCustomer: () => dispatch(getCustomerAction()),
    getWishlist: () => dispatch(getWishlistAction()),
    getCart: () => dispatch(getCartAction()),
  };
};

export default connect(null, mapDispatchToProps)(App);
