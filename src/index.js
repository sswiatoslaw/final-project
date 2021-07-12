import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import './assets/index.scss';
import App from './components/App';
import Categories from './components/Categories/Categories';
import { Row } from 'antd';
import './components/Categories/Categories.scss';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Row>
          <Categories />
        </Row>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
