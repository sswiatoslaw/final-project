import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import './assets/index.scss';
import App from './components/App';
import Categories from './components/Categories/Categories';
// import 'antd/dist/antd.css';
import { Row } from 'antd';
import pic from './assets/images/shoes&socks/bows.jpg';
import './components/Categories/Categories.scss';

const categoriesArr = [
  {
    text: 'one',
    url: pic
  },
  {
    text: 'two',
    url: pic
  },
  {
    text: 'three',
    url: pic
  }];

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
