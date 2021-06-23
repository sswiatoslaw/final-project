import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/index.scss';
import Header from './components/Header';
import ShopPage from './pages/ShopPage'
import MainPage from './pages/MainPage'
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/shop">
              <ShopPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
