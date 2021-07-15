import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../../pages/MainPage/MainPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import LoginPage from '../../pages/LoginPage';
import ContactUsPage from '../../pages/ContactUsPage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import AboutPage from '../../pages/AboutPage';

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
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route path='/blog'>
          <BlogPage />
        </Route>
        <Route path='/contact-us'>
          <ContactUsPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
