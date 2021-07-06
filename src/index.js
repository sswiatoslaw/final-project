import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
// import './assets/index.scss';
// import Header from './components/Header';
// import ShopPage from './pages/ShopPage';
// import MainPage from './pages/MainPage';
// import LoginPage from './pages/LoginPage';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>

        <App/>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);