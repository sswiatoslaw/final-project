import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../../pages/MainPage/MainPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import LoginPage from '../../pages/LoginPage';
import ContactUsPage from '../../pages/ContactUsPage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import AboutPage from '../../pages/AboutPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage/ShoppingCartPage';
import Footer from '../Footer/Footer';
import BlocksArticlesPages from '../../pages/BlogPage/BlocksArticlesPages/BlocksArticlesPages';
import FavoritePage from '../../pages/FavoritePage/FavoritePage';
import RegisterPage from '../../pages/RegisterPage';
// import ProductPage from './../../pages/ProductPage/index';

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
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/about'>
          <AboutPage/>
        </Route>
        <Route exact path='/blog'>
          <BlogPage />
        </Route>
        <Route exact path='/blog/post'>
          <BlocksArticlesPages/>
          </Route>
        <Route path='/contact-us'>
          <ContactUsPage />
        </Route>
        <Route path='/favorite'>
          <FavoritePage />
        </Route>
        <Route path='/cart'>
          <ShoppingCartPage />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
};

export default Routes;
