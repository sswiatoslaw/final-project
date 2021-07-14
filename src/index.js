import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import './assets/index.scss';
import App from './components/App';
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
