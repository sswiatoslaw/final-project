import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import App from './components/App/App';
import './assets/index.scss';
import 'antd/dist/antd.css';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (config.headers['No-Auth']) {
    return config;
  }
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    config.headers.authorization = accessToken;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
