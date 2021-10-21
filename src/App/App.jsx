import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchProducts from '../store/products/actions';
import { getCustomerAction, getWishlistAction } from '../store/favorite/actions';
import { getCartAction } from '../store/cart/actions';
import Routes from '../components/Routes';
import './App.scss';
import AdminPage from './../pages/AdminPage'

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
