import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import store from './store/store';
import './assets/index.scss';
import App from './components/App';
import 'antd/dist/antd.css';
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
