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
import NewCollectionPage from './../../pages/NewCollectionPage/NewCollectionPage';
import SaleNowPage from './../../pages/SaleNowPage/index';
import KnittingCollectionPage from './../../pages/KnittingCollectionPage/index';
import AdminPage from './../../pages/AdminPage'
import ProductPage from '../../pages/ProductPage/ProductPage';

const Routes = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/shop/:id'>
          <ProductPage />
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
        <Route path='/new-collection'>
          <NewCollectionPage />
        </Route>
        <Route path='/sale-now'>
          <SaleNowPage />
        </Route>
        <Route path='/knitting-collection'>
          <KnittingCollectionPage />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
};

export default Routes;