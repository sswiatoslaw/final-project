import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../../pages/MainPage/MainPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import LoginPage from '../../pages/LoginPage';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
